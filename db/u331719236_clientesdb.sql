-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 04/03/2024 às 10:12
-- Versão do servidor: 10.11.7-MariaDB-cll-lve
-- Versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u331719236_clientesdb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `sexo` enum('Masculino','Feminino') NOT NULL,
  `data_nascimento` date NOT NULL,
  `rua` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `cep` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `sobrenome`, `sexo`, `data_nascimento`, `rua`, `cidade`, `estado`, `cep`) VALUES
(49, 'Renata', 'Oliveira', 'Feminino', '1990-12-03', 'Rua D', 'Cidade D', 'BA', '65432-1098'),
(50, 'Fábio', 'Santos', 'Masculino', '1987-06-18', 'Rua E', 'Cidade E', 'GO', '87654-3210'),
(51, 'Marina', 'Mendes', 'Feminino', '1993-09-25', 'Rua F', 'Cidade F', 'SC', '21098-7654'),
(52, 'Bruno', 'Silva', 'Masculino', '1995-02-08', 'Rua G', 'Cidade G', 'AL', '43210-9876'),
(53, 'Carla', 'Rocha', 'Feminino', '1988-07-14', 'Rua H', 'Cidade H', 'MT', '98765-4321'),
(54, 'Roberto', 'Cunha', 'Masculino', '1991-04-30', 'Rua I', 'Cidade I', 'PA', '54321-8765'),
(55, 'Isabel', 'Fernandes', 'Feminino', '1986-11-12', 'Rua J', 'Cidade J', 'CE', '12345-6789'),
(56, 'Gustavo', 'Almeida', 'Masculino', '1998-03-27', 'Rua K', 'Cidade K', 'PR', '87654-3210'),
(57, 'Vanessa', 'Oliveira', 'Feminino', '1994-08-09', 'Rua L', 'Cidade L', 'RS', '21098-7654'),
(58, 'Pedro', 'Pereira', 'Masculino', '1992-01-22', 'Rua M', 'Cidade M', 'MS', '43210-9876'),
(59, 'Larissa', 'Rodrigues', 'Feminino', '1989-05-06', 'Rua N', 'Cidade N', 'RN', '98765-4321'),
(60, 'Ricardo', 'Melo', 'Masculino', '1996-10-19', 'Rua O', 'Cidade O', 'TO', '54321-8765'),
(61, 'Camila', 'Silva', 'Feminino', '1997-07-03', 'Rua P', 'Cidade P', 'PI', '12345-6789'),
(62, 'Lucas', 'Santos', 'Masculino', '1984-12-26', 'Rua Q', 'Cidade Q', 'ES', '87654-3210'),
(63, 'Juliana', 'Ferreira', 'Feminino', '1993-05-11', 'Rua R', 'Cidade R', 'RO', '21098-7654'),
(64, 'Marcos', 'Costa', 'Masculino', '1987-10-24', 'Rua S', 'Cidade S', 'AP', '43210-9876'),
(65, 'Aline', 'Cruz', 'Feminino', '1991-02-17', 'Rua T', 'Cidade T', 'AC', '98765-4321'),
(66, 'Diego', 'Martins', 'Masculino', '1999-09-01', 'Rua U', 'Cidade U', 'MA', '54321-8765'),
(67, 'Fernanda', 'Gomes', 'Feminino', '1986-06-15', 'Rua V', 'Cidade V', 'AM', '12345-6789'),
(68, 'Thiago', 'Ferreira', 'Masculino', '1994-01-28', 'Rua W', 'Cidade W', 'RR', '87654-3210'),
(69, 'Mariana', 'Oliveira', 'Feminino', '1998-04-12', 'Rua X', 'Cidade X', 'SE', '21098-7654'),
(70, 'Henrique', 'Rodrigues', 'Masculino', '1985-11-05', 'Rua Y', 'Cidade Y', 'RR', '43210-9876');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'usuario', '202cb962ac59075b964b07152d234b70');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
