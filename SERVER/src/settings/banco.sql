-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Jun-2023 às 06:09
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estok_local`
--
CREATE DATABASE IF NOT EXISTS `estok_local` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `estok_local`;

DELIMITER $$
--
-- Procedimentos
--
DROP PROCEDURE IF EXISTS `sp_atualiza_estoque`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_atualiza_estoque` (IN `id_produto_e` INT, IN `qtde_compra_e` INT, IN `unitario_e` DECIMAL(15,4), IN `lote_e` VARCHAR(10), IN `data_compra_e` DATE)   BEGIN
    DECLARE contador int(11);

    SELECT count(*) into contador FROM estoques WHERE id_produto = id_produto_e;

    IF contador > 0 THEN
        UPDATE estoques e SET e.quantidade = e.quantidade + qtde_compra_e WHERE e.id_produto = id_produto_e;
    ELSE
        INSERT INTO estoques (id_produto, quantidade) values (id_produto_e, qtde_compra_e);
 	END IF;
    
END$$

DROP PROCEDURE IF EXISTS `sp_baixa_estoque`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_baixa_estoque` (IN `id_produto_e` INT, IN `lote_e` VARCHAR(10), IN `validade_e` DATE, IN `quantidade_e` INT, IN `motivo_e` VARCHAR(255), IN `observacao_e` VARCHAR(255), IN `kar_tipo_e` INT)   BEGIN

DECLARE saldo_lote INT(11);
DECLARE unitario_e DECIMAL(15,4);
SELECT SUM(L.qtde_lote) INTO saldo_lote FROM lotes l WHERE l.lote = lote_e;
SELECT pp.preco INTO unitario_e FROM produtos_precos pp WHERE pp.id_produto = id_produto_e;
IF saldo_lote >= quantidade_e THEN
	INSERT INTO baixa_estoques (id_produto, lote, validade, quantidade, unitario, motivo, observacao, kar_tipo) VALUES (id_produto_e, lote_e, validade_e, quantidade_e, unitario_e, motivo_e, observacao_e, kar_tipo_e);
    SELECT 'Baixa realizada com Sucesso' AS Msg;
ELSE
	SELECT concat('A quantidade do lote ', lote_e, ' é inferior ao saldo atual: ', saldo_lote) AS Msg;
END IF;

END$$

DROP PROCEDURE IF EXISTS `sp_categorias`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_categorias` (IN `descricao_e` VARCHAR(50), IN `id_status_e` INT)   BEGIN
  DECLARE contador INT(11);
    SELECT COUNT(*) INTO contador FROM categorias c WHERE c.descricao = descricao_e;
    IF contador = 0 THEN
    INSERT INTO categorias (descricao, id_status) VALUES (descricao_e, id_status_e);
    SELECT c.id AS 'ID', c.descricao AS 'Categoria', 'Categoria cadastrada com sucesso!' AS Msg FROM categorias c WHERE c.descricao = descricao_e;
    ELSE
    SELECT c.id AS 'ID', c.descricao AS 'Descrição', 'Categoria ja existe na base de dados!' AS Msg FROM categorias c WHERE c.descricao = descricao_e;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_entradas`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_entradas` (IN `id_produto_e` INT, IN `quantidade_e` INT, IN `unitario_e` DECIMAL(15,4), IN `total_e` DECIMAL(15,4), IN `validade_e` DATE, IN `lote_e` VARCHAR(10), IN `data_compra_e` DATE)   BEGIN

        INSERT INTO entradas (id_produto, quantidade, unitario, total, validade, lote, data_compra) values (id_produto_e, quantidade_e, unitario_e, total_e, validade_e, lote_e, data_compra_e);
        SELECT e.id_produto AS 'ID', ' de ', e.quantidade AS 'Quantidade', 'Produtos Foram Adicionadas com Sucesso!' AS Msg FROM entradas e WHERE e.id_produto = id_produto_e;

END$$

DROP PROCEDURE IF EXISTS `sp_inativa_lotes`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_inativa_lotes` ()   BEGIN

DECLARE lote_qtde INT(11);
DECLARE validade INT(11);
SELECT COUNT(l.qtde_lote) INTO lote_qtde FROM lotes l WHERE l.qtde_lote = 0;
SELECT COUNT(*) INTO validade FROM lotes l WHERE l.validade < CURRENT_TIMESTAMP;
IF lote_qtde = 1 AND validade = 1 THEN
UPDATE lotes l SET l.id_status = 2 WHERE l.qtde_lote = 0 OR l.validade < CURRENT_TIMESTAMP;
END IF;

END$$

DROP PROCEDURE IF EXISTS `sp_login`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_login` (IN `login_e` VARCHAR(25), IN `senha_e` VARCHAR(225))   BEGIN
    DECLARE login_ee VARCHAR(25);

    SELECT login INTO login_ee FROM usuarios u
    WHERE
        (
            BINARY u.login = login_e OR 
            BINARY u.email = login_e
        ) AND
        BINARY u.senha = senha_e AND
        u.id_status = 1  LIMIT 1;
    IF login_ee IS NOT NULL THEN
        SELECT login_ee as login, 'Usuário Autenticado!' AS Msg;
    ELSE
        SELECT null as login, 'Usuário e/ou senha incorreto(s)!' AS Msg;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_lotes`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_lotes` (IN `id_produto_e` INT, IN `lote_e` VARCHAR(10), IN `qtde_lote_e` INT, IN `validade_e` DATE, IN `id_status` INT, IN `kar_tipo` INT)   BEGIN

    DECLARE status_lote INT(11);
    DECLARE lote_existe INT(11);
    DECLARE saldo_lote INT(11);
    SELECT COUNT(*) INTO status_lote FROM lotes l WHERE l.lote = lote_e;
    SELECT COUNT(*) INTO lote_existe FROM lotes l WHERE l.lote = lote_e;
    SELECT SUM(L.qtde_lote) INTO saldo_lote FROM lotes l WHERE l.lote = lote_e;

IF status_lote = 0 AND lote_existe = 0 AND kar_tipo = 1 THEN
    INSERT INTO lotes (id_produto, lote, qtde_lote, validade, id_status) VALUES (id_produto_e, lote_e, qtde_lote_e, validade_e, id_status);
ELSEIF status_lote = 1 AND lote_existe = 1 AND saldo_lote = 0 THEN
    UPDATE lotes l set l.qtde_lote = l.qtde_lote + qtde_lote_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e AND l.qtde_lote = 0;
ELSE
    UPDATE lotes l set l.qtde_lote = l.qtde_lote + qtde_lote_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e;
END IF;
    
END$$

DROP PROCEDURE IF EXISTS `sp_produtos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_produtos` (IN `nome_e` VARCHAR(50) CHARSET utf8mb4, IN `descricao_e` VARCHAR(225) CHARSET utf8mb4, IN `id_categoria_e` INT, IN `id_tp_produto_e` INT, IN `id_unidade_e` CHAR(3) CHARSET utf8mb4, IN `foto_e` BLOB, IN `fungibilidade_e` BOOLEAN, IN `estocavel_e` BOOLEAN, IN `id_status_e` INT)   BEGIN
    DECLARE contador INT(11);
    SELECT COUNT(*) INTO contador FROM produtos p WHERE p.nome LIKE concat ( '%', nome_e, '%');/*verifica se o produto ja existe pelo nome SENAO insere*/
    IF contador = 0 THEN /*insere descrição caso nao exista SENAO retorna o cadastro existente*/
    INSERT INTO produtos (nome, descricao, id_categoria, id_tp_produto, id_unidade, foto, fungibilidade, estocavel, id_status) VALUES (nome_e, descricao_e, id_categoria_e, id_tp_produto_e, id_unidade_e, foto_e, fungibilidade_e, estocavel_e, id_status_e);
    SELECT p.id AS 'ID', p.nome AS 'Nome do Produto', 'Produto Cadastrado com Sucesso!' AS Msg FROM produtos p WHERE p.nome = nome_e;
    ELSE
    SELECT p.id AS 'ID', p.nome AS 'Nome do Produto', 'Produto já existe na base de dados!' AS Msg FROM produtos p WHERE p.nome = nome_e;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_produtos_precos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_produtos_precos` (IN `id_produto_e` INT, IN `preco_e` DECIMAL(15,4))   BEGIN
    DECLARE contador int(11);

    SELECT count(*) into contador FROM produtos_precos WHERE id_produto = id_produto_e;
    
    IF contador = 0 THEN
	INSERT INTO produtos_precos (id_produto, preco) VALUES (id_produto_e, preco_e);
    
    ELSE
    UPDATE produtos_precos pp SET pp.preco = preco_e WHERE pp.id_produto = id_produto_e;
    
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_tipo_produtos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tipo_produtos` (IN `descricao_e` VARCHAR(100) CHARSET utf8mb4, IN `id_status_e` INT)   BEGIN
  DECLARE contador INT(11);
    SELECT COUNT(*) INTO contador FROM tipo_produtos tp WHERE tp.descricao LIKE concat ('%', descricao_e, '%');
    IF contador = 0 THEN
    INSERT INTO tipo_produtos (descricao, id_status) VALUES (descricao_e, id_status_e);
    SELECT tp.id AS 'ID', tp.descricao AS 'Categoria', 'Tipo de Produto cadastrado com sucesso!' AS Msg FROM tipo_produtos tp WHERE tp.descricao = descricao_e;
    ELSE
    SELECT tp.id AS 'ID', tp.descricao AS 'Descrição', 'Tipo de Produto ja existe na base de dados!' AS Msg FROM tipo_produtos tp WHERE tp.descricao = descricao_e;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_unidades`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_unidades` (IN `id_uni_e` CHAR(6) CHARSET utf8mb4, IN `descricao_e` VARCHAR(50) CHARSET utf8mb4, IN `id_status_e` INT)   BEGIN
  DECLARE contador INT(11);
    SELECT COUNT(*) INTO contador FROM unidades u WHERE u.id = id_uni_e ;
    IF contador = 0 THEN
    INSERT INTO unidades (id, descricao, id_status) VALUES (id_uni_e, descricao_e, id_status_e);
    SELECT u.id AS 'ID', u.descricao AS 'Descrição', 'Unidade cadastrada com Sucesso!' AS Msg FROM unidades u WHERE u.descricao = descricao_e;
    ELSE
    SELECT u.id AS 'ID', u.descricao AS 'Descrição', 'Unidade ja existe na base de dados!' AS Msg FROM unidades u WHERE u.descricao = descricao_e;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_vendas_cabecalho`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_vendas_cabecalho` (IN `kar_tipo_e` INT, IN `cliente_e` VARCHAR(255), IN `email_e` VARCHAR(255), IN `telefone_e` VARCHAR(14), IN `endereco_e` VARCHAR(255), IN `bairro_e` VARCHAR(150), IN `uf_e` CHAR(2), IN `cidade_e` VARCHAR(255), IN `nome_cartao_e` VARCHAR(45), IN `numero_cartao_e` VARCHAR(16), IN `dt_vencimento_e` DATE, IN `cvv_e` INT(3), IN `tipo_venda_e` INT)   BEGIN
