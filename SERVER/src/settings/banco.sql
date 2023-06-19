-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Jun-2023 às 06:11
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_baixa_estoque` (IN `id_produto_e` INT, IN `lote_e` VARCHAR(10), IN `validade_e` DATE, IN `quantidade_e` INT, IN `unitario_e` DECIMAL(15,4), IN `total_e` DECIMAL(15,4), IN `motivo_e` VARCHAR(255), IN `kar_tipo_e` INT)   BEGIN

DECLARE saldo_lote INT(11);
SELECT SUM(L.qtde_lote) INTO saldo_lote FROM lotes l WHERE l.lote = lote_e;
IF saldo_lote >= quantidade_e THEN
	INSERT INTO baixa_estoques (id_produto, lote, validade, quantidade, unitario, total, motivo, kar_tipo) VALUES (id_produto_e, lote_e, validade_e, quantidade_e, unitario_e, total_e, motivo_e, kar_tipo_e);
ELSE
	SELECT id_produto_e, 'A quantidade do lote ', lote_e, ' é inferior ao saldo atual: ', saldo_lote AS Msg;
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
        SELECT null as login, 'Usuário ou Senha Incorretos!' AS Msg;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_lotes`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_lotes` (IN `id_produto_e` INT, IN `lote_e` VARCHAR(10), IN `qtde_lote_e` INT, IN `validade_e` DATE, IN `id_status` INT, IN `kar_tipo` INT)   BEGIN

    DECLARE status_lote INT(11);
    DECLARE lote_existe INT(11);
    DECLARE saldo_lote INT(11);
    SELECT COUNT(*) INTO status_lote FROM lotes l WHERE l.id_produto = id_produto_e;
    SELECT COUNT(*) INTO lote_existe FROM lotes l WHERE l.lote = lote_e;
    SELECT SUM(L.qtde_lote) INTO saldo_lote FROM lotes l WHERE l.lote = lote_e;
    IF status_lote > 0 AND lote_existe > 0  AND saldo_lote > 0 THEN
        IF kar_tipo = 1 THEN
            UPDATE lotes l set l.lote = lote_e, l.qtde_lote = l.qtde_lote + qtde_lote_e, l.validade = validade_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e;
        ELSEIF kar_tipo = 2 OR kar_tipo = 3 OR kar_tipo = 4 THEN
            UPDATE lotes l set l.lote = lote_e, l.qtde_lote = l.qtde_lote + qtde_lote_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e;
        END IF;
    ELSEIF status_lote > 0 AND lote_existe > 0  AND saldo_lote = 0 THEN
        UPDATE lotes l set l.lote = lote_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e;
    ELSE
        INSERT INTO lotes (id_produto, lote, qtde_lote, validade, id_status) VALUES (id_produto_e, lote_e, qtde_lote_e, validade_e, id_status);
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_vendas_cabecalho` (IN `kar_tipo_e` INT, IN `cliente_e` VARCHAR(255), IN `email_e` VARCHAR(255), IN `telefone_e` VARCHAR(14), IN `endereco_e` VARCHAR(255), IN `bairro_e` VARCHAR(150), IN `uf_e` CHAR(2), IN `cidade_e` VARCHAR(255), IN `nome_cartao_e` VARCHAR(45), IN `numero_cartao_e` VARCHAR(16), IN `dt_vencimento_e` DATE, IN `cvv_e` INT(3), IN `tipo_venda_e` INT, OUT `id_venda` INT)   BEGIN
START TRANSACTION;
    INSERT INTO vendas(kar_tipo, cliente, email, telefone, endereco, bairro, uf, cidade, nome_cartao, numero_cartao, dt_vencimento, cvv, tipo_venda)
    VALUES(kar_tipo_e, cliente_e, email_e, telefone_e, endereco_e, bairro_e, uf_e, cidade_e, nome_cartao_e, numero_cartao_e, dt_vencimento_e, cvv_e, tipo_venda_e);

