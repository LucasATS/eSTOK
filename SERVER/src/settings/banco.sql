-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Maio-2023 às 03:22
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

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
DROP PROCEDURE IF EXISTS `sp_categorias`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_categorias` (IN `descricao_e` VARCHAR(50) CHARSET utf8mb4, IN `id_status_e` INT)   BEGIN
  DECLARE contador INT(11);
    SELECT COUNT(*) INTO contador FROM categorias c WHERE c.descricao LIKE concat ('%', descricao_e, '%');
    IF contador = 0 THEN
    INSERT INTO categorias (descricao, id_status) VALUES (descricao_e, id_status_e);
    SELECT c.id AS 'ID', c.descricao AS 'Categoria', 'Categoria cadastrada com sucesso!' AS Msg FROM categorias c WHERE c.descricao = descricao_e;
    ELSE
    SELECT c.id AS 'ID', c.descricao AS 'Descrição', 'Categoria ja existe na base de dados!' AS Msg FROM categorias c WHERE c.descricao = descricao_e;
    END IF;
END$$

DROP PROCEDURE IF EXISTS `sp_login`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_login` (IN `login_e` VARCHAR(25) CHARSET utf8mb4, IN `senha_e` VARCHAR(225) CHARSET utf8mb4)   BEGIN
    DECLARE login_ee VARCHAR(25);

    SELECT login INTO login_ee FROM Usuarios u
    WHERE
        (
            BINARY u.login COLLATE utf8mb4_general_ci = login_e OR 
            BINARY u.email COLLATE utf8mb4_general_ci = login_e
        ) AND
        BINARY u.senha COLLATE utf8mb4_general_ci = senha_e AND
        u.id_status = 1  LIMIT 1;
    IF login_ee IS NOT NULL THEN
        SELECT login_ee as login, 'Usuário Autenticado!' AS Msg;
    ELSE
        SELECT null as login, 'Usuário ou Senha não encontrado!' AS Msg;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `empresas`
--

INSERT INTO `empresas` (`id`, `razao_social`, `nome_fantasia`, `Telefone`, `email`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Empresa Teste', 'Empresa Teste', '(67)3397-1223', 'teste@empteste.com', 1, '2023-05-05 14:38:50', '2023-05-05 14:38:50');

-- --------------------------------------------------------

--
-- Estrutura da tabela `estoques`
--

DROP TABLE IF EXISTS `estoques`;
CREATE TABLE `estoques` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `saldo` int(11) NOT NULL,
  `data_compra` datetime NOT NULL DEFAULT current_timestamp(),
  `data_validade` date NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `kardex`
--

DROP TABLE IF EXISTS `kardex`;
CREATE TABLE `kardex` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `kar_tipo` int(11) NOT NULL,
  `saldo` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `kardex_tipos`
--

INSERT INTO `kardex_tipos` (`id`, `descricao`, `createAt`, `updateAt`) VALUES
(1, 'Entrada', '2023-05-14 16:50:42', '2023-05-14 16:50:42'),
(2, 'Saida', '2023-05-14 16:50:42', '2023-05-14 16:50:42');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `id_categoria`, `id_tp_produto`, `id_unidade`, `foto`, `fungibilidade`, `estocavel`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Produto', 'Roupas', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:10:09', '2023-05-15 11:10:09'),
(2, 'Produto 1', 'Diversos', 1, 1, 'CX1', '', 1, 1, 1, '2023-05-15 11:12:49', '2023-05-15 11:12:49'),
(3, 'Produto 2', 'Roupas 1', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:14:05', '2023-05-15 11:14:05'),
(4, 'Produto 3', 'Chinelos', 1, 1, 'DIV', '', 1, 1, 1, '2023-05-15 11:15:57', '2023-05-15 11:15:57'),
(5, 'Produto 4', 'Sapatos', 1, 1, 'CX1', '', 1, 1, 2, '2023-05-15 11:23:59', '2023-05-15 11:23:59'),
(6, 'Produto 6', 'Roupas 1', 2, 1, 'DIV', '', 1, 1, 2, '2023-05-17 10:38:05', '2023-05-17 10:38:05');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `unidades`
--

INSERT INTO `unidades` (`id`, `descricao`, `id_status`, `createdAt`, `updatedAt`) VALUES
('CX1', 'Caixa', 1, '2023-05-05 14:47:29', '2023-05-05 14:47:29'),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `cpf`, `nome`, `login`, `email`, `senha_reset`, `senha`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, '00000000000', 'Admin', 'Admin', 'admin@admin.com', 1, '1', 1, '2023-05-05 14:40:10', '2023-05-05 14:40:10'),
(2, '00000000001', 'Suporte', 'Suporte', 'suporte@suporte.com', 1, '2', 2, '2023-05-05 14:40:10', '2023-05-05 14:40:10');

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
-- Estrutura stand-in para vista `vw_empresa`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_empresa`;
CREATE TABLE `vw_empresa` (
`nome_fantasia` varchar(255)
,`Telefone` varchar(20)
,`email` varchar(255)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_produtos`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_produtos`;
CREATE TABLE `vw_produtos` (
`ID` int(11)
,`Nome` varchar(50)
,`Descrição` varchar(225)
,`Categoria` varchar(50)
,`Tipo do Produto` varchar(100)
,`Unidade` varchar(50)
,`fungibilidade` tinyint(1)
,`estocavel` tinyint(1)
,`Status` varchar(30)
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
-- Estrutura stand-in para vista `vw_tipo_produto`
-- (Veja abaixo para a view atual)
--
DROP VIEW IF EXISTS `vw_tipo_produto`;
CREATE TABLE `vw_tipo_produto` (
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
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_categorias`  AS SELECT `c`.`id` AS `ID`, `c`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`categorias` `c` join `status_cads` `sc` on(`c`.`id_status` = `sc`.`id`)) ORDER BY `c`.`descricao` ASC  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_empresa`
--
DROP TABLE IF EXISTS `vw_empresa`;

DROP VIEW IF EXISTS `vw_empresa`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_empresa`  AS SELECT `e`.`nome_fantasia` AS `nome_fantasia`, `e`.`Telefone` AS `Telefone`, `e`.`email` AS `email` FROM `empresas` AS `e` WHERE `e`.`id_status` = 11  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_produtos`
--
DROP TABLE IF EXISTS `vw_produtos`;

DROP VIEW IF EXISTS `vw_produtos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_produtos`  AS SELECT `p`.`id` AS `ID`, `p`.`nome` AS `Nome`, `p`.`descricao` AS `Descrição`, `c`.`descricao` AS `Categoria`, `tp`.`descricao` AS `Tipo do Produto`, `u`.`descricao` AS `Unidade`, `p`.`fungibilidade` AS `fungibilidade`, `p`.`estocavel` AS `estocavel`, `sc`.`descricao` AS `Status` FROM ((((`produtos` `p` join `status_cads` `sc` on(`p`.`id_status` = `sc`.`id`)) join `categorias` `c` on(`p`.`id_categoria` = `c`.`id`)) join `tipo_produtos` `tp` on(`p`.`id_tp_produto` = `tp`.`id`)) join `unidades` `u` on(`p`.`id_unidade` = `u`.`id`)) ORDER BY `p`.`nome` ASC  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_status_cads`
--
DROP TABLE IF EXISTS `vw_status_cads`;