START TRANSACTION;
    INSERT INTO vendas(kar_tipo, cliente, email, telefone, endereco, bairro, uf, cidade, nome_cartao, numero_cartao, dt_vencimento, cvv, tipo_venda)
    VALUES(kar_tipo_e, cliente_e, email_e, telefone_e, endereco_e, bairro_e, uf_e, cidade_e, nome_cartao_e, numero_cartao_e, dt_vencimento_e, cvv_e, tipo_venda_e);

SELECT LAST_INSERT_ID() AS id_venda;

COMMIT;
END$$

DROP PROCEDURE IF EXISTS `sp_vendas_itens`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_vendas_itens` (IN `id_venda_e` INT, IN `kar_tipo_e` INT, IN `id_produto_e` INT, IN `quantidade_e` INT, IN `lote_e` VARCHAR(10), IN `preco_e` DECIMAL(15,4), IN `total_e` DECIMAL(15,4))   BEGIN
DECLARE saldo_negativo INT(11);
	SELECT COUNT(*) INTO saldo_negativo FROM estoques e INNER JOIN lotes l ON l.id_produto = e.id_produto WHERE e.id_produto = 1 AND l.lote = lote_e AND e.quantidade >= quantidade_e AND l.qtde_lote >= quantidade_e;
IF saldo_negativo = 1 THEN
	INSERT INTO vendas_itens (id_venda, kar_tipo, id_produto, quantidade, lote, preco, total) VALUES (id_venda_e, kar_tipo_e, id_produto_e, quantidade_e, lote_e, preco_e, total_e);
ELSE
	SELECT id_produto_e AS 'Produto', 'Um ou mais produtos encontram-se sem estoque para a quantidade especificada.' AS Msg;
END IF;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `baixa_estoques`
--

DROP TABLE IF EXISTS `baixa_estoques`;
CREATE TABLE `baixa_estoques` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `lote` varchar(10) NOT NULL,
  `validade` date NOT NULL,
  `quantidade` int(11) NOT NULL,
  `unitario` decimal(15,4) NOT NULL,
  `motivo` varchar(255) NOT NULL,
  `observacao` varchar(255) DEFAULT NULL,
  `kar_tipo` int(11) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `baixa_estoques`
--

INSERT INTO `baixa_estoques` (`id`, `id_produto`, `lote`, `validade`, `quantidade`, `unitario`, `motivo`, `observacao`, `kar_tipo`, `createAt`, `updateAt`) VALUES
(1, 22, 'JPC', '2023-02-07', 83, 2.5826, 'TESTE', 'TESTE', 2, '2023-06-21 23:51:59', '2023-06-21 23:51:59');

--
-- Acionadores `baixa_estoques`
--
DROP TRIGGER IF EXISTS `trg_baixa_estoque_AI`;
DELIMITER $$
CREATE TRIGGER `trg_baixa_estoque_AI` AFTER INSERT ON `baixa_estoques` FOR EACH ROW BEGIN
      CALL sp_atualiza_estoque (new.id_produto, new.quantidade * -1, new.lote, new.unitario, CURRENT_TIMESTAMP);
      CALL sp_lotes (new.id_produto, new.lote, new.quantidade * -1, new.validade, 1, new.kar_tipo );
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `descricao` varchar(50) NOT NULL,
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id`, `descricao`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Diversos', 1, '2023-05-15 10:26:11', '2023-05-15 10:26:11'),
(2, 'Diversos 1', 2, '2023-05-17 10:36:27', '2023-05-17 10:36:27');

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresas`
--

DROP TABLE IF EXISTS `empresas`;
CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `razao_social` varchar(255) NOT NULL,
  `nome_fantasia` varchar(255) NOT NULL,
  `Telefone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `empresas`
--