SELECT LAST_INSERT_ID() INTO id_venda;

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
  `id_unidade` char(3) NOT NULL,
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
(1, 'Produto', 'Roupas', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:10:09', '2023-05-15 11:10:09'),
(2, 'Produto 1', 'Diversos', 1, 1, 'CX1', '', 1, 1, 1, '2023-05-15 11:12:49', '2023-05-15 11:12:49'),
(3, 'Produto 2', 'Roupas 1', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:14:05', '2023-05-15 11:14:05'),
(4, 'Produto 3', 'Chinelos', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:15:57', '2023-05-15 11:15:57'),
(5, 'Produto 4', 'Sapatos', 1, 1, 'CX1', '', 1, 1, 2, '2023-05-15 11:23:59', '2023-05-15 11:23:59'),
(6, 'Produto 6', 'Roupas 1', 2, 1, 'DIV', '', 1, 1, 2, '2023-05-17 10:38:05', '2023-05-17 10:38:05'),
(7, 'Produto 7', 'Diversos 7', 2, 1, 'CX1', '', 1, 1, 1, '2023-05-29 12:17:27', '2023-05-29 12:17:27');

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
(1, 2, 85.0000, '2023-05-29 08:15:56', '2023-05-29 08:15:56'),
(2, 1, 15.0000, '2023-05-29 08:18:36', '2023-05-29 08:18:36'),
(3, 3, 25.0000, '2023-06-01 21:34:09', '2023-06-01 21:34:09');

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
('CX50', 'Caixa com 50', 2, '2023-05-17 10:40:59', '2023-05-17 10:40:59'),
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
  `id_status` int(11) NOT NULL,
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
      CALL sp_lotes (new.id_produto, new.lote, new.quantidade * -1, '', 1, 3 );
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_categorias`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_categorias`;
CREATE TABLE `vw_categorias` (
`ID` int(11)
,`Descrição` varchar(50)
,`Status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_empresas`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_empresas`;
CREATE TABLE `vw_empresas` (
`nome_fantasia` varchar(255)
,`Telefone` varchar(20)
,`email` varchar(255)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_entradas_cadastro`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_entradas_cadastro`;
CREATE TABLE `vw_entradas_cadastro` (
`ID` varchar(12)
,`Porduto` varchar(276)
,`Categoria` varchar(50)
,`Quantidade` decimal(32,0)
,`Preço` decimal(15,4)
,`Data Compra` date
,`Vencimento` date
,`Lotes` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_estoque_por_lotes`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_estoque_por_lotes`;
CREATE TABLE `vw_estoque_por_lotes` (
`Soma` decimal(32,0)
,`Código` int(11)
,`Produto` varchar(50)
,`Lote` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_kardex_tipos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_kardex_tipos`;
CREATE TABLE `vw_kardex_tipos` (
`ID` int(11)
,`Descrição` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_lotes`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_lotes`;
CREATE TABLE `vw_lotes` (
`Código` int(11)
,`Nome do Produto` varchar(50)
,`Lote` varchar(10)
,`Quantidade Lote` int(11)
,`Validade` datetime
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_produtos_cadastro`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_produtos_cadastro`;
CREATE TABLE `vw_produtos_cadastro` (
`ID` varchar(12)
,`Produto` varchar(276)
,`Categoria` varchar(50)
,`Tipo do Produto` varchar(100)
,`Unidade` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_status_cads`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_status_cads`;
CREATE TABLE `vw_status_cads` (
`ID` int(11)
,`Descrição` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_tipo_produtos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_tipo_produtos`;
CREATE TABLE `vw_tipo_produtos` (
`ID` int(11)
,`Descrição` varchar(100)
,`Status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_unidades`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_unidades`;
CREATE TABLE `vw_unidades` (
`Abreviação` char(6)
,`Descrição` varchar(50)
,`Status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_categorias`
--
DROP TABLE IF EXISTS `vw_categorias`;

DROP VIEW IF EXISTS `vw_categorias`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_categorias`  AS SELECT `c`.`id` AS `ID`, `c`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`categorias` `c` join `status_cads` `sc` on(`c`.`id_status` = `sc`.`id`)) ORDER BY `c`.`descricao` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_empresas`
--
DROP TABLE IF EXISTS `vw_empresas`;

DROP VIEW IF EXISTS `vw_empresas`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_empresas`  AS SELECT `e`.`nome_fantasia` AS `nome_fantasia`, `e`.`Telefone` AS `Telefone`, `e`.`email` AS `email` FROM `empresas` AS `e` WHERE `e`.`id_status` = 1 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_entradas_cadastro`
--
DROP TABLE IF EXISTS `vw_entradas_cadastro`;

DROP VIEW IF EXISTS `vw_entradas_cadastro`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_entradas_cadastro`  AS SELECT concat('#',`e`.`id_produto`) AS `ID`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `Porduto`, `c`.`descricao` AS `Categoria`, sum(`e`.`quantidade`) AS `Quantidade`, `e`.`unitario` AS `Preço`, `e`.`data_compra` AS `Data Compra`, `e`.`validade` AS `Vencimento`, `e`.`lote` AS `Lotes` FROM ((`entradas` `e` join `produtos` `p` on(`e`.`id_produto` = `p`.`id`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) WHERE `p`.`id_status` = 1 GROUP BY `e`.`lote` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_estoque_por_lotes`
--
DROP TABLE IF EXISTS `vw_estoque_por_lotes`;

DROP VIEW IF EXISTS `vw_estoque_por_lotes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_estoque_por_lotes`  AS SELECT sum(`e`.`quantidade`) AS `Soma`, `e`.`id_produto` AS `Código`, `p`.`nome` AS `Produto`, `e`.`lote` AS `Lote` FROM (`entradas` `e` join `produtos` `p` on(`e`.`id_produto` = `p`.`id`)) GROUP BY `e`.`id_produto`, `p`.`nome`, `e`.`lote` ORDER BY `e`.`id_produto` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_kardex_tipos`
--
DROP TABLE IF EXISTS `vw_kardex_tipos`;

DROP VIEW IF EXISTS `vw_kardex_tipos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_kardex_tipos`  AS SELECT `kt`.`id` AS `ID`, `kt`.`descricao` AS `Descrição` FROM `kardex_tipos` AS `kt` ORDER BY `kt`.`id` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_lotes`
--
DROP TABLE IF EXISTS `vw_lotes`;

DROP VIEW IF EXISTS `vw_lotes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_lotes`  AS SELECT `l`.`id_produto` AS `Código`, `p`.`nome` AS `Nome do Produto`, `l`.`lote` AS `Lote`, `l`.`qtde_lote` AS `Quantidade Lote`, `l`.`validade` AS `Validade` FROM (`lotes` `l` join `produtos` `p` on(`l`.`id_produto` = `p`.`id`)) WHERE `l`.`qtde_lote` >= 1 AND `l`.`id_status` = 1 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_produtos_cadastro`
--
DROP TABLE IF EXISTS `vw_produtos_cadastro`;

DROP VIEW IF EXISTS `vw_produtos_cadastro`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_produtos_cadastro`  AS SELECT concat('#',`p`.`id`) AS `ID`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `Produto`, `c`.`descricao` AS `Categoria`, `tp`.`descricao` AS `Tipo do Produto`, `u`.`descricao` AS `Unidade` FROM ((((`produtos` `p` join `status_cads` `sc` on(`p`.`id_status` = `sc`.`id`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) join `tipo_produtos` `tp` on(`p`.`id_tp_produto` = `tp`.`id`)) join `unidades` `u` on(`p`.`id_unidade` = `u`.`id`)) ORDER BY `p`.`nome` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_status_cads`
--
DROP TABLE IF EXISTS `vw_status_cads`;

DROP VIEW IF EXISTS `vw_status_cads`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_status_cads`  AS SELECT `sc`.`id` AS `ID`, `sc`.`descricao` AS `Descrição` FROM `status_cads` AS `sc` ORDER BY `sc`.`descricao` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_tipo_produtos`
--
DROP TABLE IF EXISTS `vw_tipo_produtos`;

DROP VIEW IF EXISTS `vw_tipo_produtos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_tipo_produtos`  AS SELECT `tp`.`id` AS `ID`, `tp`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`tipo_produtos` `tp` join `status_cads` `sc` on(`tp`.`id_status` = `sc`.`id`)) ORDER BY `tp`.`id` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_unidades`
--
DROP TABLE IF EXISTS `vw_unidades`;

DROP VIEW IF EXISTS `vw_unidades`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_unidades`  AS SELECT `u`.`id` AS `Abreviação`, `u`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`unidades` `u` join `status_cads` `sc` on(`u`.`id_status` = `sc`.`id`)) ORDER BY `u`.`descricao` ASC ;

--
-- Índices para tabelas despejadas
--

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `estoques`
--
ALTER TABLE `estoques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `kardex_tipos`
--
ALTER TABLE `kardex_tipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `lotes`
--
ALTER TABLE `lotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `produtos_precos`
--
ALTER TABLE `produtos_precos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Jun-2023 às 06:11
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_baixa_estoque` (IN `id_produto_e` INT, IN `lote_e` VARCHAR(10), IN `validade_e` DATE, IN `quantidade_e` INT, IN `unitario_e` DECIMAL(15,4), IN `total_e` DECIMAL(15,4), IN `motivo_e` VARCHAR(255), IN `kar_tipo_e` INT)   BEGIN

DECLARE saldo_lote INT(11);
SELECT SUM(L.qtde_lote) INTO saldo_lote FROM lotes l WHERE l.lote = lote_e;
IF saldo_lote >= quantidade_e THEN
	INSERT INTO baixa_estoques (id_produto, lote, validade, quantidade, unitario, total, motivo, kar_tipo) VALUES (id_produto_e, lote_e, validade_e, quantidade_e, unitario_e, total_e, motivo_e, kar_tipo_e);
ELSE
	SELECT id_produto_e, 'A quantidade do lote ', lote_e, ' é inferior ao saldo atual: ', saldo_lote AS Msg;
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
        SELECT null as login, 'Usuário ou Senha Incorretos!' AS Msg;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_lotes`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_lotes` (IN `id_produto_e` INT, IN `lote_e` VARCHAR(10), IN `qtde_lote_e` INT, IN `validade_e` DATE, IN `id_status` INT, IN `kar_tipo` INT)   BEGIN

    DECLARE status_lote INT(11);
    DECLARE lote_existe INT(11);
    DECLARE saldo_lote INT(11);
    SELECT COUNT(*) INTO status_lote FROM lotes l WHERE l.id_produto = id_produto_e;
    SELECT COUNT(*) INTO lote_existe FROM lotes l WHERE l.lote = lote_e;
    SELECT SUM(L.qtde_lote) INTO saldo_lote FROM lotes l WHERE l.lote = lote_e;
    IF status_lote > 0 AND lote_existe > 0  AND saldo_lote > 0 THEN
        IF kar_tipo = 1 THEN
            UPDATE lotes l set l.lote = lote_e, l.qtde_lote = l.qtde_lote + qtde_lote_e, l.validade = validade_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e;
        ELSEIF kar_tipo = 2 OR kar_tipo = 3 OR kar_tipo = 4 THEN
            UPDATE lotes l set l.lote = lote_e, l.qtde_lote = l.qtde_lote + qtde_lote_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e;
        END IF;
    ELSEIF status_lote > 0 AND lote_existe > 0  AND saldo_lote = 0 THEN
        UPDATE lotes l set l.lote = lote_e, l.id_status = id_status WHERE l.id_produto = id_produto_e AND l.lote = lote_e;
    ELSE
        INSERT INTO lotes (id_produto, lote, qtde_lote, validade, id_status) VALUES (id_produto_e, lote_e, qtde_lote_e, validade_e, id_status);
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_vendas_cabecalho` (IN `kar_tipo_e` INT, IN `cliente_e` VARCHAR(255), IN `email_e` VARCHAR(255), IN `telefone_e` VARCHAR(14), IN `endereco_e` VARCHAR(255), IN `bairro_e` VARCHAR(150), IN `uf_e` CHAR(2), IN `cidade_e` VARCHAR(255), IN `nome_cartao_e` VARCHAR(45), IN `numero_cartao_e` VARCHAR(16), IN `dt_vencimento_e` DATE, IN `cvv_e` INT(3), IN `tipo_venda_e` INT, OUT `id_venda` INT)   BEGIN
START TRANSACTION;
    INSERT INTO vendas(kar_tipo, cliente, email, telefone, endereco, bairro, uf, cidade, nome_cartao, numero_cartao, dt_vencimento, cvv, tipo_venda)
    VALUES(kar_tipo_e, cliente_e, email_e, telefone_e, endereco_e, bairro_e, uf_e, cidade_e, nome_cartao_e, numero_cartao_e, dt_vencimento_e, cvv_e, tipo_venda_e);

SELECT LAST_INSERT_ID() INTO id_venda;

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
  `id_unidade` char(3) NOT NULL,
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
(1, 'Produto', 'Roupas', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:10:09', '2023-05-15 11:10:09'),
(2, 'Produto 1', 'Diversos', 1, 1, 'CX1', '', 1, 1, 1, '2023-05-15 11:12:49', '2023-05-15 11:12:49'),
(3, 'Produto 2', 'Roupas 1', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:14:05', '2023-05-15 11:14:05'),
(4, 'Produto 3', 'Chinelos', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:15:57', '2023-05-15 11:15:57'),
(5, 'Produto 4', 'Sapatos', 1, 1, 'CX1', '', 1, 1, 2, '2023-05-15 11:23:59', '2023-05-15 11:23:59'),
(6, 'Produto 6', 'Roupas 1', 2, 1, 'DIV', '', 1, 1, 2, '2023-05-17 10:38:05', '2023-05-17 10:38:05'),
(7, 'Produto 7', 'Diversos 7', 2, 1, 'CX1', '', 1, 1, 1, '2023-05-29 12:17:27', '2023-05-29 12:17:27');

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
(1, 2, 85.0000, '2023-05-29 08:15:56', '2023-05-29 08:15:56'),
(2, 1, 15.0000, '2023-05-29 08:18:36', '2023-05-29 08:18:36'),
(3, 3, 25.0000, '2023-06-01 21:34:09', '2023-06-01 21:34:09');

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
('CX50', 'Caixa com 50', 2, '2023-05-17 10:40:59', '2023-05-17 10:40:59'),
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
  `id_status` int(11) NOT NULL,
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
      CALL sp_lotes (new.id_produto, new.lote, new.quantidade * -1, '', 1, 3 );
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_categorias`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_categorias`;
CREATE TABLE `vw_categorias` (
`ID` int(11)
,`Descrição` varchar(50)
,`Status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_empresas`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_empresas`;
CREATE TABLE `vw_empresas` (
`nome_fantasia` varchar(255)
,`Telefone` varchar(20)
,`email` varchar(255)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_entradas_cadastro`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_entradas_cadastro`;
CREATE TABLE `vw_entradas_cadastro` (
`ID` varchar(12)
,`Porduto` varchar(276)
,`Categoria` varchar(50)
,`Quantidade` decimal(32,0)
,`Preço` decimal(15,4)
,`Data Compra` date
,`Vencimento` date
,`Lotes` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_estoque_por_lotes`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_estoque_por_lotes`;
CREATE TABLE `vw_estoque_por_lotes` (
`Soma` decimal(32,0)
,`Código` int(11)
,`Produto` varchar(50)
,`Lote` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_kardex_tipos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_kardex_tipos`;
CREATE TABLE `vw_kardex_tipos` (
`ID` int(11)
,`Descrição` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_lotes`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_lotes`;
CREATE TABLE `vw_lotes` (
`Código` int(11)
,`Nome do Produto` varchar(50)
,`Lote` varchar(10)
,`Quantidade Lote` int(11)
,`Validade` datetime
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_produtos_cadastro`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_produtos_cadastro`;
CREATE TABLE `vw_produtos_cadastro` (
`ID` varchar(12)
,`Produto` varchar(276)
,`Categoria` varchar(50)
,`Tipo do Produto` varchar(100)
,`Unidade` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_status_cads`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_status_cads`;
CREATE TABLE `vw_status_cads` (
`ID` int(11)
,`Descrição` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_tipo_produtos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_tipo_produtos`;
CREATE TABLE `vw_tipo_produtos` (
`ID` int(11)
,`Descrição` varchar(100)
,`Status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_unidades`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_unidades`;
CREATE TABLE `vw_unidades` (
`Abreviação` char(6)
,`Descrição` varchar(50)
,`Status` varchar(30)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_categorias`
--
DROP TABLE IF EXISTS `vw_categorias`;

DROP VIEW IF EXISTS `vw_categorias`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_categorias`  AS SELECT `c`.`id` AS `ID`, `c`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`categorias` `c` join `status_cads` `sc` on(`c`.`id_status` = `sc`.`id`)) ORDER BY `c`.`descricao` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_empresas`
--
DROP TABLE IF EXISTS `vw_empresas`;

DROP VIEW IF EXISTS `vw_empresas`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_empresas`  AS SELECT `e`.`nome_fantasia` AS `nome_fantasia`, `e`.`Telefone` AS `Telefone`, `e`.`email` AS `email` FROM `empresas` AS `e` WHERE `e`.`id_status` = 1 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_entradas_cadastro`
--
DROP TABLE IF EXISTS `vw_entradas_cadastro`;

DROP VIEW IF EXISTS `vw_entradas_cadastro`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_entradas_cadastro`  AS SELECT concat('#',`e`.`id_produto`) AS `ID`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `Porduto`, `c`.`descricao` AS `Categoria`, sum(`e`.`quantidade`) AS `Quantidade`, `e`.`unitario` AS `Preço`, `e`.`data_compra` AS `Data Compra`, `e`.`validade` AS `Vencimento`, `e`.`lote` AS `Lotes` FROM ((`entradas` `e` join `produtos` `p` on(`e`.`id_produto` = `p`.`id`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) WHERE `p`.`id_status` = 1 GROUP BY `e`.`lote` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_estoque_por_lotes`
--
DROP TABLE IF EXISTS `vw_estoque_por_lotes`;

DROP VIEW IF EXISTS `vw_estoque_por_lotes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_estoque_por_lotes`  AS SELECT sum(`e`.`quantidade`) AS `Soma`, `e`.`id_produto` AS `Código`, `p`.`nome` AS `Produto`, `e`.`lote` AS `Lote` FROM (`entradas` `e` join `produtos` `p` on(`e`.`id_produto` = `p`.`id`)) GROUP BY `e`.`id_produto`, `p`.`nome`, `e`.`lote` ORDER BY `e`.`id_produto` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_kardex_tipos`
--
DROP TABLE IF EXISTS `vw_kardex_tipos`;

DROP VIEW IF EXISTS `vw_kardex_tipos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_kardex_tipos`  AS SELECT `kt`.`id` AS `ID`, `kt`.`descricao` AS `Descrição` FROM `kardex_tipos` AS `kt` ORDER BY `kt`.`id` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_lotes`
--
DROP TABLE IF EXISTS `vw_lotes`;

DROP VIEW IF EXISTS `vw_lotes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_lotes`  AS SELECT `l`.`id_produto` AS `Código`, `p`.`nome` AS `Nome do Produto`, `l`.`lote` AS `Lote`, `l`.`qtde_lote` AS `Quantidade Lote`, `l`.`validade` AS `Validade` FROM (`lotes` `l` join `produtos` `p` on(`l`.`id_produto` = `p`.`id`)) WHERE `l`.`qtde_lote` >= 1 AND `l`.`id_status` = 1 ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_produtos_cadastro`
--
DROP TABLE IF EXISTS `vw_produtos_cadastro`;

DROP VIEW IF EXISTS `vw_produtos_cadastro`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_produtos_cadastro`  AS SELECT concat('#',`p`.`id`) AS `ID`, concat(`p`.`nome`,' ',`p`.`descricao`) AS `Produto`, `c`.`descricao` AS `Categoria`, `tp`.`descricao` AS `Tipo do Produto`, `u`.`descricao` AS `Unidade` FROM ((((`produtos` `p` join `status_cads` `sc` on(`p`.`id_status` = `sc`.`id`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) join `tipo_produtos` `tp` on(`p`.`id_tp_produto` = `tp`.`id`)) join `unidades` `u` on(`p`.`id_unidade` = `u`.`id`)) ORDER BY `p`.`nome` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_status_cads`
--
DROP TABLE IF EXISTS `vw_status_cads`;

DROP VIEW IF EXISTS `vw_status_cads`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_status_cads`  AS SELECT `sc`.`id` AS `ID`, `sc`.`descricao` AS `Descrição` FROM `status_cads` AS `sc` ORDER BY `sc`.`descricao` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_tipo_produtos`
--
DROP TABLE IF EXISTS `vw_tipo_produtos`;

DROP VIEW IF EXISTS `vw_tipo_produtos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_tipo_produtos`  AS SELECT `tp`.`id` AS `ID`, `tp`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`tipo_produtos` `tp` join `status_cads` `sc` on(`tp`.`id_status` = `sc`.`id`)) ORDER BY `tp`.`id` ASC ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_unidades`
--
DROP TABLE IF EXISTS `vw_unidades`;

DROP VIEW IF EXISTS `vw_unidades`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_unidades`  AS SELECT `u`.`id` AS `Abreviação`, `u`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`unidades` `u` join `status_cads` `sc` on(`u`.`id_status` = `sc`.`id`)) ORDER BY `u`.`descricao` ASC ;

--
-- Índices para tabelas despejadas
--

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `estoques`
--
ALTER TABLE `estoques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `kardex_tipos`
--
ALTER TABLE `kardex_tipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `lotes`
--
ALTER TABLE `lotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `produtos_precos`
--
ALTER TABLE `produtos_precos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