DROP VIEW IF EXISTS `vw_status_cads`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_status_cads`  AS SELECT `sc`.`id` AS `ID`, `sc`.`descricao` AS `Descrição` FROM `status_cads` AS `sc` ORDER BY `sc`.`descricao` ASC  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_tipo_produto`
--
DROP TABLE IF EXISTS `vw_tipo_produto`;

DROP VIEW IF EXISTS `vw_tipo_produto`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_tipo_produto`  AS SELECT `tp`.`id` AS `ID`, `tp`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`tipo_produtos` `tp` join `status_cads` `sc` on(`tp`.`id_status` = `sc`.`id`)) ORDER BY `tp`.`id` ASC  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_unidades`
--
DROP TABLE IF EXISTS `vw_unidades`;

DROP VIEW IF EXISTS `vw_unidades`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_unidades`  AS SELECT `u`.`id` AS `Abreviação`, `u`.`descricao` AS `Descrição`, `sc`.`descricao` AS `Status` FROM (`unidades` `u` join `status_cads` `sc` on(`u`.`id_status` = `sc`.`id`)) ORDER BY `u`.`descricao` ASC  ;

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
-- Índices para tabela `estoques`
--
ALTER TABLE `estoques`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_produto_estoque` (`id_produto`);

--
-- Índices para tabela `kardex`
--
ALTER TABLE `kardex`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_kar_tipo_kardex` (`kar_tipo`),
  ADD KEY `fk_id_produto_kardex` (`id_produto`);

--
-- Índices para tabela `kardex_tipos`
--
ALTER TABLE `kardex_tipos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UQ_descricao` (`descricao`);

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
-- AUTO_INCREMENT de tabela `estoques`
--
ALTER TABLE `estoques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `kardex`
--
ALTER TABLE `kardex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `kardex_tipos`
--
ALTER TABLE `kardex_tipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
-- Limitadores para a tabela `estoques`
--
ALTER TABLE `estoques`
  ADD CONSTRAINT `fk_id_produto_estoque` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`);

--
-- Limitadores para a tabela `kardex`
--
ALTER TABLE `kardex`
  ADD CONSTRAINT `fk_id_kar_tipo_kardex` FOREIGN KEY (`kar_tipo`) REFERENCES `kardex_tipos` (`id`),
  ADD CONSTRAINT `fk_id_produto_kardex` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`);

--
-- Limitadores para a tabela `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `fk_id_categoria_produto` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `fk_id_status_produto` FOREIGN KEY (`id_status`) REFERENCES `status_cads` (`id`),
  ADD CONSTRAINT `fk_id_tp_prod_produto` FOREIGN KEY (`id_tp_produto`) REFERENCES `tipo_produtos` (`id`),
  ADD CONSTRAINT `fk_id_unidade_produto` FOREIGN KEY (`id_unidade`) REFERENCES `unidades` (`id`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