INSERT INTO `empresas` (`id`, `razao_social`, `nome_fantasia`, `Telefone`, `email`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Empresa Teste', 'Empresa Teste', '(67)3397-1223', 'teste@empteste.com', 1, '2023-05-05 14:38:50', '2023-05-05 14:38:50');

-- --------------------------------------------------------

--
-- Estrutura da tabela `entradas`
--

DROP TABLE IF EXISTS `entradas`;
CREATE TABLE `entradas` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `unitario` decimal(15,4) NOT NULL,
  `total` decimal(15,4) NOT NULL,
  `kar_tipo` int(11) NOT NULL DEFAULT 1,
  `validade` date NOT NULL,
  `lote` varchar(10) DEFAULT NULL,
  `data_compra` date NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `entradas`
--

INSERT INTO `entradas` (`id`, `id_produto`, `quantidade`, `unitario`, `total`, `kar_tipo`, `validade`, `lote`, `data_compra`, `createdAt`, `updatedAt`) VALUES
(1, 22, 83, 2.5826, 214.3558, 1, '2023-02-07', 'JPC', '2023-01-14', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(2, 4, 77, 99.0652, 7628.0204, 1, '2023-09-16', 'KFFB', '2023-03-23', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(3, 75, 20, 30.5195, 610.3900, 1, '2025-06-17', 'TLRD', '2023-02-24', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(4, 76, 100, 67.8792, 6787.9200, 1, '2022-12-04', 'ALV', '2023-01-05', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(5, 60, 36, 20.6735, 744.2460, 1, '2023-11-04', 'WTFCM', '2023-02-12', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(6, 34, 100, 84.5803, 8458.0300, 1, '2024-01-07', 'USOI', '2023-03-17', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(7, 41, 51, 23.3108, 1188.8508, 1, '2022-07-21', 'IBP', '2023-05-24', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(8, 31, 19, 47.1689, 896.2091, 1, '2025-02-03', 'BH', '2022-07-13', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(9, 51, 51, 41.8438, 2134.0338, 1, '2024-10-29', 'GBT', '2023-02-28', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(10, 96, 14, 98.7947, 1383.1258, 1, '2025-03-28', 'DVMT', '2023-03-15', '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(11, 9, 52, 41.9183, 71.8780, 1, '2022-10-03', 'MTDR', '2023-05-18', '2023-06-21 23:55:03', '2023-06-21 23:55:03'),
(12, 81, 74, 54.2734, 8.4523, 1, '2025-10-25', 'KMG', '2022-06-25', '2023-06-21 23:55:12', '2023-06-21 23:55:12'),
(13, 65, 18, 59.5989, 4.7191, 1, '2023-03-15', 'ABEOW', '2022-06-24', '2023-06-21 23:55:12', '2023-06-21 23:55:12'),
(14, 73, 42, 70.7132, 76.5613, 1, '2025-04-04', 'ABCD', '2022-08-12', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(15, 74, 3, 53.3480, 64.5935, 1, '2023-06-08', 'BF.B', '2023-03-09', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(16, 82, 34, 38.2326, 70.0382, 1, '2024-06-03', 'OAS', '2022-10-03', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(17, 68, 48, 82.3270, 11.8849, 1, '2023-11-30', 'COUP', '2022-08-26', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(18, 32, 94, 6.8199, 27.9867, 1, '2025-04-19', 'BCH', '2023-04-18', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(19, 56, 74, 66.1655, 39.3521, 1, '2024-10-03', 'VSTM', '2023-02-28', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(20, 81, 96, 9.5321, 30.5109, 1, '2022-09-18', 'ASCMA', '2023-04-17', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(21, 44, 59, 10.3095, 82.8212, 1, '2023-01-01', 'PER', '2023-02-10', '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(22, 96, 16, 4.7111, 51.5251, 1, '2024-09-13', 'CLLS', '2022-10-30', '2023-06-21 23:59:11', '2023-06-21 23:59:11'),
(23, 99, 93, 9.6352, 20.2143, 1, '2023-11-24', 'CBPX', '2023-05-18', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(24, 9, 78, 33.8057, 63.1544, 1, '2023-09-24', 'PHX', '2022-10-15', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(25, 2, 92, 38.4148, 85.6067, 1, '2024-12-16', 'FE', '2023-06-07', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(26, 74, 97, 23.1833, 8.0134, 1, '2022-09-07', 'EHT', '2022-11-02', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(27, 67, 45, 79.0982, 89.2865, 1, '2024-05-27', 'INXN', '2022-12-06', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(28, 17, 99, 46.5062, 26.1143, 1, '2022-11-10', 'ALDR', '2022-11-17', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(29, 50, 24, 5.0699, 56.3650, 1, '2025-10-30', 'UAE', '2023-05-04', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(30, 24, 50, 15.1434, 94.6647, 1, '2023-05-05', 'HYGS', '2022-11-17', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(31, 88, 70, 30.2533, 95.4023, 1, '2022-07-31', 'NVEC', '2022-12-14', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(32, 52, 20, 3.2881, 40.1522, 1, '2024-05-31', 'FDEU', '2022-10-29', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(33, 80, 68, 67.2919, 81.6142, 1, '2024-08-04', 'GES', '2023-01-22', '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(34, 18, 40, 11.4858, 49.9561, 1, '2024-04-13', 'COFH', '2023-04-01', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(35, 42, 86, 47.4623, 6.0167, 1, '2022-07-24', 'THW', '2023-04-09', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(36, 22, 88, 57.2446, 42.8092, 1, '2025-10-30', 'EMP', '2023-01-13', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(37, 44, 27, 41.6696, 37.3820, 1, '2025-08-26', 'ESRT', '2023-03-15', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(38, 80, 19, 23.6635, 9.8330, 1, '2022-12-01', 'PLXS', '2023-04-07', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(39, 20, 89, 34.7973, 80.7749, 1, '2024-04-25', 'KURA', '2022-08-17', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(40, 4, 64, 84.8170, 86.7248, 1, '2023-06-14', 'LIVN', '2023-02-04', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(41, 23, 89, 50.9144, 6.4147, 1, '2022-09-13', 'DFIN', '2022-12-28', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(42, 15, 7, 94.1139, 73.2475, 1, '2023-08-06', 'HQL', '2022-10-18', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(43, 77, 48, 84.7413, 25.5071, 1, '2023-12-22', 'AMBCW', '2023-01-02', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(44, 15, 99, 73.0030, 25.2024, 1, '2025-09-22', 'DJCO', '2023-05-19', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(45, 55, 8, 18.0555, 1.0350, 1, '2025-02-11', 'YECO', '2022-09-13', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(46, 71, 29, 70.3633, 28.5762, 1, '2022-11-09', 'ETY', '2022-07-24', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(47, 37, 60, 21.5753, 37.7882, 1, '2023-03-30', 'AMRN', '2023-05-13', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(48, 1, 5, 98.3398, 14.1926, 1, '2022-09-26', 'EXD', '2022-09-14', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(49, 6, 77, 38.2809, 39.7614, 1, '2022-07-22', 'MPC', '2022-08-26', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(50, 11, 25, 5.0264, 13.8239, 1, '2023-06-21', 'AFC', '2022-12-29', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(51, 74, 66, 94.4667, 64.9266, 1, '2023-06-06', 'PCMI', '2022-12-08', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(52, 94, 20, 15.9268, 75.8375, 1, '2022-12-21', 'MSA', '2023-03-08', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(53, 34, 18, 4.6826, 53.3108, 1, '2023-12-21', 'CZR', '2022-08-04', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(54, 54, 86, 39.5127, 7.5050, 1, '2023-11-14', 'CSTR', '2023-05-11', '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(55, 94, 61, 15.7310, 24.2621, 1, '2022-12-14', 'VSI', '2022-07-24', '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(56, 83, 92, 52.2730, 21.8711, 1, '2023-03-30', 'SPWR', '2022-07-02', '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(57, 97, 44, 44.0586, 62.6166, 1, '2023-09-06', 'GBDC', '2022-08-18', '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(58, 57, 50, 31.6710, 36.8296, 1, '2024-01-18', 'FIBK', '2022-11-28', '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(59, 12, 85, 63.8057, 45.4944, 1, '2025-06-08', 'WTBA', '2022-10-09', '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(60, 69, 44, 45.4014, 92.4341, 1, '2024-11-28', 'FND', '2023-05-25', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(61, 2, 5, 25.1060, 13.2051, 1, '2023-10-07', 'CIZ', '2022-10-19', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(62, 99, 80, 66.9130, 57.8407, 1, '2024-09-28', 'HMHC', '2023-04-09', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(63, 30, 90, 65.2412, 61.0670, 1, '2025-05-11', 'HBK', '2022-09-14', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(64, 62, 27, 1.4625, 39.6790, 1, '2024-08-23', 'SHBI', '2023-06-11', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(65, 45, 72, 17.5769, 51.3342, 1, '2025-09-13', 'ACHN', '2022-06-23', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(66, 25, 96, 58.2146, 16.6065, 1, '2025-04-29', 'POWL', '2022-08-06', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(67, 9, 94, 6.5094, 74.8831, 1, '2023-02-13', 'CALI', '2022-11-07', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(68, 34, 90, 13.5320, 14.9919, 1, '2022-06-30', 'KOP', '2022-09-24', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(69, 95, 89, 50.8409, 57.7647, 1, '2024-02-28', 'ADS', '2022-07-16', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(70, 81, 52, 36.3788, 30.6833, 1, '2023-04-19', 'CMU', '2022-07-05', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(71, 21, 43, 20.3650, 46.2166, 1, '2024-06-14', 'NEWR', '2022-12-10', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(72, 83, 18, 98.2928, 22.8885, 1, '2022-07-13', 'CFX', '2022-07-24', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(73, 74, 33, 49.6623, 64.3010, 1, '2023-06-27', 'CRY', '2023-04-01', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(74, 95, 23, 19.9558, 31.7539, 1, '2025-08-06', 'NSEC', '2022-10-08', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(75, 57, 81, 26.5705, 22.5273, 1, '2024-09-19', 'CSGS', '2023-01-14', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(76, 76, 17, 52.0755, 86.2642, 1, '2024-03-20', 'RP', '2022-11-16', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(77, 66, 8, 86.8257, 40.6930, 1, '2025-01-27', 'EVTC', '2022-10-21', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(78, 82, 72, 57.5353, 14.5994, 1, '2025-05-22', 'KELYB', '2022-09-16', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(79, 13, 48, 97.0962, 35.0096, 1, '2022-09-04', 'RGSE', '2022-07-30', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(80, 64, 2, 61.1135, 71.6969, 1, '2024-06-09', 'CUB', '2022-08-07', '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(81, 72, 69, 72.1331, 63.6283, 1, '2024-02-24', 'HT', '2023-03-24', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(82, 88, 100, 15.3782, 96.8004, 1, '2025-09-23', 'MPB', '2023-05-17', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(83, 22, 57, 28.7421, 74.1539, 1, '2022-06-23', 'SINO', '2022-09-07', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(84, 13, 53, 74.2318, 84.7869, 1, '2025-08-12', 'FINX', '2023-02-17', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(85, 61, 81, 57.8329, 6.9113, 1, '2023-07-06', 'CORT', '2022-11-08', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(86, 15, 16, 63.0129, 54.4782, 1, '2023-02-28', 'CSGS', '2023-04-19', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(87, 24, 28, 1.6688, 30.4603, 1, '2025-07-01', 'FPT', '2022-11-13', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(88, 41, 35, 37.5642, 35.1180, 1, '2025-08-04', 'SYNT', '2022-09-04', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(89, 75, 5, 76.5121, 8.7165, 1, '2024-12-14', 'ESND', '2023-06-01', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(90, 47, 91, 5.4677, 77.5411, 1, '2023-04-18', 'TRR', '2023-02-06', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(91, 69, 54, 46.5310, 68.8955, 1, '2024-04-20', 'UBP', '2022-11-08', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(92, 25, 11, 10.8333, 93.3198, 1, '2022-09-23', 'FPAY', '2023-02-16', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(93, 56, 27, 80.1711, 85.7059, 1, '2022-07-07', 'KRCH', '2022-12-31', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(94, 11, 71, 67.7176, 12.4833, 1, '2023-06-23', 'CHUBA', '2022-08-11', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(95, 32, 77, 59.8822, 42.0899, 1, '2024-11-01', 'JHB', '2023-04-22', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(96, 54, 53, 89.9624, 61.8313, 1, '2022-12-05', 'VXUS', '2022-09-14', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(97, 75, 36, 78.7766, 8.9603, 1, '2025-10-20', 'CBPO', '2023-01-13', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(98, 71, 70, 82.6986, 51.9023, 1, '2024-03-13', 'NSYS', '2022-06-27', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(99, 52, 69, 94.2601, 45.7262, 1, '2024-02-07', 'QEP', '2022-10-24', '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(100, 2, 63, 44.1464, 83.3532, 1, '2025-02-19', 'VHI', '2022-08-06', '2023-06-22 00:03:13', '2023-06-22 00:03:13');

--
-- Acionadores `entradas`
--
DROP TRIGGER IF EXISTS `trg_entradas_produtos_AI`;
DELIMITER $$
CREATE TRIGGER `trg_entradas_produtos_AI` AFTER INSERT ON `entradas` FOR EACH ROW BEGIN
      CALL sp_atualiza_estoque (NEW.id_produto, NEW.quantidade, NEW.unitario, NEW.lote, NEW.data_compra);
      CALL sp_lotes (new.id_produto, new.lote, new.quantidade, new.validade, 1, 1 );
      CALL sp_produtos_precos (NEW.id_produto, NEW.unitario);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estoques`
--

DROP TABLE IF EXISTS `estoques`;
CREATE TABLE `estoques` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `estoques`
--

INSERT INTO `estoques` (`id`, `id_produto`, `quantidade`, `createdAt`, `updatedAt`) VALUES
(1, 22, 145, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(2, 4, 141, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(3, 75, 61, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(4, 76, 117, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(5, 60, 36, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(6, 34, 208, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(7, 41, 86, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(8, 31, 19, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(9, 51, 51, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(10, 96, 30, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(11, 9, 224, '2023-06-21 23:55:03', '2023-06-21 23:55:03'),
(12, 81, 222, '2023-06-21 23:55:12', '2023-06-21 23:55:12'),
(13, 65, 18, '2023-06-21 23:55:12', '2023-06-21 23:55:12'),
(14, 73, 42, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(15, 74, 199, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(16, 82, 106, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(17, 68, 48, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(18, 32, 171, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(19, 56, 101, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(20, 44, 86, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(21, 99, 173, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(22, 2, 160, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(23, 67, 45, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(24, 17, 99, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(25, 50, 24, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(26, 24, 78, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(27, 88, 170, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(28, 52, 89, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(29, 80, 87, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(30, 18, 40, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(31, 42, 86, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(32, 20, 89, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(33, 23, 89, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(34, 15, 122, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(35, 77, 48, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(36, 55, 8, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(37, 71, 99, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(38, 37, 60, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(39, 1, 5, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(40, 6, 77, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(41, 11, 96, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(42, 94, 81, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(43, 54, 139, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(44, 83, 110, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(45, 97, 44, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(46, 57, 131, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(47, 12, 85, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(48, 69, 98, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(49, 30, 90, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(50, 62, 27, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(51, 45, 72, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(52, 25, 107, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(53, 95, 112, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(54, 21, 43, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(55, 66, 8, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(56, 13, 101, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(57, 64, 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(58, 72, 69, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(59, 61, 81, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(60, 47, 91, '2023-06-22 00:03:13', '2023-06-22 00:03:13');

-- --------------------------------------------------------

--
-- Estrutura da tabela `kardex_tipos`
--

DROP TABLE IF EXISTS `kardex_tipos`;
CREATE TABLE `kardex_tipos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(50) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `kardex_tipos`
--

INSERT INTO `kardex_tipos` (`id`, `descricao`, `createAt`, `updateAt`) VALUES
(1, 'Entrada', '2023-05-14 16:50:42', '2023-05-14 16:50:42'),
(2, 'Saida', '2023-05-14 16:50:42', '2023-05-14 16:50:42'),
(3, 'Aberto', '2023-05-21 13:52:57', '2023-05-21 13:52:57'),
(4, 'Fechado', '2023-05-21 13:52:57', '2023-05-21 13:52:57'),
(5, 'Cancelado', '2023-05-21 13:52:57', '2023-05-21 13:52:57');

-- --------------------------------------------------------

--
-- Estrutura da tabela `lotes`
--

DROP TABLE IF EXISTS `lotes`;
CREATE TABLE `lotes` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `lote` varchar(10) NOT NULL,
  `qtde_lote` int(11) NOT NULL,
  `validade` datetime NOT NULL DEFAULT current_timestamp(),
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `lotes`
--

INSERT INTO `lotes` (`id`, `id_produto`, `lote`, `qtde_lote`, `validade`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 22, 'JPC', 0, '2023-02-07 00:00:00', 2, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(2, 4, 'KFFB', 77, '2023-09-16 00:00:00', 2, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(3, 75, 'TLRD', 20, '2025-06-17 00:00:00', 1, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(4, 76, 'ALV', 100, '2022-12-04 00:00:00', 2, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(5, 60, 'WTFCM', 36, '2023-11-04 00:00:00', 1, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(6, 34, 'USOI', 100, '2024-01-07 00:00:00', 2, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(7, 41, 'IBP', 51, '2022-07-21 00:00:00', 1, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(8, 31, 'BH', 19, '2025-02-03 00:00:00', 2, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(9, 51, 'GBT', 51, '2024-10-29 00:00:00', 2, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(10, 96, 'DVMT', 14, '2025-03-28 00:00:00', 2, '2023-06-21 23:15:40', '2023-06-21 23:15:40'),
(11, 9, 'MTDR', 52, '2022-10-03 00:00:00', 1, '2023-06-21 23:55:03', '2023-06-21 23:55:03'),
(12, 81, 'KMG', 74, '2025-10-25 00:00:00', 2, '2023-06-21 23:55:12', '2023-06-21 23:55:12'),
(13, 65, 'ABEOW', 18, '2023-03-15 00:00:00', 2, '2023-06-21 23:55:12', '2023-06-21 23:55:12'),
(14, 73, 'ABCD', 42, '2025-04-04 00:00:00', 1, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(15, 74, 'BF.B', 3, '2023-06-08 00:00:00', 2, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(16, 82, 'OAS', 34, '2024-06-03 00:00:00', 2, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(17, 68, 'COUP', 48, '2023-11-30 00:00:00', 2, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(18, 32, 'BCH', 94, '2025-04-19 00:00:00', 1, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(19, 56, 'VSTM', 74, '2024-10-03 00:00:00', 2, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(20, 81, 'ASCMA', 96, '2022-09-18 00:00:00', 2, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(21, 44, 'PER', 59, '2023-01-01 00:00:00', 1, '2023-06-21 23:55:30', '2023-06-21 23:55:30'),
(22, 96, 'CLLS', 16, '2024-09-13 00:00:00', 2, '2023-06-21 23:59:11', '2023-06-21 23:59:11'),
(23, 99, 'CBPX', 93, '2023-11-24 00:00:00', 2, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(24, 9, 'PHX', 78, '2023-09-24 00:00:00', 1, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(25, 2, 'FE', 92, '2024-12-16 00:00:00', 1, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(26, 74, 'EHT', 97, '2022-09-07 00:00:00', 2, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(27, 67, 'INXN', 45, '2024-05-27 00:00:00', 2, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(28, 17, 'ALDR', 99, '2022-11-10 00:00:00', 1, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(29, 50, 'UAE', 24, '2025-10-30 00:00:00', 2, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(30, 24, 'HYGS', 50, '2023-05-05 00:00:00', 1, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(31, 88, 'NVEC', 70, '2022-07-31 00:00:00', 1, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(32, 52, 'FDEU', 20, '2024-05-31 00:00:00', 2, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(33, 80, 'GES', 68, '2024-08-04 00:00:00', 2, '2023-06-22 00:01:02', '2023-06-22 00:01:02'),
(34, 18, 'COFH', 40, '2024-04-13 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(35, 42, 'THW', 86, '2022-07-24 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(36, 22, 'EMP', 88, '2025-10-30 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(37, 44, 'ESRT', 27, '2025-08-26 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(38, 80, 'PLXS', 19, '2022-12-01 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(39, 20, 'KURA', 89, '2024-04-25 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(40, 4, 'LIVN', 64, '2023-06-14 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(41, 23, 'DFIN', 89, '2022-09-13 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(42, 15, 'HQL', 7, '2023-08-06 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(43, 77, 'AMBCW', 48, '2023-12-22 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(44, 15, 'DJCO', 99, '2025-09-22 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(45, 55, 'YECO', 8, '2025-02-11 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(46, 71, 'ETY', 29, '2022-11-09 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(47, 37, 'AMRN', 60, '2023-03-30 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(48, 1, 'EXD', 5, '2022-09-26 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(49, 6, 'MPC', 77, '2022-07-22 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(50, 11, 'AFC', 25, '2023-06-21 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(51, 74, 'PCMI', 66, '2023-06-06 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(52, 94, 'MSA', 20, '2022-12-21 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(53, 34, 'CZR', 18, '2023-12-21 00:00:00', 2, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(54, 54, 'CSTR', 86, '2023-11-14 00:00:00', 1, '2023-06-22 00:02:29', '2023-06-22 00:02:29'),
(55, 94, 'VSI', 61, '2022-12-14 00:00:00', 2, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(56, 83, 'SPWR', 92, '2023-03-30 00:00:00', 1, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(57, 97, 'GBDC', 44, '2023-09-06 00:00:00', 1, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(58, 57, 'FIBK', 50, '2024-01-18 00:00:00', 2, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(59, 12, 'WTBA', 85, '2025-06-08 00:00:00', 1, '2023-06-22 00:02:30', '2023-06-22 00:02:30'),
(60, 69, 'FND', 44, '2024-11-28 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(61, 2, 'CIZ', 5, '2023-10-07 00:00:00', 1, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(62, 99, 'HMHC', 80, '2024-09-28 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(63, 30, 'HBK', 90, '2025-05-11 00:00:00', 1, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(64, 62, 'SHBI', 27, '2024-08-23 00:00:00', 1, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(65, 45, 'ACHN', 72, '2025-09-13 00:00:00', 1, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(66, 25, 'POWL', 96, '2025-04-29 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(67, 9, 'CALI', 94, '2023-02-13 00:00:00', 1, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(68, 34, 'KOP', 90, '2022-06-30 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(69, 95, 'ADS', 89, '2024-02-28 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(70, 81, 'CMU', 52, '2023-04-19 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(71, 21, 'NEWR', 43, '2024-06-14 00:00:00', 1, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(72, 83, 'CFX', 18, '2022-07-13 00:00:00', 1, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(73, 74, 'CRY', 33, '2023-06-27 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(74, 95, 'NSEC', 23, '2025-08-06 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(75, 57, 'CSGS', 81, '2024-09-19 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(76, 76, 'RP', 17, '2024-03-20 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(77, 66, 'EVTC', 8, '2025-01-27 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(78, 82, 'KELYB', 72, '2025-05-22 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(79, 13, 'RGSE', 48, '2022-09-04 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(80, 64, 'CUB', 2, '2024-06-09 00:00:00', 2, '2023-06-22 00:03:12', '2023-06-22 00:03:12'),
(81, 72, 'HT', 69, '2024-02-24 00:00:00', 2, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(82, 88, 'MPB', 100, '2025-09-23 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(83, 22, 'SINO', 57, '2022-06-23 00:00:00', 2, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(84, 13, 'FINX', 53, '2025-08-12 00:00:00', 2, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(85, 61, 'CORT', 81, '2023-07-06 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(86, 24, 'FPT', 28, '2025-07-01 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(87, 41, 'SYNT', 35, '2025-08-04 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(88, 75, 'ESND', 5, '2024-12-14 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(89, 47, 'TRR', 91, '2023-04-18 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(90, 69, 'UBP', 54, '2024-04-20 00:00:00', 2, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(91, 25, 'FPAY', 11, '2022-09-23 00:00:00', 2, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(92, 56, 'KRCH', 27, '2022-07-07 00:00:00', 2, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(93, 11, 'CHUBA', 71, '2023-06-23 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(94, 32, 'JHB', 77, '2024-11-01 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(95, 54, 'VXUS', 53, '2022-12-05 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(96, 75, 'CBPO', 36, '2025-10-20 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(97, 71, 'NSYS', 70, '2024-03-13 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(98, 52, 'QEP', 69, '2024-02-07 00:00:00', 2, '2023-06-22 00:03:13', '2023-06-22 00:03:13'),
(99, 2, 'VHI', 63, '2025-02-19 00:00:00', 1, '2023-06-22 00:03:13', '2023-06-22 00:03:13');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(225) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_tp_produto` int(11) NOT NULL,
  `id_unidade` char(6) NOT NULL,
  `foto` blob DEFAULT NULL,
  `fungibilidade` tinyint(1) NOT NULL,
  `estocavel` tinyint(1) NOT NULL,
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `id_categoria`, `id_tp_produto`, `id_unidade`, `foto`, `fungibilidade`, `estocavel`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Seedlings - Buckwheat, Organic', 'Lobster - Tail, 3 - 4 Oz', 1, 2, 'CX50', NULL, 0, 0, 2, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(2, 'Cheese - Mozzarella, Shredded', 'Rum - Dark, Bacardi, Black', 2, 2, 'UNI', NULL, 0, 1, 1, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(3, 'Melon - Honey Dew', 'Green Tea Refresher', 1, 3, 'CX50', NULL, 0, 1, 2, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(4, 'Cup Translucent 9 Oz', 'Soup - Knorr, Veg / Beef', 2, 2, 'PCT', NULL, 1, 1, 2, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(5, 'Bread - Italian Corn Meal Poly', 'Beans - Turtle, Black, Dry', 1, 3, 'UNI', NULL, 0, 0, 2, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(6, 'Cranberries - Fresh', 'Tea - Black Currant', 2, 1, 'PCT', NULL, 1, 0, 1, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(7, 'Turnip - White, Organic', 'Extract - Almond', 1, 3, 'CX100', NULL, 0, 0, 1, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(8, 'Bar Mix - Lime', 'Juice - Apple, 500 Ml', 1, 3, 'UNI', NULL, 0, 1, 2, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(9, 'Tomatoes - Plum, Canned', 'Muffin Hinge - 211n', 2, 2, 'CX50', NULL, 1, 1, 1, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(10, 'Flax Seed', 'Juice - Lime', 1, 1, 'CX1', NULL, 1, 1, 1, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(11, 'Lemonade - Strawberry, 591 Ml', 'Tarragon - Fresh', 2, 2, 'CX25', NULL, 0, 0, 1, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(12, 'Liners - Baking Cups', 'Rice - Jasmine Sented', 2, 2, 'PCT', NULL, 0, 1, 1, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(13, 'Wine - Cahors Ac 2000, Clos', 'Bandage - Finger Cots', 1, 2, 'PCT', NULL, 1, 1, 2, '2023-06-21 23:10:16', '2023-06-21 23:10:16'),
(14, 'Lamb - Pieces, Diced', 'Cheese Cheddar Processed', 1, 1, 'UNI', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(15, 'Pasta - Tortellini, Fresh', 'Wine - Fat Bastard Merlot', 1, 1, 'CX50', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(16, 'Bar Special K', 'Coffee Decaf Colombian', 2, 2, 'PCT', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(17, 'Cake - Mini Cheesecake', 'Wine - Remy Pannier Rose', 2, 2, 'LIT', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(18, 'Shortbread - Cookie Crumbs', 'Straw - Regular', 1, 1, 'CX100', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(19, 'Table Cloth 81x81 Colour', 'Shortbread - Cookie Crumbs', 1, 1, 'PCT', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(20, 'Cinnamon Rolls', 'Cookie Chocolate Chip With', 2, 3, 'PCT', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(21, 'Chickhen - Chicken Phyllo', 'Brandy - Orange, Mc Guiness', 2, 1, 'CX1', NULL, 1, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(22, 'Wine - Trimbach Pinot Blanc', 'Seabream Whole Farmed', 1, 2, 'CX1', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(23, 'Pineapple - Regular', 'Water - Spring Water, 355 Ml', 1, 3, 'LIT', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(24, 'Ecolab - Power Fusion', 'Maintenance Removal Charge', 2, 3, 'CX50', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(25, 'Turkey - Ground. Lean', 'Gatorade - Xfactor Berry', 1, 1, 'LIT', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(26, 'Cornstarch', 'Mousse - Mango', 1, 1, 'UNI', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(27, 'Evaporated Milk - Skim', 'Potatoes - Parissienne', 1, 1, 'UNI', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(28, 'Wine - Malbec Trapiche Reserve', 'Lettuce - Boston Bib - Organic', 2, 2, 'PCT', NULL, 1, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(29, 'Bread - Assorted Rolls', 'Rice - Basmati', 2, 1, 'DIV', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(30, 'Lettuce Romaine Chopped', 'Lettuce - Frisee', 1, 1, 'UNI', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(31, 'Cheese - Mozzarella', 'Black Currants', 2, 1, 'CX50', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(32, 'Soup - Campbells Beef Noodle', 'Beef - Top Sirloin', 2, 3, 'LIT', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(33, 'Island Oasis - Magarita Mix', 'Chestnuts - Whole,canned', 1, 2, 'CX50', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(34, 'Cheese - Brie Roitelet', 'Beef - Kindney, Whole', 1, 1, 'CX50', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(35, 'Neckerchief Blck', 'Cheese - Mascarpone', 2, 3, 'DIV', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(36, 'Pork - Liver', 'Tomatoes - Plum, Canned', 2, 2, 'UNI', NULL, 1, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(37, 'Puree - Guava', 'Wiberg Super Cure', 2, 1, 'CX25', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(38, 'Tuna - Loin', 'Persimmons', 2, 1, 'PCT', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(39, 'Cookie - Oreo 100x2', 'Beer - Tetleys', 2, 3, 'CX25', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(40, 'Soup - Campbells Pasta Fagioli', 'Spice - Chili Powder Mexican', 2, 3, 'CX1', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(41, 'Pork - Backs - Boneless', 'Dried Cherries', 2, 3, 'CX50', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(42, 'Muffin Mix - Corn Harvest', 'Veal - Provimi Inside', 1, 1, 'LIT', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(43, 'Gloves - Goldtouch Disposable', 'Wine - Rosso Del Veronese Igt', 2, 2, 'CX50', NULL, 1, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(44, 'Veal - Eye Of Round', 'Foil - Round Foil', 2, 3, 'CX50', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(45, 'Bread - Multigrain, Loaf', 'Cheese - Cheddarsliced', 2, 3, 'CX25', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(46, 'Water Chestnut - Canned', 'Bagel - Everything', 2, 3, 'UNI', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(47, 'Milk - Buttermilk', 'Island Oasis - Peach Daiquiri', 1, 1, 'CX1', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(48, 'Peas - Pigeon, Dry', 'Roe - Lump Fish, Red', 2, 2, 'DIV', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(49, 'Sugar - Individual Portions', 'Coffee - Decafenated', 2, 3, 'LIT', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(50, 'Raisin - Dark', 'Sugar - Palm', 1, 3, 'LIT', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(51, 'Fireball Whisky', 'Shrimp - Black Tiger 8 - 12', 1, 1, 'PCT', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(52, 'Miso Paste White', 'Cookie Double Choco', 2, 2, 'UNI', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(53, 'Cloves - Whole', 'Pail With Metal Handle 16l White', 2, 3, 'PCT', NULL, 1, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(54, 'Soup - Campbells Chicken', 'Yogurt - Plain', 2, 1, 'CX50', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(55, 'Appetizer - Southwestern', 'Ham - Proscuitto', 2, 3, 'CX50', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(56, 'Bread - Petit Baguette', 'Ham Black Forest', 1, 3, 'LIT', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(57, 'Pails With Lids', 'Lamb - Leg, Diced', 2, 2, 'CX100', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(58, 'Juice - Ocean Spray Cranberry', 'Apple - Macintosh', 1, 3, 'UNI', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(59, 'Red Pepper Paste', 'Rice - Jasmine Sented', 1, 3, 'CX50', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(60, 'Spice - Pepper Portions', 'Beef - Roasted, Cooked', 1, 2, 'CX25', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(61, 'Spring Roll Veg Mini', 'Pear - Halves', 1, 3, 'DIV', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(62, 'Pastry - Choclate Baked', 'Pail - 15l White, With Handle', 1, 1, 'DIV', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(63, 'Ecolab - Medallion', 'Energy Drink', 1, 2, 'PCT', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(64, 'Stainless Steel Cleaner Vision', 'Pesto - Primerba, Paste', 1, 1, 'UNI', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(65, 'Sesame Seed Black', 'Wine - Harrow Estates, Vidal', 2, 2, 'CX100', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(66, 'Broom And Brush Rack Black', 'Stainless Steel Cleaner Vision', 1, 3, 'CX25', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(67, 'Wine - Rosso Del Veronese Igt', 'Longos - Grilled Salmon With Bbq', 2, 1, 'LIT', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(68, 'Beef - Tongue, Cooked', 'Isomalt', 1, 1, 'CX50', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(69, 'Cheese - Brie, Triple Creme', 'Placemat - Scallop, White', 1, 2, 'CX1', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(70, 'Thyme - Lemon, Fresh', 'Mace', 1, 1, 'UNI', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(71, 'Ice Cream Bar - Hageen Daz To', 'Jam - Blackberry, 20 Ml Jar', 1, 3, 'UNI', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(72, 'General Purpose Trigger', 'Soup - Base Broth Beef', 2, 2, 'CX1', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(73, 'Veal - Leg', 'Wine - Soave Folonari', 2, 3, 'PCT', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(74, 'Buffalo - Striploin', 'Wine - Prosecco Valdobiaddene', 1, 2, 'CX50', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(75, 'Pineapple - Golden', 'Icecream Cone - Areo Chocolate', 2, 1, 'DIV', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(76, 'Sauce - White, Mix', 'Shrimp - 100 / 200 Cold Water', 2, 3, 'CX100', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(77, 'Red Cod Fillets - 225g', 'Squid - U - 10 Thailand', 2, 3, 'LIT', NULL, 1, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(78, 'Pasta - Fettuccine, Dry', 'Oxtail - Cut', 1, 2, 'CX1', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(79, 'Juice - Orange', 'Soup - Campbells, Beef Barley', 2, 3, 'LIT', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(80, 'Corn Meal', 'Wine - Alsace Riesling Reserve', 2, 1, 'CX100', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(81, 'Chocolate - Chips Compound', 'Artichokes - Jerusalem', 1, 1, 'LIT', NULL, 1, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(82, 'Iced Tea Concentrate', 'Artichoke - Bottom, Canned', 2, 1, 'CX100', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(83, 'Dried Cherries', 'Beans - Black Bean, Canned', 2, 2, 'CX50', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(84, 'Longos - Greek Salad', 'Horseradish - Prepared', 1, 1, 'LIT', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(85, 'Pear - Prickly', 'Cheese - Brick With Onion', 2, 1, 'CX25', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(86, 'Energy - Boo - Koo', 'Artichoke - Bottom, Canned', 2, 2, 'CX50', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(87, 'Lamb - Leg, Bone In', 'Russian Prince', 2, 3, 'LIT', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(88, 'Wine - Alicanca Vinho Verde', 'Cheese - Cream Cheese', 2, 3, 'CX25', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(89, 'Aspic - Amber', 'Wine - White, Ej', 2, 3, 'CX25', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(90, 'Pickles - Gherkins', 'Beef - Cow Feet Split', 1, 3, 'LIT', NULL, 1, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(91, 'Wine - Stoneliegh Sauvignon', 'Pepper - Jalapeno', 1, 2, 'UNI', NULL, 0, 1, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(92, 'Chips Potato Salt Vinegar 43g', 'Nantucket - Pomegranate Pear', 2, 3, 'CX25', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(93, 'Creme De Banane - Marie', 'Nantucket - Kiwi Berry Cktl.', 2, 1, 'DIV', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(94, 'Pasta - Cannelloni, Sheets, Fresh', 'Versatainer Nc - 8288', 2, 1, 'PCT', NULL, 0, 0, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(95, 'Muffin - Mix - Strawberry Rhubarb', 'Bandage - Fexible 1x3', 1, 3, 'CX50', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(96, 'Wine - Casillero Deldiablo', 'Cake - Bande Of Fruit', 2, 1, 'CX25', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(97, 'Cup - Translucent 7 Oz Clear', 'Shrimp, Dried, Small / Lb', 2, 1, 'CX25', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(98, 'Veal - Bones', 'Wine - Casillero Del Diablo', 2, 3, 'DIV', NULL, 0, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(99, 'Potatoes - Instant, Mashed', 'Bread - Mini Hamburger Bun', 1, 1, 'CX1', NULL, 1, 1, 2, '2023-06-21 23:10:17', '2023-06-21 23:10:17'),
(100, 'Muffin Mix - Morning Glory', 'Mushroom - Enoki, Dry', 1, 2, 'CX50', NULL, 0, 0, 1, '2023-06-21 23:10:17', '2023-06-21 23:10:17');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos_precos`
--

DROP TABLE IF EXISTS `produtos_precos`;
CREATE TABLE `produtos_precos` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `preco` decimal(15,4) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos_precos`
--

INSERT INTO `produtos_precos` (`id`, `id_produto`, `preco`, `createdAt`, `updatedAt`) VALUES
(1, 1, 98.3398, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(2, 2, 44.1464, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(3, 3, 678.3543, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(4, 4, 84.8170, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(5, 5, 831.6321, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(6, 6, 38.2809, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(7, 7, 535.0188, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(8, 8, 911.7798, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(9, 9, 6.5094, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(10, 10, 547.7092, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(11, 11, 67.7176, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(12, 12, 63.8057, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(13, 13, 74.2318, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(14, 14, 30.3926, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(15, 15, 63.0129, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(16, 16, 397.0611, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(17, 17, 46.5062, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(18, 18, 11.4858, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(19, 19, 573.1661, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(20, 20, 34.7973, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(21, 21, 20.3650, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(22, 22, 28.7421, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(23, 23, 50.9144, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(24, 24, 1.6688, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(25, 25, 10.8333, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(26, 26, 779.9718, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(27, 27, 284.2574, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(28, 28, 99.7887, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(29, 29, 73.2365, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(30, 30, 65.2412, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(31, 31, 47.1689, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(32, 32, 59.8822, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(33, 33, 106.3664, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(34, 34, 13.5320, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(35, 35, 870.7132, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(36, 36, 279.3881, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(37, 37, 21.5753, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(38, 38, 27.7565, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(39, 39, 454.2946, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(40, 40, 54.6161, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(41, 41, 37.5642, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(42, 42, 47.4623, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(43, 43, 680.6696, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(44, 44, 41.6696, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(45, 45, 17.5769, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(46, 46, 59.9187, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(47, 47, 5.4677, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(48, 48, 620.4170, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(49, 49, 523.0884, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(50, 50, 5.0699, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(51, 51, 41.8438, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(52, 52, 94.2601, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(53, 53, 73.8069, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(54, 54, 89.9624, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(55, 55, 18.0555, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(56, 56, 80.1711, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(57, 57, 26.5705, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(58, 58, 273.9248, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(59, 59, 508.9027, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(60, 60, 20.6735, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(61, 61, 57.8329, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(62, 62, 1.4625, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(63, 63, 20.9567, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(64, 64, 61.1135, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(65, 65, 59.5989, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(66, 66, 86.8257, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(67, 67, 79.0982, '2023-06-21 23:10:37', '2023-06-21 23:10:37'),
(68, 68, 82.3270, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(69, 69, 46.5310, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(70, 70, 904.1132, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(71, 71, 82.6986, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(72, 72, 72.1331, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(73, 73, 70.7132, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(74, 74, 49.6623, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(75, 75, 78.7766, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(76, 76, 52.0755, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(77, 77, 84.7413, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(78, 78, 224.0418, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(79, 79, 604.6528, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(80, 80, 23.6635, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(81, 81, 36.3788, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(82, 82, 57.5353, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(83, 83, 98.2928, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(84, 84, 566.4136, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(85, 85, 159.5161, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(86, 86, 306.9251, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(87, 87, 818.4345, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(88, 88, 15.3782, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(89, 89, 828.0559, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(90, 90, 232.2616, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(91, 91, 814.7781, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(92, 92, 88.1600, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(93, 93, 490.2946, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(94, 94, 15.7310, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(95, 95, 19.9558, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(96, 96, 4.7111, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(97, 97, 44.0586, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(98, 98, 740.7245, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(99, 99, 66.9130, '2023-06-21 23:10:38', '2023-06-21 23:10:38'),
(100, 100, 680.9059, '2023-06-21 23:10:38', '2023-06-21 23:10:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `status_cads`
--

DROP TABLE IF EXISTS `status_cads`;
CREATE TABLE `status_cads` (
  `id` int(11) NOT NULL,
  `descricao` varchar(30) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `status_cads`
--

INSERT INTO `status_cads` (`id`, `descricao`, `createAt`, `updateAt`) VALUES
(1, 'Ativo', '2023-05-04 00:00:00', '0000-00-00 00:00:00'),
(2, 'Inativo', '2023-05-04 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_produtos`
--

DROP TABLE IF EXISTS `tipo_produtos`;
CREATE TABLE `tipo_produtos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tipo_produtos`
--

INSERT INTO `tipo_produtos` (`id`, `descricao`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Diversos', 1, '2023-05-15 10:28:32', '2023-05-15 10:28:32'),
(2, 'Bem Durável', 1, '2023-05-15 10:47:44', '2023-05-15 10:47:44'),
(3, 'Uso e Consumo', 1, '2023-05-15 10:48:03', '2023-05-15 10:48:03');

-- --------------------------------------------------------

--
-- Estrutura da tabela `unidades`
--

DROP TABLE IF EXISTS `unidades`;
CREATE TABLE `unidades` (
  `id` char(6) NOT NULL,
  `descricao` varchar(50) NOT NULL,
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `unidades`
--

INSERT INTO `unidades` (`id`, `descricao`, `id_status`, `createdAt`, `updatedAt`) VALUES
('CX1', 'Caixa', 1, '2023-05-05 14:47:29', '2023-05-05 14:47:29'),
('CX100', 'Caixa com 100', 1, '2023-06-02 01:50:01', '2023-06-02 01:50:01'),
('CX25', 'Caixa com 25', 1, '2023-06-19 13:21:00', '2023-06-19 13:21:00'),
('CX50', 'Caixa com 50', 1, '2023-05-17 10:40:59', '2023-05-17 10:40:59'),
('DIV', 'Diversos', 1, '2023-05-15 10:18:35', '2023-05-15 10:18:35'),
('LIT', 'Litros', 1, '2023-05-15 10:18:15', '2023-05-15 10:18:15'),
('PCT', 'Pacote', 1, '2023-05-05 14:46:42', '2023-05-05 14:46:42'),
('UNI', 'Unidade', 1, '2023-05-05 14:46:42', '2023-05-05 14:46:42');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `nome` varchar(250) NOT NULL,
  `login` varchar(25) NOT NULL,
  `email` varchar(225) NOT NULL,
  `senha_reset` tinyint(4) NOT NULL DEFAULT 1,
  `senha` varchar(225) NOT NULL,
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `cpf`, `nome`, `login`, `email`, `senha_reset`, `senha`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, '00000000000', 'Admin', 'Admin', 'admin@admin.com', 1, '1', 1, '2023-05-05 14:40:10', '2023-05-05 14:40:10'),
(2, '00000000001', 'Suporte', 'Suporte', 'suporte@suporte.com', 1, '2', 2, '2023-05-05 14:40:10', '2023-05-05 14:40:10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas`
--

DROP TABLE IF EXISTS `vendas`;
CREATE TABLE `vendas` (
  `id` int(11) NOT NULL,
  `kar_tipo` int(11) NOT NULL DEFAULT 4,
  `cliente` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `bairro` varchar(150) NOT NULL,
  `uf` char(2) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `nome_cartao` varchar(45) NOT NULL,
  `numero_cartao` varchar(16) NOT NULL,
  `dt_vencimento` date NOT NULL,
  `cvv` int(3) NOT NULL,
  `tipo_venda` int(11) NOT NULL DEFAULT 0,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_itens`
--

DROP TABLE IF EXISTS `vendas_itens`;
CREATE TABLE `vendas_itens` (
  `id` int(11) NOT NULL,
  `id_venda` int(11) NOT NULL,
  `kar_tipo` int(11) NOT NULL DEFAULT 4,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `lote` varchar(10) NOT NULL,
  `preco` decimal(15,4) NOT NULL,
  `total` decimal(15,4) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Acionadores `vendas_itens`
--
DROP TRIGGER IF EXISTS `trg_saidas_produtos_AI`;
DELIMITER $$
CREATE TRIGGER `trg_saidas_produtos_AI` AFTER INSERT ON `vendas_itens` FOR EACH ROW BEGIN
      CALL sp_atualiza_estoque (new.id_produto, new.quantidade * -1, new.lote, new.preco, CURRENT_TIMESTAMP);
      CALL sp_lotes (new.id_produto, new.lote, new.quantidade * -1, '', 1, new.kar_tipo );
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_baixa_estoques`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_baixa_estoques`;
CREATE TABLE `vw_baixa_estoques` (
`id` varchar(12)
,`nome` varchar(50)
,`lotes` varchar(10)
,`validade` date
,`vuantidade` int(11)
,`unitario` decimal(15,4)
,`motivo` varchar(255)
,`observacao` varchar(255)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_categorias`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_categorias`;
CREATE TABLE `vw_categorias` (
`id` int(11)
,`descricao` varchar(50)
,`status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_empresas`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_empresas`;
CREATE TABLE `vw_empresas` (
`nome_fantasia` varchar(255)
,`telefone` varchar(20)
,`email` varchar(255)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_entradas_cadastro`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_entradas_cadastro`;
CREATE TABLE `vw_entradas_cadastro` (
`id` varchar(12)
,`produto` varchar(276)
,`categoria` varchar(50)
,`quantidade` decimal(32,0)
,`preco` decimal(15,4)
,`data_compra` date
,`vencimento` date
,`lotes` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_estoque_lote_preco`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_estoque_lote_preco`;
CREATE TABLE `vw_estoque_lote_preco` (
`id` int(11)
,`nome` varchar(50)
,`preco` decimal(15,4)
,`lote` varchar(10)
,`qtd` int(11)
,`validade` datetime
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_estoque_por_lotes`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_estoque_por_lotes`;
CREATE TABLE `vw_estoque_por_lotes` (
`soma` decimal(32,0)
,`id` int(11)
,`produto` varchar(50)
,`lote` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_kardex_tipos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_kardex_tipos`;
CREATE TABLE `vw_kardex_tipos` (
`id` int(11)
,`descricao` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_lotes`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_lotes`;
CREATE TABLE `vw_lotes` (
`id` int(11)
,`nome_do_produto` varchar(50)
,`lote` varchar(10)
,`quantidade_lote` int(11)
,`validade` datetime
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_produtos_cadastro`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_produtos_cadastro`;
CREATE TABLE `vw_produtos_cadastro` (
`id` varchar(12)
,`produto` varchar(276)
,`categoria` varchar(50)
,`tipo_do_produto` varchar(100)
,`unidade` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_rel_entradas_produtos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_rel_entradas_produtos`;
CREATE TABLE `vw_rel_entradas_produtos` (
`id` int(11)
,`produto` varchar(276)
,`categoria` varchar(50)
,`tipo_produto` varchar(100)
,`unidades` varchar(50)
,`preco` varchar(20)
,`quantidade` decimal(32,0)
,`total` varchar(20)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_rel_estoque_atual`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_rel_estoque_atual`;
CREATE TABLE `vw_rel_estoque_atual` (
`id` int(11)
,`nome` varchar(276)
,`qunatidade` int(11)
,`preco` varchar(20)
,`categoria` varchar(50)
,`situacao` varchar(30)
,`total` varchar(20)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_rel_produtos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_rel_produtos`;
CREATE TABLE `vw_rel_produtos` (
`id` int(11)
,`nome` varchar(276)
,`preco` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_status_cads`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_status_cads`;
CREATE TABLE `vw_status_cads` (
`id` int(11)
,`descricao` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_tipo_produtos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_tipo_produtos`;
CREATE TABLE `vw_tipo_produtos` (
`id` int(11)
,`descricao` varchar(100)
,`status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_unidades`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_unidades`;
CREATE TABLE `vw_unidades` (
`abreviacao` char(6)
,`descricao` varchar(50)
,`status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_baixa_estoques`
--
DROP TABLE IF EXISTS `vw_baixa_estoques`;

DROP VIEW IF EXISTS `vw_baixa_estoques`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_baixa_estoques`  AS SELECT concat('#',`b`.`id_produto`) AS `id`, `p`.`nome` AS `nome`, `b`.`lote` AS `lotes`, `b`.`validade` AS `validade`, `b`.`quantidade` AS `vuantidade`, `b`.`unitario` AS `unitario`, `b`.`motivo` AS `motivo`, `b`.`observacao` AS `observacao` FROM (`baixa_estoques` `b` join `produtos` `p` on(`p`.`id` = `b`.`id_produto`)) ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_categorias`
--
DROP TABLE IF EXISTS `vw_categorias`;

DROP VIEW IF EXISTS `vw_categorias`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_categorias`  AS SELECT `c`.`id` AS `id`, `c`.`descricao` AS `descricao`, `sc`.`descricao` AS `status` FROM (`categorias` `c` join `status_cads` `sc` on(`c`.`id_status` = `sc`.`id`)) ORDER BY `c`.`descricao` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_empresas`
--
DROP TABLE IF EXISTS `vw_empresas`;

DROP VIEW IF EXISTS `vw_empresas`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_empresas`  AS SELECT `e`.`nome_fantasia` AS `nome_fantasia`, `e`.`Telefone` AS `telefone`, `e`.`email` AS `email` FROM `empresas` AS `e` WHERE `e`.`id_status` = 1 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_entradas_cadastro`
--
DROP TABLE IF EXISTS `vw_entradas_cadastro`;

DROP VIEW IF EXISTS `vw_entradas_cadastro`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_entradas_cadastro`  AS SELECT concat('#',`e`.`id_produto`) AS `id`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `produto`, `c`.`descricao` AS `categoria`, sum(`e`.`quantidade`) AS `quantidade`, `e`.`unitario` AS `preco`, `e`.`data_compra` AS `data_compra`, `e`.`validade` AS `vencimento`, `e`.`lote` AS `lotes` FROM ((`entradas` `e` join `produtos` `p` on(`e`.`id_produto` = `p`.`id`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) WHERE `p`.`id_status` = 1 GROUP BY `e`.`lote`, `e`.`id_produto`, `e`.`id_produto`, `p`.`nome`, `p`.`descricao`, `c`.`descricao`, `e`.`unitario`, `e`.`data_compra`, `e`.`validade` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_estoque_lote_preco`
--
DROP TABLE IF EXISTS `vw_estoque_lote_preco`;

DROP VIEW IF EXISTS `vw_estoque_lote_preco`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_estoque_lote_preco`  AS SELECT `l`.`id_produto` AS `id`, `pro`.`nome` AS `nome`, `pre`.`preco` AS `preco`, `l`.`lote` AS `lote`, `l`.`qtde_lote` AS `qtd`, `l`.`validade` AS `validade` FROM ((`lotes` `l` join `produtos` `pro` on(`l`.`id_produto` = `pro`.`id`)) join `produtos_precos` `pre` on(`l`.`id_produto` = `pre`.`id_produto`)) WHERE `l`.`qtde_lote` >= 1 AND `l`.`id_status` = 1 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_estoque_por_lotes`
--
DROP TABLE IF EXISTS `vw_estoque_por_lotes`;

DROP VIEW IF EXISTS `vw_estoque_por_lotes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_estoque_por_lotes`  AS SELECT sum(`e`.`quantidade`) AS `soma`, `e`.`id_produto` AS `id`, `p`.`nome` AS `produto`, `e`.`lote` AS `lote` FROM (`entradas` `e` join `produtos` `p` on(`e`.`id_produto` = `p`.`id`)) GROUP BY `e`.`id_produto`, `p`.`nome`, `e`.`lote` ORDER BY `e`.`id_produto` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_kardex_tipos`
--
DROP TABLE IF EXISTS `vw_kardex_tipos`;

DROP VIEW IF EXISTS `vw_kardex_tipos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_kardex_tipos`  AS SELECT `kt`.`id` AS `id`, `kt`.`descricao` AS `descricao` FROM `kardex_tipos` AS `kt` ORDER BY `kt`.`id` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_lotes`
--
DROP TABLE IF EXISTS `vw_lotes`;

DROP VIEW IF EXISTS `vw_lotes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_lotes`  AS SELECT `l`.`id_produto` AS `id`, `p`.`nome` AS `nome_do_produto`, `l`.`lote` AS `lote`, `l`.`qtde_lote` AS `quantidade_lote`, `l`.`validade` AS `validade` FROM (`lotes` `l` join `produtos` `p` on(`l`.`id_produto` = `p`.`id`)) WHERE `l`.`qtde_lote` >= 1 AND `l`.`id_status` = 1 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_produtos_cadastro`
--
DROP TABLE IF EXISTS `vw_produtos_cadastro`;

DROP VIEW IF EXISTS `vw_produtos_cadastro`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_produtos_cadastro`  AS SELECT concat('#',`p`.`id`) AS `id`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `produto`, `c`.`descricao` AS `categoria`, `tp`.`descricao` AS `tipo_do_produto`, `u`.`descricao` AS `unidade` FROM ((((`produtos` `p` join `status_cads` `sc` on(`p`.`id_status` = `sc`.`id`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) join `tipo_produtos` `tp` on(`p`.`id_tp_produto` = `tp`.`id`)) join `unidades` `u` on(`p`.`id_unidade` = `u`.`id`)) ORDER BY `p`.`nome` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_rel_entradas_produtos`
--
DROP TABLE IF EXISTS `vw_rel_entradas_produtos`;

DROP VIEW IF EXISTS `vw_rel_entradas_produtos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_rel_entradas_produtos`  AS SELECT `e`.`id_produto` AS `id`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `produto`, `c`.`descricao` AS `categoria`, `tp`.`descricao` AS `tipo_produto`, `u`.`descricao` AS `unidades`, concat('R$ ',cast(`e`.`unitario` as decimal(15,2))) AS `preco`, sum(`e`.`quantidade`) AS `quantidade`, concat('R$ ',cast(sum(`e`.`unitario` * `e`.`quantidade`) as decimal(15,2))) AS `total` FROM ((((((`entradas` `e` join `produtos` `p` on(`p`.`id` = `e`.`id_produto`)) join `produtos_precos` `pp` on(`pp`.`id_produto` = `e`.`id_produto`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) join `tipo_produtos` `tp` on(`p`.`id_tp_produto` = `tp`.`id`)) join `unidades` `u` on(`p`.`id_unidade` = `u`.`id`)) join `status_cads` `st` on(`p`.`id_status` = `st`.`id`)) WHERE `p`.`id_status` = 1 GROUP BY `e`.`id_produto` ORDER BY `p`.`nome` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_rel_estoque_atual`
--
DROP TABLE IF EXISTS `vw_rel_estoque_atual`;

DROP VIEW IF EXISTS `vw_rel_estoque_atual`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_rel_estoque_atual`  AS SELECT `est`.`id_produto` AS `id`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `nome`, `est`.`quantidade` AS `qunatidade`, concat('R$ ',cast(`pp`.`preco` as decimal(15,2))) AS `preco`, `c`.`descricao` AS `categoria`, `st`.`descricao` AS `situacao`, concat('R$ ',cast(sum(`est`.`quantidade` * `pp`.`preco`) as decimal(15,2))) AS `total` FROM ((((`estoques` `est` join `produtos` `p` on(`p`.`id` = `est`.`id_produto`)) join `categorias` `c` on(`c`.`id` = `p`.`id_categoria`)) join `status_cads` `st` on(`st`.`id` = `p`.`id_status`)) join `produtos_precos` `pp` on(`pp`.`id_produto` = `p`.`id`)) WHERE `est`.`quantidade` > 0 AND `p`.`id_status` = 1 GROUP BY `est`.`id_produto` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_rel_produtos`
--
DROP TABLE IF EXISTS `vw_rel_produtos`;

DROP VIEW IF EXISTS `vw_rel_produtos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_rel_produtos`  AS SELECT `p`.`id` AS `id`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `nome`, concat('R$ ',cast(`pp`.`preco` as decimal(5,2))) AS `preco` FROM (`produtos` `p` left join `produtos_precos` `pp` on(`p`.`id` = `pp`.`id_produto`)) ORDER BY `p`.`nome` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_status_cads`
--
DROP TABLE IF EXISTS `vw_status_cads`;

DROP VIEW IF EXISTS `vw_status_cads`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_status_cads`  AS SELECT `sc`.`id` AS `id`, `sc`.`descricao` AS `descricao` FROM `status_cads` AS `sc` ORDER BY `sc`.`descricao` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_tipo_produtos`
--
DROP TABLE IF EXISTS `vw_tipo_produtos`;

DROP VIEW IF EXISTS `vw_tipo_produtos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_tipo_produtos`  AS SELECT `tp`.`id` AS `id`, `tp`.`descricao` AS `descricao`, `sc`.`descricao` AS `status` FROM (`tipo_produtos` `tp` join `status_cads` `sc` on(`tp`.`id_status` = `sc`.`id`)) ORDER BY `tp`.`id` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_unidades`
--
DROP TABLE IF EXISTS `vw_unidades`;

DROP VIEW IF EXISTS `vw_unidades`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_unidades`  AS SELECT `u`.`id` AS `abreviacao`, `u`.`descricao` AS `descricao`, `sc`.`descricao` AS `status` FROM (`unidades` `u` join `status_cads` `sc` on(`u`.`id_status` = `sc`.`id`)) ORDER BY `u`.`descricao` ASC ;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `baixa_estoques`
--
ALTER TABLE `baixa_estoques`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_produto_baixa_estoque` (`id_produto`),
  ADD KEY `fk_kar_tipo_baixa_estoque` (`kar_tipo`);

--
-- Índices para tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Uq_descricao_cat` (`descricao`),
  ADD KEY `fk_id_status_categoria` (`id_status`);

--
-- Índices para tabela `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_status_empresa` (`id_status`);

--
-- Índices para tabela `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_produto_entradas` (`id_produto`),
  ADD KEY `fk_kar_tipo_entradas` (`kar_tipo`);

--
-- Índices para tabela `estoques`
--
ALTER TABLE `estoques`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_produto_estoque` (`id_produto`);

--
-- Índices para tabela `kardex_tipos`
--
ALTER TABLE `kardex_tipos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UQ_descricao` (`descricao`);

--
-- Índices para tabela `lotes`
--
ALTER TABLE `lotes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_produto_lotes` (`id_produto`),
  ADD KEY `fk_id_status_lotes` (`id_status`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_tp_prod_produto` (`id_tp_produto`),
  ADD KEY `fk_id_status_produto` (`id_status`),
  ADD KEY `fk_id_categoria_produto` (`id_categoria`),
  ADD KEY `fk_id_unidade_produto` (`id_unidade`);

--
-- Índices para tabela `produtos_precos`
--
ALTER TABLE `produtos_precos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_produto_prod_precos` (`id_produto`);

--
-- Índices para tabela `status_cads`
--
ALTER TABLE `status_cads`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Uq_StatusDescricao` (`descricao`);

--
-- Índices para tabela `tipo_produtos`
--
ALTER TABLE `tipo_produtos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_status_tp_produto` (`id_status`);

--
-- Índices para tabela `unidades`
--
ALTER TABLE `unidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_status_unidades` (`id_status`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Uq_Cpf` (`cpf`),
  ADD UNIQUE KEY `Uq_Login` (`login`),
  ADD UNIQUE KEY `Uq_Email` (`email`),
  ADD KEY `fk_id_status_usuario` (`id_status`);

--
-- Índices para tabela `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kar_status_vendas` (`kar_tipo`);

--
-- Índices para tabela `vendas_itens`
--
ALTER TABLE `vendas_itens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kar_tipo_ven_itens` (`kar_tipo`),
  ADD KEY `fk_id_vendas_ven_itens` (`id_venda`),
  ADD KEY `fk_id_produto_ven_itens` (`id_produto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `baixa_estoques`
--
ALTER TABLE `baixa_estoques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `entradas`
--
ALTER TABLE `entradas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de tabela `estoques`
--
ALTER TABLE `estoques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de tabela `kardex_tipos`
--
ALTER TABLE `kardex_tipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `lotes`
--
ALTER TABLE `lotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de tabela `produtos_precos`
--
ALTER TABLE `produtos_precos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de tabela `tipo_produtos`
--
ALTER TABLE `tipo_produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `vendas`
--
ALTER TABLE `vendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `vendas_itens`
--
ALTER TABLE `vendas_itens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `baixa_estoques`
--
ALTER TABLE `baixa_estoques`
  ADD CONSTRAINT `fk_id_produto_baixa_estoque` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`),
  ADD CONSTRAINT `fk_kar_tipo_baixa_estoque` FOREIGN KEY (`kar_tipo`) REFERENCES `kardex_tipos` (`id`);

--
-- Limitadores para a tabela `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `fk_id_status_categoria` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`);

--
-- Limitadores para a tabela `empresas`
--
ALTER TABLE `empresas`
  ADD CONSTRAINT `fk_id_status_empresa` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`);

--
-- Limitadores para a tabela `entradas`
--
ALTER TABLE `entradas`
  ADD CONSTRAINT `fk_id_produto_entradas` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`),
  ADD CONSTRAINT `fk_kar_tipo_entradas` FOREIGN KEY (`kar_tipo`) REFERENCES `kardex_tipos` (`id`);

--
-- Limitadores para a tabela `estoques`
--
ALTER TABLE `estoques`
  ADD CONSTRAINT `fk_id_produto_estoque` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`);

--
-- Limitadores para a tabela `lotes`
--
ALTER TABLE `lotes`
  ADD CONSTRAINT `fk_id_produto_lotes` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`),
  ADD CONSTRAINT `fk_id_status_lotes` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`);

--
-- Limitadores para a tabela `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `fk_id_categoria_produto` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `fk_id_status_produto` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`),
  ADD CONSTRAINT `fk_id_tp_prod_produto` FOREIGN KEY (`id_tp_produto`) REFERENCES `tipo_produtos` (`id`),
  ADD CONSTRAINT `fk_id_unidade_produto` FOREIGN KEY (`id_unidade`) REFERENCES `unidades` (`id`);

--
-- Limitadores para a tabela `produtos_precos`
--
ALTER TABLE `produtos_precos`
  ADD CONSTRAINT `fk_id_produto_prod_precos` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`);

--
-- Limitadores para a tabela `tipo_produtos`
--
ALTER TABLE `tipo_produtos`
  ADD CONSTRAINT `fk_id_status_tp_produto` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`);

--
-- Limitadores para a tabela `unidades`
--
ALTER TABLE `unidades`
  ADD CONSTRAINT `fk_id_status_unidades` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`);

--
-- Limitadores para a tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_id_status_usuario` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`);

--
-- Limitadores para a tabela `vendas`
--
ALTER TABLE `vendas`
  ADD CONSTRAINT `fk_kar_status_vendas` FOREIGN KEY (`kar_tipo`) REFERENCES `kardex_tipos` (`id`);

--
-- Limitadores para a tabela `vendas_itens`
--
ALTER TABLE `vendas_itens`
  ADD CONSTRAINT `fk_id_produto_ven_itens` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`),
  ADD CONSTRAINT `fk_id_vendas_ven_itens` FOREIGN KEY (`id_venda`) REFERENCES `vendas` (`id`),
  ADD CONSTRAINT `fk_kar_tipo_ven_itens` FOREIGN KEY (`kar_tipo`) REFERENCES `kardex_tipos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
