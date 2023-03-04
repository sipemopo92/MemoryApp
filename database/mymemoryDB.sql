-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              8.0.30 - MySQL Community Server - GPL
-- S.O. server:                  Win64
-- HeidiSQL Versione:            12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dump della struttura del database memoryapp
CREATE DATABASE IF NOT EXISTS `memoryapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `memoryapp`;

-- Dump della struttura di tabella memoryapp.scores
CREATE TABLE IF NOT EXISTS `scores` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_user` bigint unsigned NOT NULL,
  `score` int unsigned NOT NULL,
  `data` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_scores_users` (`id_user`),
  CONSTRAINT `FK_scores_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dump dei dati della tabella memoryapp.scores: ~34 rows (circa)
INSERT INTO `scores` (`id`, `id_user`, `score`, `data`) VALUES
	(1, 1, 20000, '2023-03-04 09:22:16'),
	(2, 1, 19098, '2023-03-04 09:42:36'),
	(3, 2, 10540, '2023-03-04 09:43:24'),
	(4, 2, 15946, '2023-03-04 09:43:57'),
	(5, 2, 12916, '2023-03-04 09:44:23'),
	(6, 2, 11608, '2023-03-04 09:44:46'),
	(7, 2, 15606, '2023-03-04 09:45:08'),
	(8, 2, 0, '2023-03-04 09:48:41'),
	(9, 3, 15926, '2023-03-04 10:15:10'),
	(10, 3, 19635, '2023-03-04 10:15:28'),
	(11, 3, 15980, '2023-03-04 10:15:46'),
	(12, 3, 17512, '2023-03-04 10:16:03'),
	(13, 3, 17000, '2023-03-04 10:16:21'),
	(14, 3, 18465, '2023-03-04 10:16:37'),
	(15, 3, 15511, '2023-03-04 10:16:56'),
	(16, 3, 13000, '2023-03-04 10:17:18'),
	(17, 4, 17250, '2023-03-04 10:17:55'),
	(18, 4, 14539, '2023-03-04 10:18:14'),
	(19, 4, 11696, '2023-03-04 10:18:38'),
	(20, 4, 7357, '2023-03-04 10:19:06'),
	(21, 4, 0, '2023-03-04 10:19:44'),
	(22, 10, 17420, '2023-03-04 10:21:04'),
	(23, 10, 11710, '2023-03-04 10:21:26'),
	(24, 3, 16246, '2023-03-04 12:55:19'),
	(25, 1, 17486, '2023-03-04 16:16:10'),
	(26, 1, 14649, '2023-03-04 16:18:25'),
	(27, 1, 15499, '2023-03-04 16:20:03'),
	(28, 1, 18121, '2023-03-04 16:21:25'),
	(29, 1, 15242, '2023-03-04 16:22:40'),
	(30, 1, 15826, '2023-03-04 16:26:41'),
	(31, 1, 14558, '2023-03-04 16:47:50'),
	(32, 1, 15217, '2023-03-04 16:49:34'),
	(33, 4, 19210, '2023-03-04 16:54:48'),
	(34, 4, 15236, '2023-03-04 16:55:44');

-- Dump della struttura di tabella memoryapp.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dump dei dati della tabella memoryapp.users: ~6 rows (circa)
INSERT INTO `users` (`id`, `name`) VALUES
	(15, 'goku'),
	(10, 'minnie'),
	(2, 'paperino'),
	(1, 'pippo'),
	(3, 'pluto'),
	(4, 'topolino');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
