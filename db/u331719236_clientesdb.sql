-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 29/02/2024 às 06:45
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
  `data_nascimento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `sobrenome`, `sexo`, `data_nascimento`) VALUES
(4, 'Ana', 'Ribeiro', 'Feminino', '1988-11-28'),
(5, 'Rafael', 'Pereira', 'Masculino', '1992-09-05'),
(6, 'João', 'Silva', 'Masculino', '1990-05-15'),
(7, 'Maria', 'Santos', 'Feminino', '1985-08-22'),
(8, 'Carlos', 'Oliveira', 'Masculino', '1995-03-10'),
(9, 'Ana', 'Ribeiro', 'Feminino', '1988-11-28'),
(10, 'Rafael', 'Pereira', 'Masculino', '1992-09-05'),
(11, 'Julia', 'Ferreira', 'Feminino', '1998-02-14'),
(12, 'Lucas', 'Souza', 'Masculino', '1993-07-30'),
(13, 'Amanda', 'Costa', 'Feminino', '1987-12-18'),
(14, 'Fernando', 'Almeida', 'Masculino', '1994-04-03'),
(15, 'Larissa', 'Lima', 'Feminino', '1991-10-20'),
(16, 'Pedro', 'Mendes', 'Masculino', '1989-06-25'),
(17, 'Camila', 'Martins', 'Feminino', '1997-01-08'),
(18, 'Guilherme', 'Rodrigues', 'Masculino', '1996-05-02'),
(19, 'Isabela', 'Gomes', 'Feminino', '1986-09-12'),
(20, 'Ricardo', 'Silveira', 'Masculino', '1999-03-17'),
(21, 'Mariana', 'Cruz', 'Feminino', '1984-11-22'),
(22, 'André', 'Fernandes', 'Masculino', '1997-07-08'),
(23, 'Patrícia', 'Vieira', 'Feminino', '1992-01-30'),
(24, 'Gabriel', 'Rocha', 'Masculino', '1983-08-05'),
(25, 'Carolina', 'Melo', 'Feminino', '1998-04-21'),
(26, 'Eduardo', 'Pereira', 'Masculino', '1994-10-14'),
(27, 'Thais', 'Oliveira', 'Feminino', '1989-06-29'),
(28, 'Vinícius', 'Costa', 'Masculino', '1995-02-03'),
(29, 'Ana Clara', 'Sousa', 'Feminino', '1990-07-19'),
(30, 'Leonardo', 'Ferreira', 'Masculino', '1985-12-08'),
(31, 'Natália', 'Carvalho', 'Feminino', '1993-04-24'),
(32, 'Marcos', 'Oliveira', 'Masculino', '1996-11-09'),
(33, 'Aline', 'Santana', 'Feminino', '1988-03-05'),
(34, 'Matheus', 'Mendes', 'Masculino', '1999-09-01'),
(35, 'Ana Luiza', 'Silva', 'Feminino', '1994-06-15'),
(36, 'Alexandre', 'Pereira', 'Masculino', '1991-12-30'),
(37, 'Raquel', 'Sousa', 'Feminino', '1987-10-14'),
(38, 'Felipe', 'Martins', 'Masculino', '1996-02-28'),
(39, 'Bianca', 'Costa', 'Feminino', '1993-08-11'),
(40, 'José', 'Oliveira', 'Masculino', '1988-04-26'),
(41, 'Beatriz', 'Cunha', 'Feminino', '1995-01-09'),
(42, 'Rodrigo', 'Ferreira', 'Masculino', '1990-07-23'),
(43, 'Laura', 'Almeida', 'Feminino', '1986-05-18'),
(44, 'Felipe', 'Rodrigues', 'Masculino', '1997-11-01'),
(45, 'Jéssica', 'Melo', 'Feminino', '1992-03-05'),
(46, 'Thiago', 'Cruz', 'Masculino', '1998-09-10'),
(47, 'Raissa', 'Santos', 'Feminino', '1984-06-24'),
(48, 'Lucas', 'Ferreira', 'Masculino', '1993-02-17');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
