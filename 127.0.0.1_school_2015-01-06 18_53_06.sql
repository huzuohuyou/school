-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.6.19 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  7.0.0.4375
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 school 的数据库结构
DROP DATABASE IF EXISTS `school`;
CREATE DATABASE IF NOT EXISTS `school` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `school`;


-- 导出  表 school.article 结构
DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `c_id` int(10) NOT NULL COMMENT '栏目id',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `content` longtext COMMENT '内容',
  `stickie` int(11) NOT NULL DEFAULT '0' COMMENT '是否置顶',
  `stickie_time` timestamp NULL DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `u_id` int(11) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=251 DEFAULT CHARSET=utf8 COMMENT='文章';

-- 正在导出表  school.article 的数据：~250 rows (大约)
DELETE FROM `article`;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` (`id`, `c_id`, `title`, `content`, `stickie`, `stickie_time`, `time`, `u_id`) VALUES
	(1, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(2, 15, '通知置顶', '通知内容', 1, '2014-11-19 16:43:16', '2014-11-19 16:43:41', 1),
	(3, 15, '通知置顶22213', '<p>通知内容啊多发点发<br/></p>', 1, '2014-11-19 16:43:21', '2014-11-27 15:17:31', 1),
	(4, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(5, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(6, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(7, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(8, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(9, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(10, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(11, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(12, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(13, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(14, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(15, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(16, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(17, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(18, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(19, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(20, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(21, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(22, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(23, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(24, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(25, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(26, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(27, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(28, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(29, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(30, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(31, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(32, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(33, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(34, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(35, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(36, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(37, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(38, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(39, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(40, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(41, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(42, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(43, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(44, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(45, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(46, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(47, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(48, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(49, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(50, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(51, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(52, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(53, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(54, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(55, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(56, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(57, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(58, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(59, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(60, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(61, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(62, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(63, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(64, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(65, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(66, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(67, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(68, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(69, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(70, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(71, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(72, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(73, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(74, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(75, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(76, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(77, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(78, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(79, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(80, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(81, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(82, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(83, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(84, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(85, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(86, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(87, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(88, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(89, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(90, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(91, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(92, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(93, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(94, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(95, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(96, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(97, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(98, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(99, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(100, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(101, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(102, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(103, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(104, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(105, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(106, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(107, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(108, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(109, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(110, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(111, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(112, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(113, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(114, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(115, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(116, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(117, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(118, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(119, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(120, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(121, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(122, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(123, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(124, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(125, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(126, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(127, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(128, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(129, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(130, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(131, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(132, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(133, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(134, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(135, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(136, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(137, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(138, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(139, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(140, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(141, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(142, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(143, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(144, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(145, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(146, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(147, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(148, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(149, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(150, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(151, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(152, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(153, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(154, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(155, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(156, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(157, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(158, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(159, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(160, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(161, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(162, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(163, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(164, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(165, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(166, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(167, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(168, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(169, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(170, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(171, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(172, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(173, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(174, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(175, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(176, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(177, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(178, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(179, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(180, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(181, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(182, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(183, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(184, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(185, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(186, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(187, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(188, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(189, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(190, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(191, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(192, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(193, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(194, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(195, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(196, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(197, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(198, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(199, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(200, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(201, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(202, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(203, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(204, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(205, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(206, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(207, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(208, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(209, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(210, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(211, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(212, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(213, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(214, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(215, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(216, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(217, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(218, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(219, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(220, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(221, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(222, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(223, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(224, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(225, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(226, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(227, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(228, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(229, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(230, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(231, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(232, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(233, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(234, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(235, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(236, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(237, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(238, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(239, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(240, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(241, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(242, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(243, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(244, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(245, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(246, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(247, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(248, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(249, 15, '通知标题', '通知内容', 0, NULL, '2014-11-19 16:38:31', 1),
	(250, 2, '卡看到伐就卡了对方啊开始的房间啊是的发', '<p>啊大煞风景卡拉的加法就的发了；阿娇的风；喀什<br/></p>', 0, NULL, '2014-12-04 14:05:25', 1);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;


-- 导出  表 school.categories 结构
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) NOT NULL COMMENT '栏目名',
  `t_id` varchar(50) NOT NULL COMMENT '类型',
  `url` varchar(50) DEFAULT NULL COMMENT 'url',
  `level` int(1) NOT NULL COMMENT '层级',
  `p_id` int(10) NOT NULL COMMENT '父id',
  `default_flag` int(1) NOT NULL DEFAULT '0' COMMENT '是否默认',
  `order_flag` int(1) NOT NULL DEFAULT '9' COMMENT '排序标识',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8 COMMENT='栏目';

-- 正在导出表  school.categories 的数据：~21 rows (大约)
DELETE FROM `categories`;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `name`, `t_id`, `url`, `level`, `p_id`, `default_flag`, `order_flag`) VALUES
	(1, '学院概况', 'article', NULL, 1, 0, 0, 1),
	(2, '新闻公告', 'article', NULL, 1, 0, 0, 2),
	(3, '学科建设', 'article', NULL, 1, 0, 0, 3),
	(4, '教育教学', 'article', NULL, 1, 0, 0, 4),
	(5, '科学研究', 'article', NULL, 1, 0, 0, 5),
	(6, '人才培养', 'article', NULL, 1, 0, 0, 6),
	(7, '学工在线', 'article', NULL, 1, 0, 0, 7),
	(8, '招生就业', 'article', NULL, 1, 0, 0, 8),
	(10, '学院简介', 'page', NULL, 2, 1, 0, 1),
	(11, '学院领导', 'picture', NULL, 2, 1, 0, 2),
	(12, '组织机构', 'article', NULL, 2, 1, 0, 3),
	(13, '学院委员会', 'article', NULL, 2, 1, 0, 4),
	(14, '历史沿革', 'article', NULL, 2, 1, 0, 5),
	(15, '通知公告', 'article', NULL, 2, 2, 0, 1),
	(16, '学术讲座', 'article', NULL, 2, 2, 0, 2),
	(17, '学院新闻', 'article', NULL, 2, 2, 0, 3),
	(18, '信息公告', 'article', NULL, 2, 2, 0, 4),
	(19, '学科专业', 'article', NULL, 2, 3, 0, 1),
	(20, '重点学科', 'article', NULL, 2, 3, 0, 2),
	(21, '学科平台', 'article', NULL, 2, 3, 0, 3),
	(222, '个人中心', 'article', 'admin.jspx', 1, 0, 0, 9);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;


-- 导出  表 school.class 结构
DROP TABLE IF EXISTS `class`;
CREATE TABLE IF NOT EXISTS `class` (
  `id` varchar(50) NOT NULL COMMENT 'id',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `path` varchar(50) DEFAULT NULL,
  `p_id` varchar(50) DEFAULT NULL COMMENT '父节点',
  `order_flag` int(2) NOT NULL COMMENT '排序标识',
  `leaf` int(1) DEFAULT NULL,
  `level` int(1) DEFAULT NULL COMMENT '层级',
  `del_flag` int(1) DEFAULT '1' COMMENT '停用标识（1：可用，0：停用）',
  `r_id` int(10) DEFAULT NULL COMMENT '房间id',
  `charge` int(10) DEFAULT NULL COMMENT '班主任',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='班级表';

-- 正在导出表  school.class 的数据：~15 rows (大约)
DELETE FROM `class`;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` (`id`, `name`, `path`, `p_id`, `order_flag`, `leaf`, `level`, `del_flag`, `r_id`, `charge`) VALUES
	('c1', '小学部', '/root/c1', 'root', 1, 0, 1, 1, NULL, NULL),
	('c2', '初中部', '/root/c2', 'root', 2, 0, 1, 1, NULL, NULL),
	('C2014121103211114', '一年六班', '/root/c1/c4/C2014121103211114', 'c4', 6, 1, 3, 1, 1, NULL),
	('C201412110322057', '六年级', '/root/c1/C201412110322057', 'c1', 6, 0, 2, 1, NULL, NULL),
	('C20141211122016503', '二年级', '/root/c1/C20141211122016503', 'c1', 2, 0, 2, 1, NULL, NULL),
	('C20141211122037123', '三年级', '/root/c1/C20141211122037123', 'c1', 3, 0, 2, 1, NULL, NULL),
	('C20141211122418812', '四年级', '/root/c1/C20141211122418812', 'c1', 4, 0, 2, 1, NULL, NULL),
	('C20141211122446714', '五年级', '/root/c1/C20141211122446714', 'c1', 5, 0, 2, 1, NULL, NULL),
	('C2014121112374358', '一年三班', '/root/c1/c4/C2014121112374358', 'c4', 3, 1, 3, 1, 3, 27),
	('C20141211123957996', '一年四班', '/root/c1/c4/C20141211123957996', 'c4', 4, 1, 3, 1, 1, NULL),
	('C20141211124235322', '一年五班', '/root/c1/c4/C20141211124235322', 'c4', 5, 1, 3, 1, 1, NULL),
	('c3', '高中部', '/root/c3', 'root', 3, 0, 1, 0, NULL, NULL),
	('c4', '一年级', '/root/c1/c4', 'c1', 1, 0, 2, 1, NULL, NULL),
	('c5', '一年一班', '/root/c1/c4/c5', 'c4', 1, 1, 3, 1, 1, 13),
	('c6', '一年二班', '/root/c1/c4/c6', 'c4', 2, 1, 3, 1, 2, 14);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;


-- 导出  表 school.course 结构
DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) NOT NULL COMMENT '名称',
  `usable` int(1) NOT NULL DEFAULT '1' COMMENT '是否可用（1可用，0不可用）',
  `code` varchar(50) NOT NULL COMMENT '拼音代码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='科目表';

-- 正在导出表  school.course 的数据：~11 rows (大约)
DELETE FROM `course`;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` (`id`, `name`, `usable`, `code`) VALUES
	(1, '数学', 1, 'shuxue'),
	(2, '语文', 1, 'yuwen'),
	(3, '英语', 1, 'yingyu'),
	(4, '物理', 1, 'wuli'),
	(5, '化学', 1, 'huaxue'),
	(6, '生物', 1, 'shengwu'),
	(7, '地理', 1, 'dili'),
	(8, '历史', 1, 'lishi'),
	(9, '政治', 1, 'zhengzhi'),
	(10, '美术', 1, 'meishu'),
	(11, '体育', 1, 'tiyu');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;


-- 导出  表 school.exam 结构
DROP TABLE IF EXISTS `exam`;
CREATE TABLE IF NOT EXISTS `exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(500) NOT NULL COMMENT '名称',
  `start_time` varchar(50) NOT NULL COMMENT '开始日期',
  `end_time` varchar(50) NOT NULL COMMENT '结束日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT='考试';

-- 正在导出表  school.exam 的数据：~3 rows (大约)
DELETE FROM `exam`;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` (`id`, `name`, `start_time`, `end_time`) VALUES
	(10, '期中考试', '2015-01-06', '2015-01-06'),
	(11, '期末考试', '2015-01-09', '2015-01-10'),
	(12, '一班考试', '2015-01-06', '2015-01-06'),
	(13, '二班考试i', '2015-01-06', '2015-01-06');
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;


-- 导出  表 school.exam_detail 结构
DROP TABLE IF EXISTS `exam_detail`;
CREATE TABLE IF NOT EXISTS `exam_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `e_id` int(11) DEFAULT NULL COMMENT '考试id',
  `course` int(11) DEFAULT NULL COMMENT '科目id',
  `c_ids` varchar(5000) DEFAULT NULL COMMENT '参考班级id',
  `start_time` varchar(50) DEFAULT NULL COMMENT '开考时间',
  `end_time` varchar(50) DEFAULT NULL COMMENT '交卷时间',
  `edit_date` varchar(50) DEFAULT NULL COMMENT '上分截至日期',
  PRIMARY KEY (`id`),
  KEY `FK_exam_detail_exam` (`e_id`),
  CONSTRAINT `FK_exam_detail_exam` FOREIGN KEY (`e_id`) REFERENCES `exam` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='考试明细';

-- 正在导出表  school.exam_detail 的数据：~5 rows (大约)
DELETE FROM `exam_detail`;
/*!40000 ALTER TABLE `exam_detail` DISABLE KEYS */;
INSERT INTO `exam_detail` (`id`, `e_id`, `course`, `c_ids`, `start_time`, `end_time`, `edit_date`) VALUES
	(15, 10, 1, 'c5,c6', '2015-01-06 00:00:00', '2015-01-06 00:00:00', '2015-01-11'),
	(16, 10, 2, 'c5,c6,C2014121112374358', '2015-01-06 00:00:00', '2015-01-06 00:00:00', '2015-01-11'),
	(17, 10, 3, 'c5,c6', '2015-01-06 00:00:00', '2015-01-07 00:00:00', '2015-01-11'),
	(18, 11, 1, 'c5,c6', '2015-01-09 00:00:00', '2015-01-09 00:00:00', '2015-01-11'),
	(19, 11, 3, 'c5,c6', '2015-01-10 00:00:00', '2015-01-10 00:00:00', '2015-01-11'),
	(20, 12, 1, 'c5', '2015-01-06 00:00:00', '2015-01-06 00:00:00', '2015-01-11'),
	(21, 13, 2, 'c6', '2015-01-06 00:00:00', '2015-01-06 00:00:00', '2015-01-11'),
	(22, 13, 1, 'c6', '2015-01-06 00:00:00', '2015-01-06 00:00:00', '2015-01-11');
/*!40000 ALTER TABLE `exam_detail` ENABLE KEYS */;


-- 导出  表 school.functions 结构
DROP TABLE IF EXISTS `functions`;
CREATE TABLE IF NOT EXISTS `functions` (
  `ID` varchar(50) NOT NULL,
  `FIELDS` varchar(500) DEFAULT NULL,
  `TABLE` varchar(500) DEFAULT NULL,
  `COLUMNS` varchar(500) DEFAULT NULL,
  `RELATIONS` varchar(500) DEFAULT NULL,
  `GROUP` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统功能点';

-- 正在导出表  school.functions 的数据：~66 rows (大约)
DELETE FROM `functions`;
/*!40000 ALTER TABLE `functions` DISABLE KEYS */;
INSERT INTO `functions` (`ID`, `FIELDS`, `TABLE`, `COLUMNS`, `RELATIONS`, `GROUP`) VALUES
	('f10101', '[{name:\'u.name\',condition:\'%like%\',param:\'u_name\'},{name:\'r.name\',condition:\'%like%\',param:\'r_name\'}]', 'user u,role r', 'u.*,group_concat(r.name) role_name', 'u.del_flag = 1 and u.role_id=r.id', 'u.id'),
	('f10102', 'name,loginname,role_id,role_name', 'user', 'name,loginname,role_id,role_name', NULL, NULL),
	('f10103', 'name,loginname,role_id,role_name', 'user', 'id', NULL, NULL),
	('f10104', NULL, 'user', NULL, NULL, NULL),
	('f10201', '[{name:\'name\',condition:\'%like%\'}]', 'role', '*', NULL, NULL),
	('f10202', 'name,authority,authority_name,authority_path', 'role', 'name,authority,authority_name,authority_path', NULL, NULL),
	('f10203', 'name,authority,authority_name,authority_path', 'role', 'id', NULL, NULL),
	('f10204', NULL, 'role', NULL, NULL, NULL),
	('f20101', '[{name:\'p_id\',condition:\'=\',param:\'node\'}]', 'categories', '*', NULL, NULL),
	('f20102', 'name,url,t_id,p_id,level,order_flag', 'categories', 'name,url,t_id,p_id,level,order_flag', NULL, NULL),
	('f20103', 'name,url,order_flag', 'categories', 'id', NULL, NULL),
	('f20104', NULL, 'categories', NULL, NULL, NULL),
	('f20201', NULL, 'page p,categories c', 'p.*,c.name c_name', 'c.id=p.c_id', NULL),
	('f20202', 'c_id,content,u_id', 'page', 'c_id,content,u_id', NULL, NULL),
	('f20203', 'content,u_id', 'page', 'id', NULL, NULL),
	('f20204', NULL, 'page', NULL, NULL, NULL),
	('f20301', '[{name:\'a.title\',condition:\'%like%\',param:\'title\'},{name:\'c.name\',condition:\'%like%\',param:\'name\'}]', 'article a,categories c', 'a.*,c.name c_name', 'a.c_id=c.id', NULL),
	('f20302', 'c_id,title,content,u_id', 'article', 'c_id,title,content,u_id', NULL, NULL),
	('f20303', 'c_id,title,content,u_id', 'article', 'id', NULL, NULL),
	('f20304', NULL, 'article', NULL, NULL, NULL),
	('f20401', '[{name:\'a.title\',condition:\'%like%\',param:\'title\'},{name:\'c.name\',condition:\'%like%\',param:\'name\'}]', 'picture a,categories c', 'a.*,c.name c_name', 'a.c_id=c.id', NULL),
	('f20402', 'c_id,title,content,u_id,pic', 'picture', 'c_id,title,content,u_id,pic', NULL, NULL),
	('f20403', 'c_id,title,content,u_id,pic', 'picture', 'id', NULL, NULL),
	('f20404', NULL, 'picture', NULL, NULL, NULL),
	('f30101', NULL, 'course', '*', NULL, NULL),
	('f30102', 'name', 'course', 'name', NULL, NULL),
	('f30103', 'name', 'course', 'id', NULL, NULL),
	('f30104', 'usable', 'course', 'id', NULL, NULL),
	('f30201', '[{name:\'name\',condition:\'%like%\',param:\'name\'},{name:\'type\',condition:\'=\',param:\'type\'}]', 'room', '*', NULL, NULL),
	('f30202', 'name,type,amount', 'room', 'name,type,amount', NULL, NULL),
	('f30203', 'name,type,amount', 'room', 'id', NULL, NULL),
	('f30204', NULL, 'room', NULL, NULL, NULL),
	('f30301', 'name,p_id,order_flag,level,r_id,id,path,leaf,charge', 'class', 'name,p_id,order_flag,level,r_id,id,path,leaf,charge', NULL, NULL),
	('f30302', 'name,order_flag,r_id,charge', 'class', 'id', NULL, NULL),
	('f30303', 'del_flag', 'class', 'id', NULL, NULL),
	('f30401', '[{name:\'s.name\',condition:\'%like%\',param:\'name\'},{name:\'c.name\',condition:\'%like%\',param:\'c_name\'}]', 'schedules s,class c', 's.*,c.name c_name', 's.c_id=c.id', NULL),
	('f30404', NULL, 'schedules', NULL, NULL, NULL),
	('f30501', '[{name:\'name\',condition:\'%like%\',param:\'name\'}]', 'exam', '*', NULL, NULL),
	('f30502', 'name,start_time,end_time', 'exam', 'name,start_time,end_time', NULL, NULL),
	('f30503', 'name,start_time,end_time', 'exam', 'id', NULL, NULL),
	('f30504', NULL, 'exam', NULL, NULL, NULL),
	('f30601', '[{name:\'s.ed_id\',condition:\'=\',param:\'ed_id\'},{name:\'st.c_id\',condition:\'=\',param:\'c_id\'},{name:\'st.name\',condition:\'%like%\',param:\'s_name\'},{name:\'st.number\',condition:\'%like%\',param:\'s_number\'}]', 'score s,student st,exam_detail ed,class c', 's.*,st.name s_name,ed.edit_date,st.number,c.name c_name', 's.s_id=st.id and ed.id=s.ed_id and st.c_id=c.id', NULL),
	('f30602', 'score', 'score', 'id', NULL, NULL),
	('f40101', '[{name:\'t.ischarge\',condition:\'=\',param:\'is_charge\'}]', 'teacher t left join class c on find_in_set(c.id,t.c_ids),course', 't.*,GROUP_CONCAT(c.name) c_names,GROUP_CONCAT(c.path) c_paths,course.name course_name', 'course.id=t.course', 't.id'),
	('f40201', '[{name:\'s.number\',condition:\'%like%\',param:\'number\'},{name:\'s.name\',condition:\'%like%\',param:\'name\'}]', 'student s left join class c on s.c_id =c.id', 's.*,c.name c_name,c.path c_path', '', NULL),
	('f50101', '[{name:\'cl.charge\',condition:\'=\',param:\'id\'}]', 'schedules_detail shd,schedules s,class cl,course c', 'shd.*,c.name c_name', 's.c_id=cl.id and shd.s_id=s.id and c.id=shd.c_id', NULL),
	('f50201', '[{name:\'c.charge\',condition:\'=\',param:\'id\'},{name:\'s.name\',condition:\'%like%\',param:\'name\'},{name:\'s.number\',condition:\'%like%\',param:\'number\'}]', 'student s,class c,user u', 's.*,c.name c_name,u.id parent_id', 's.c_id=c.id and concat(\'jz_\',s.number)=u.loginname', NULL),
	('f60101', '[{name:\'t.id\',condition:\'=\',param:\'id\'}]', 'teacher t,class cl,schedules sch,schedules_detail schd', 'schd.*,cl.name c_name', 'find_in_set(cl.id,t.c_ids) and sch.c_id = cl.id and schd.s_id=sch.id and schd.c_id=t.course', NULL),
	('f60201', '[{name:\'t.id\',condition:\'=\',param:\'id\'},{name:\'s.name\',condition:\'%like%\',param:\'name\'},{name:\'s.number\',condition:\'%like%\',param:\'number\'}]', 'student s,class c,teacher t,user u', 's.*,c.name c_name,u.id parent_id', 'find_in_set(c.id,t.c_ids) and s.c_id=c.id and concat(\'jz_\',s.number)=u.loginname', NULL),
	('f60301', '[{name:\'h.t_id\',condition:\'=\',param:\'id\'},{name:\'h.date\',condition:\'%like%\',param:\'date\'},{name:\'c.name\',condition:\'%like%\',param:\'c_name\'}]', 'homework h,class c', 'h.*,group_concat(c.name) c_names', 'find_in_set(c.id,h.c_ids)', 'h.id'),
	('f60302', 'date,content,c_ids,t_id', 'homework', 'date,content,c_ids,t_id', NULL, NULL),
	('f60303', 'date,content,c_ids', 'homework', 'id', NULL, NULL),
	('f60304', NULL, 'homework', NULL, NULL, NULL),
	('f60401', '[{name:\'s.ed_id\',condition:\'=\',param:\'ed_id\'},{name:\'st.c_id\',condition:\'=\',param:\'c_id\'},{name:\'st.name\',condition:\'%like%\',param:\'s_name\'},{name:\'st.number\',condition:\'%like%\',param:\'s_number\'}]', 'score s,student st,exam_detail ed,class c', 's.*,st.name s_name,ed.edit_date,st.number,c.name c_name', 's.s_id=st.id and ed.id=s.ed_id and st.c_id=c.id', NULL),
	('f60402', 'score', 'score', 'id', NULL, NULL),
	('f70101', '[{name:\'s.number\',condition:\'=\',param:\'number\'}]', 'student s left join class c on s.c_id =c.id', 's.*,c.name c_name,c.path c_path', NULL, NULL),
	('f70201', '[{name:\'st.number\',condition:\'=\',param:\'number\'}]', 'schedules s,schedules_detail schd,student st,course c', 'schd.*,c.name c_name', 'st.c_id=s.c_id and schd.s_id=s.id and c.id=schd.c_id', NULL),
	('f70301', '[{name:\'s.number\',condition:\'=\',param:\'number\'},{name:\'h.date\',condition:\'%like%\',param:\'date\'},{name:\'c.name\',condition:\'%like%\',param:\'course_name\'}]', 'homework h,student s,teacher t,course c', 'h.*,c.name course_name', 'find_in_set(s.c_id,h.c_ids) and h.t_id=t.id and c.id=t.course', NULL),
	('f70401', '[{name:\'s.number\',condition:\'=\',param:\'number\'}]', 'exam e,exam_detail ed,student s', 'distinct(e.id),e.name \'text\',1  leaf', 'find_in_set(s.c_id,ed.c_ids) and e.id=ed.e_id', NULL),
	('f70402', '[{name:\'st.number\',condition:\'=\',param:\'number\'},{name:\'ed.e_id\',condition:\'=\',param:\'e_id\'},{name:\'c.name\',condition:\'%like%\',param:\'c_name\'}]', 'exam_detail ed,score s,student st,course c', 'c.name c_name,s.score', 's.ed_id=ed.id and ed.course=c.id and s.s_id=st.id', NULL),
	('f70501', '[{name:\'s.number\',condition:\'=\',param:\'number\'}]', 'teacher t,student s,course c', 't.*,c.name course_name', 'find_in_set(s.c_id,t.c_ids) and c.id=t.course', NULL),
	('f80101', '[{name:\'s.id\',condition:\'=\',param:\'id\'}]', 'student s left join class c on s.c_id =c.id', 's.*,c.name c_name,c.path c_path', NULL, NULL),
	('f80201', '[{name:\'st.id\',condition:\'=\',param:\'id\'}]', 'schedules s,schedules_detail schd,student st,course c', 'schd.*,c.name c_name', 'st.c_id=s.c_id and schd.s_id=s.id and c.id=schd.c_id', NULL),
	('f80301', '[{name:\'s.id\',condition:\'=\',param:\'id\'},{name:\'h.date\',condition:\'%like%\',param:\'date\'},{name:\'c.name\',condition:\'%like%\',param:\'course_name\'}]', 'homework h,student s,teacher t,course c', 'h.*,c.name course_name', 'find_in_set(s.c_id,h.c_ids) and h.t_id=t.id and c.id=t.course', NULL),
	('f80401', '[{name:\'s.id\',condition:\'=\',param:\'id\'}]', 'exam e,exam_detail ed,student s', 'distinct(e.id),e.name \'text\',1  leaf', 'find_in_set(s.c_id,ed.c_ids) and e.id=ed.e_id', NULL),
	('f80402', '[{name:\'st.id\',condition:\'=\',param:\'id\'},{name:\'ed.e_id\',condition:\'=\',param:\'e_id\'},{name:\'c.name\',condition:\'%like%\',param:\'c_name\'}]', 'exam_detail ed,score s,student st,course c', 'c.name c_name,s.score', 's.ed_id=ed.id and ed.course=c.id and s.s_id=st.id', NULL),
	('s00001', '[{name:\'loginname\',condition:\'=\'},{name:\'id\',condition:\'<>\'}]', 'user', '*', NULL, 't.id'),
	('s00002', '[{name:\'t_id\',condition:\'=\',param:\'t_id\'}]', 'categories', '*', NULL, NULL),
	('s00003', '[{name:\'p_id\',condition:\'=\',param:\'node\'}]', 'class', 'id,name text, path,leaf,case when leaf=1 then 0 else null end checked,level', 'del_flag=1', NULL),
	('s00004', '[{name:\'p_id\',condition:\'=\',param:\'node\'}]', 'class', 'id,name text, path,leaf,level', 'del_flag=1', NULL),
	('s00005', '[{name:\'s_id\',condition:\'=\',param:\'s_id\'}]', 'schedules_detail s,course c', 's.*,c.name c_name', 's.c_id=c.id', NULL),
	('s00006', '[{name:\'t.id\',condition:\'=\',param:\'id\'}]', 'class c,teacher t', 'c.id,c.name', 'find_in_set(c.id,t.c_ids)', NULL),
	('s00007', NULL, 'course', '*', 'usable=1', NULL),
	('s10201', NULL, 'role', '*', NULL, NULL),
	('s30201', '[{name:\'name\',condition:\'=\'},{name:\'id\',condition:\'<>\'}]', 'room', '*', NULL, NULL),
	('s30202', '[{name:\'name\',condition:\'%like%\',param:\'name\'},{name:\'type\',condition:\'=\',param:\'type\'}]', 'room', '*', NULL, NULL),
	('s30301', '[{name:\'c.p_id\',condition:\'=\',param:\'node\'}]', 'class c left join room r on r.id=c.r_id left join teacher t on t.id=c.charge', 'c.*,r.name r_name,t.name charge_name', '', NULL),
	('s30502', 'e_id,course,c_ids,start_time,end_time,edit_date', 'exam_detail', 'e_id,course,c_ids,start_time,end_time,edit_date', NULL, NULL),
	('s30503', 'course,c_ids,start_time,end_time,edit_date', 'exam_detail', 'id', NULL, NULL),
	('s30504', NULL, 'exam_detail', NULL, NULL, NULL),
	('s40101', '[{name:\'t.ischarge\',condition:\'=\',param:\'is_charge\'}]', 'teacher t', 't.*', NULL, NULL),
	('s90101', '[{name:\'r.name\',condition:\'%like%\',param:\'r_name\'},{name:\'m.title\',condition:\'%like%\',param:\'title\'},{name:\'m.read_status\',condition:\'=\',param:\'read_status\'},{name:\'m.date\',condition:\'>=\',param:\'from\'},{name:\'m.date\',condition:\'<=\',param:\'to\'},{name:\'m.sender\',condition:\'=\',param:\'sender\'},{name:\'m.receiver\',condition:\'=\',param:\'receiver\'},{name:\'m.send_del\',condition:\'=\',param:\'send_del\'},{name:\'m.receive_del\',condition:\'=\',param:\'receive_del\'}]', 'message m,user r,user s', 'm.*,r.name receiver_name,s.name sender_name', 'm.sender = s.id and m.receiver = r.id', NULL),
	('s90102', 'read_status,read_time', 'message', 'id', NULL, NULL),
	('s90103', 'receiver,send_time,title,content,sender,date', 'message', 'receiver,send_time,title,content,sender,date', NULL, NULL);
/*!40000 ALTER TABLE `functions` ENABLE KEYS */;


-- 导出  表 school.homework 结构
DROP TABLE IF EXISTS `homework`;
CREATE TABLE IF NOT EXISTS `homework` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `date` varchar(50) DEFAULT NULL COMMENT '日期',
  `c_ids` varchar(5000) DEFAULT NULL COMMENT '班级',
  `content` longtext COMMENT '内容',
  `t_id` varchar(50) DEFAULT NULL COMMENT '教师id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='作业表';

-- 正在导出表  school.homework 的数据：~2 rows (大约)
DELETE FROM `homework`;
/*!40000 ALTER TABLE `homework` DISABLE KEYS */;
INSERT INTO `homework` (`id`, `date`, `c_ids`, `content`, `t_id`) VALUES
	(1, '2014-12-30', 'c5', 'neirong ', '2'),
	(2, '2014-12-31', 'c5,c6', 'neirong', '2');
/*!40000 ALTER TABLE `homework` ENABLE KEYS */;


-- 导出  表 school.menu 结构
DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` varchar(50) NOT NULL,
  `text` varchar(50) DEFAULT NULL,
  `iconCls` varchar(50) DEFAULT NULL,
  `leaf` varchar(50) DEFAULT NULL,
  `controller` varchar(500) DEFAULT NULL,
  `parent_id` varchar(50) DEFAULT NULL,
  `index` varchar(50) DEFAULT NULL,
  `config` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='菜单';

-- 正在导出表  school.menu 的数据：~39 rows (大约)
DELETE FROM `menu`;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`id`, `text`, `iconCls`, `leaf`, `controller`, `parent_id`, `index`, `config`) VALUES
	('m001', '系统管理', 'system_manage', 'false', NULL, 'root', '1', NULL),
	('m002', '文章系统', 'real_estate', 'false', NULL, 'root', '2', NULL),
	('m003', '教务管理', 'real_estate', 'false', NULL, 'root', '3', NULL),
	('m004', '人员管理', 'real_estate', 'false', NULL, 'root', '4', NULL),
	('m005', '班主任菜单', 'real_estate', 'false', NULL, 'root', '5', NULL),
	('m006', '教师菜单', 'real_estate', 'false', NULL, 'root', '6', NULL),
	('m007', '家长菜单', 'real_estate', 'false', NULL, 'root', '7', NULL),
	('m008', '学生菜单', 'real_estate', 'false', NULL, 'root', '8', NULL),
	('m009', '我的邮箱', 'real_estate', 'false', NULL, 'root', '9', NULL),
	('m101', '用户管理', 'user_manage', 'true', 'moudle.QueryMoudle', 'm001', '1', '{requires:[\'manage.controller.User\'],queryForm:\'manage.view.user.QueryForm\',queryGrid:\'manage.view.user.Grid\',controller:\'User\'}'),
	('m102', '角色管理', 'application', 'true', 'moudle.QueryMoudle', 'm001', '2', '{requires:[\'manage.controller.Role\'],queryForm:\'manage.view.role.QueryForm\',queryGrid:\'manage.view.role.Grid\',controller:\'Role\'}'),
	('m201', '菜单管理', 'building', 'true', 'moudle.GridMoudle', 'm002', '1', '{requires:[\'manage.controller.Categories\'],grid:\'manage.view.categories.Grid\',controller:\'Categories\'}'),
	('m202', '单页管理', 'room', 'true', 'moudle.QueryMoudle', 'm002', '2', '{requires:[\'manage.controller.Page\'],queryForm:\'manage.view.page.QueryForm\',queryGrid:\'manage.view.page.Grid\',controller:\'Page\'}'),
	('m203', '文章管理', 'parking', 'true', 'moudle.QueryMoudle', 'm002', '3', '{requires:[\'manage.controller.Article\'],queryForm:\'manage.view.article.QueryForm\',queryGrid:\'manage.view.article.Grid\',controller:\'Article\'}'),
	('m204', '图文管理', 'parking', 'true', 'moudle.QueryMoudle', 'm002', '4', '{requires:[\'manage.controller.Picture\'],queryForm:\'manage.view.picture.QueryForm\',queryGrid:\'manage.view.picture.Grid\',controller:\'Picture\'}'),
	('m301', '科目管理', 'parking', 'true', 'moudle.GridMoudle', 'm003', '1', '{requires:[\'manage.controller.Course\'],grid:\'manage.view.course.Grid\',controller:\'Course\'}'),
	('m302', '房间管理', 'parking', 'true', 'moudle.QueryMoudle', 'm003', '2', '{requires:[\'manage.controller.Room\'],queryForm:\'manage.view.room.QueryForm\',queryGrid:\'manage.view.room.Grid\',controller:\'Room\'}'),
	('m303', '班级管理', 'parking', 'true', 'moudle.GridMoudle', 'm003', '3', '{requires:[\'manage.controller.Class\'],grid:\'manage.view.class.Grid\',controller:\'Class\'}'),
	('m304', '课表管理', 'parking', 'true', 'moudle.QueryMoudle', 'm003', '4', '{requires:[\'manage.controller.Schedules\'],queryForm:\'manage.view.schedules.QueryForm\',queryGrid:\'manage.view.schedules.Grid\',controller:\'Schedules\'}'),
	('m305', '考试管理', 'parking', 'true', 'moudle.QueryMoudle', 'm003', '5', '{requires:[\'manage.controller.Exam\'],queryForm:\'manage.view.exam.QueryForm\',queryGrid:\'manage.view.exam.Grid\',controller:\'Exam\'}'),
	('m306', '成绩管理', 'parking', 'true', 'moudle.BorderMoudle', 'm003', '6', '{requires:[\'manage.controller.Score\'],items:[\'manage.view.score.Menu\',\'manage.view.score.Panel\'],controller:\'Score\'}'),
	('m401', '教师管理', 'parking', 'true', 'moudle.QueryMoudle', 'm004', '1', '{requires:[\'manage.controller.Teacher\'],queryForm:\'manage.view.teacher.QueryForm\',queryGrid:\'manage.view.teacher.Grid\',controller:\'Teacher\'}'),
	('m402', '学生管理', 'parking', 'true', 'moudle.QueryMoudle', 'm004', '2', '{requires:[\'manage.controller.Student\'],queryForm:\'manage.view.student.QueryForm\',queryGrid:\'manage.view.student.Grid\',controller:\'Student\'}'),
	('m501', '班级课表', 'parking', 'true', 'moudle.BorderMoudle', 'm005', '1', '{requires:[\'manage.controller.HeadTeacher\'],items:[\'manage.view.headteacher.SchedulesForm\'],controller:\'HeadTeacher\'}'),
	('m502', '学生信息', 'parking', 'true', 'moudle.QueryMoudle', 'm005', '2', '{requires:[\'manage.controller.HeadTeacher\'],queryForm:\'manage.view.headteacher.StudentQueryForm\',queryGrid:\'manage.view.headteacher.StudentGrid\',controller:\'HeadTeacher\'}'),
	('m503', '班级成绩', 'parking', 'true', 'moudle.BorderMoudle', 'm005', '3', '{requires:[\'manage.controller.HeadTeacher\'],items:[\'manage.view.headteacher.ScoreMenu\',\'manage.view.headteacher.ScorePanel\'],controller:\'HeadTeacher\'}'),
	('m601', '我的课表', 'parking', 'true', 'moudle.BorderMoudle', 'm006', '1', '{requires:[\'manage.controller.CourseTeacher\'],items:[\'manage.view.schedules.TeacherSchedules\'],controller:\'CourseTeacher\'}'),
	('m602', '学生信息', 'parking', 'true', 'moudle.QueryMoudle', 'm006', '2', '{requires:[\'manage.controller.CourseTeacher\'],queryForm:\'manage.view.courseteacher.StudentQueryForm\',queryGrid:\'manage.view.courseteacher.StudentGrid\',controller:\'CourseTeacher\'}'),
	('m603', '作业管理', 'parking', 'true', 'moudle.QueryMoudle', 'm006', '3', '{requires:[\'manage.controller.CourseTeacher\'],queryForm:\'manage.view.courseteacher.HomeworkQueryForm\',queryGrid:\'manage.view.courseteacher.HomeworkGrid\',controller:\'CourseTeacher\'}'),
	('m604', '成绩管理', 'parking', 'true', 'moudle.BorderMoudle', 'm006', '4', '{requires:[\'manage.controller.CourseTeacher\'],items:[\'manage.view.courseteacher.ScoreMenu\',\'manage.view.courseteacher.ScorePanel\'],controller:\'CourseTeacher\'}'),
	('m701', '学生信息', 'parking', 'true', 'moudle.BorderMoudle', 'm007', '1', '{requires:[\'manage.controller.Parent\'],items:[\'manage.view.parent.StudentForm\'],controller:\'Parent\'}'),
	('m702', '学生课表', 'parking', 'true', 'moudle.BorderMoudle', 'm007', '2', '{requires:[\'manage.controller.Parent\'],items:[\'manage.view.parent.SchedulesForm\'],controller:\'Parent\'}'),
	('m703', '学生作业', 'parking', 'true', 'moudle.QueryMoudle', 'm007', '3', '{requires:[\'manage.controller.Parent\'],queryForm:\'manage.view.parent.HomeworkQueryForm\',queryGrid:\'manage.view.parent.HomeworkGrid\',controller:\'Parent\'}'),
	('m704', '学生成绩', 'parking', 'true', 'moudle.BorderMoudle', 'm007', '4', '{requires:[\'manage.controller.Parent\'],items:[\'manage.view.parent.ScoreMenu\',\'manage.view.parent.ScorePanel\'],controller:\'Parent\'}'),
	('m705', '老师信息', 'parking', 'true', 'moudle.BorderMoudle', 'm007', '5', '{requires:[\'manage.controller.Parent\'],items:[\'manage.view.parent.TeacherGrid\'],controller:\'Parent\'}'),
	('m801', '个人信息', 'parking', 'true', 'moudle.BorderMoudle', 'm008', '1', '{requires:[\'manage.controller.Pupil\'],items:[\'manage.view.pupil.StudentForm\'],controller:\'Pupil\'}'),
	('m802', '我的课表', 'parking', 'true', 'moudle.BorderMoudle', 'm008', '2', '{requires:[\'manage.controller.Pupil\'],items:[\'manage.view.pupil.SchedulesForm\'],controller:\'Pupil\'}'),
	('m803', '我的作业', 'parking', 'true', 'moudle.QueryMoudle', 'm008', '3', '{requires:[\'manage.controller.Pupil\'],queryForm:\'manage.view.pupil.HomeworkQueryForm\',queryGrid:\'manage.view.pupil.HomeworkGrid\',controller:\'Pupil\'}'),
	('m804', '我的成绩', 'parking', 'true', 'moudle.BorderMoudle', 'm008', '4', '{requires:[\'manage.controller.Pupil\'],items:[\'manage.view.pupil.ScoreMenu\',\'manage.view.pupil.ScorePanel\'],controller:\'Pupil\'}'),
	('m901', '发件箱', 'parking', 'true', 'moudle.QueryMoudle', 'm009', '1', '{requires:[\'manage.controller.SendMessage\'],queryForm:\'manage.view.message.SendMessageQueryForm\',queryGrid:\'manage.view.message.SendMessageGrid\',controller:\'SendMessage\'}'),
	('m902', '收件箱', 'parking', 'true', 'moudle.QueryMoudle', 'm009', '2', '{requires:[\'manage.controller.ReceiveMessage\'],queryForm:\'manage.view.message.ReceiveMessageQueryForm\',queryGrid:\'manage.view.message.ReceiveMessageGrid\',controller:\'ReceiveMessage\'}');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;


-- 导出  表 school.message 结构
DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `title` varchar(500) NOT NULL COMMENT '标题',
  `content` longtext NOT NULL COMMENT '内容',
  `sender` varchar(50) NOT NULL COMMENT '发送人',
  `receiver` varchar(50) NOT NULL COMMENT '接受人',
  `read_status` varchar(10) NOT NULL DEFAULT '未读' COMMENT '读取状态',
  `read_time` varchar(20) DEFAULT NULL COMMENT '读取时间',
  `send_del` int(11) NOT NULL DEFAULT '1' COMMENT '发送方删除',
  `receive_del` int(11) NOT NULL DEFAULT '1' COMMENT '接收方删除',
  `send_time` varchar(50) NOT NULL COMMENT '发送时间',
  `date` varchar(50) NOT NULL COMMENT '发送日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='站内信';

-- 正在导出表  school.message 的数据：~6 rows (大约)
DELETE FROM `message`;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` (`id`, `title`, `content`, `sender`, `receiver`, `read_status`, `read_time`, `send_del`, `receive_del`, `send_time`, `date`) VALUES
	(1, '阿脸谈恋爱', '你家阿脸在学校谈恋爱', '2', '10', '未读', NULL, 1, 1, '2015-01-01 16:39:00', ''),
	(2, '回复：阿脸谈恋爱', '你给我打他', '10', '2', '已读', '2015-01-05 16:16:40', 1, 1, '2015-01-01 16:45:00', ''),
	(3, '回复：回复：阿脸谈恋爱', '我会打死他<br>', '2', '10', '未读', NULL, 1, 1, '2015-01-05 16:16:39', '2015-01-05'),
	(4, '给阿脸家长的一封信', '你儿子太二了，赶紧领回去吧<br>', '2', '10', '未读', NULL, 1, 1, '2015-01-05 16:29:24', '2015-01-05'),
	(5, '快把阿脸领回去吧', '管不了了<br>', '3', '10', '未读', NULL, 1, 1, '2015-01-05 17:11:22', '2015-01-05'),
	(6, '标题', '加啊来看大家发<br>', '3', '10', '未读', NULL, 1, 1, '2015-01-05 17:13:48', '2015-01-05'),
	(7, '我是阿脸的家长', '你掐死他了没有？<br>', '10', '2', '未读', NULL, 1, 1, '2015-01-06 18:52:24', '2015-01-06');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;


-- 导出  表 school.page 结构
DROP TABLE IF EXISTS `page`;
CREATE TABLE IF NOT EXISTS `page` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `c_id` int(10) NOT NULL COMMENT '栏目id',
  `content` longtext COMMENT '内容',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `u_id` int(10) NOT NULL COMMENT '更新人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `c_id` (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='单页表';

-- 正在导出表  school.page 的数据：~0 rows (大约)
DELETE FROM `page`;
/*!40000 ALTER TABLE `page` DISABLE KEYS */;
INSERT INTO `page` (`id`, `c_id`, `content`, `time`, `u_id`) VALUES
	(1, 10, '<p><span style="font-family: 宋体,SimSun; font-size: 24px; color: rgb(255, 0, 0);">学院简介</span><img src="http://api.map.baidu.com/staticimage?center=116.404,39.915&zoom=10&width=530&height=340&markers=116.404,39.915" height="340" width="530"/></p>', '2014-11-27 14:24:56', 1);
/*!40000 ALTER TABLE `page` ENABLE KEYS */;


-- 导出  表 school.parent 结构
DROP TABLE IF EXISTS `parent`;
CREATE TABLE IF NOT EXISTS `parent` (
  `id` int(10) NOT NULL COMMENT 'id',
  `s_id` int(10) NOT NULL COMMENT '学生id',
  `phone` varchar(500) DEFAULT NULL COMMENT '联系电话',
  `address` varchar(500) DEFAULT NULL COMMENT '家庭地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='家长';

-- 正在导出表  school.parent 的数据：~0 rows (大约)
DELETE FROM `parent`;
/*!40000 ALTER TABLE `parent` DISABLE KEYS */;
/*!40000 ALTER TABLE `parent` ENABLE KEYS */;


-- 导出  表 school.picture 结构
DROP TABLE IF EXISTS `picture`;
CREATE TABLE IF NOT EXISTS `picture` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `c_id` int(10) NOT NULL COMMENT '栏目id',
  `pic` varchar(100) NOT NULL COMMENT '图片地址',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `content` longtext COMMENT '内容',
  `stickie` int(11) NOT NULL DEFAULT '0' COMMENT '是否置顶',
  `stickie_time` timestamp NULL DEFAULT NULL COMMENT '置顶时间',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `u_id` varchar(50) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='图片';

-- 正在导出表  school.picture 的数据：~7 rows (大约)
DELETE FROM `picture`;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
INSERT INTO `picture` (`id`, `c_id`, `pic`, `title`, `content`, `stickie`, `stickie_time`, `time`, `u_id`) VALUES
	(1, 11, 'resources/images/test/picture.jpg', '缘梦彩云支教团土木学院支教队云南昭通支教', '\n<p style="line-height:200%;">\n	&nbsp;<span style="font-size:14pt;"><span style="font-family:宋体;">由东南大学缘梦彩云支教团、土木工程学院团委共同开展的2014</span>年暑期缘梦彩云支教活动于 2014<span style="font-size:14pt;">年7</span>月18</span>日<span style="font-size:14pt;">至8</span>月5日在云南省昭通市彝良县举行。</p>\n<p style="line-height:200%;text-indent:28pt;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">本次支教活动共有三个支队，第一支队12</span>人，由土木学院学生9</span>名13级学生及3名12级学生组成，支教地为云南省昭通市彝良县奎乡仙马小学；第二支队是混合编队，12人来自不同学院，以13级同学为主，支教地为云南省昭通市彝良县奎乡吉塘小学；第三支队也是混合编队，但11人以高年级为主，他们在云南省昭通市彝良县洛泽河镇笋叶小学开展支教活动。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 7月18</span></span>日，三支支教队乘坐三十多小时的火车来到昭通彝良县。在此之前，支教团的同学们已经在学校做了充分的准备工作，有专门的支教培训和支教课件制作，同学们很快适应了当地的生活。当地的学校条件依旧十分艰苦，除了每天的工作室和宿舍条件非常简陋外，一天三顿的饭菜都需要队员们自己大锅生火、洗菜烧菜。其中四五天的一次赶集，队员们能采集到的食材自然也十分有限，当地的主要食材洋芋（马铃薯）也就成了大家的主要菜品。奋斗后得到的果实总是甜美的，对于很多第一次接触纯粹农村生活的同学而言，每一顿饭下来，碗筷间都洋溢着他们品尝自己劳动果实的喜悦，每一晚拖着疲惫身体回板房就寝，脸上却也淌着幸福的微笑。</p>\n<p style="line-height:200%;">\n	&nbsp;&nbsp; <span style="font-size:14pt;"><span style="font-family:宋体;">在当地学校主管老师的帮助下，很快就有一批已经进入假期的学生来学校上课。仙马小学有120</span>名学生返校，吉塘小学有320</span>名同学返校，笋叶小学也有110名同学返校。大家为学生分配好年级、班级，各任课老师开始自己紧锣密鼓的排课和授课阶段。在支教活动中，同学们带给当地学生基础知识的补充，让他们接触到了历史、环境卫生、美术等平日不常见到的课程，更重要的是在这个过程中，他们体会到的外面世界的精彩，在他们心中种下了希望的种子和催生了前进的动力。师生间的欢声笑语充盈着校园的每一个角落。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 8月3</span></span>日下午3时30分，就在支教工作的尾声阶段，云南省昭通市鲁甸县发生了里氏6.5<span style="font-size:14pt;"><span style="font-family:宋体;">级的地震，本次地震发生在昭通市的山区地带，震源深度较浅，灾害程度较高。正在支教的队员们离震中也很近，明显感觉到了大地的晃动。大家很快通过各个途径及时了解地震的准确消息。支教队员们支教行动完成结束后，大家临时决定在当地进行志愿救助工作。心系灾区人民，整个中国都在为灾区加油。身在灾区的各位支教队员，更有义务为当地的灾区人民进行力所能及的救助。大家募集善款到捐款点进行捐款外，一部分队员把随身带着的睡袋也送给了灾区的人民。队员们都希望通过自己的努力，为这几天的灾区救助贡献一份力量，以这种特殊的方式，结束支教工作离开昭通。对于我们这些大学生而言意义非凡。很多队员也表示，这次支教活动以及灾区救助活动提升了自己的人生意义。</span></span></p>\n\n', 0, NULL, '2014-11-19 23:05:41', '1'),
	(2, 11, 'resources/images/test/picture.jpg', '缘梦彩云支教团土木学院支教队云南昭通支教', '\n<p style="line-height:200%;">\n	&nbsp;<span style="font-size:14pt;"><span style="font-family:宋体;">由东南大学缘梦彩云支教团、土木工程学院团委共同开展的2014</span>年暑期缘梦彩云支教活动于 2014<span style="font-size:14pt;">年7</span>月18</span>日<span style="font-size:14pt;">至8</span>月5日在云南省昭通市彝良县举行。</p>\n<p style="line-height:200%;text-indent:28pt;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">本次支教活动共有三个支队，第一支队12</span>人，由土木学院学生9</span>名13级学生及3名12级学生组成，支教地为云南省昭通市彝良县奎乡仙马小学；第二支队是混合编队，12人来自不同学院，以13级同学为主，支教地为云南省昭通市彝良县奎乡吉塘小学；第三支队也是混合编队，但11人以高年级为主，他们在云南省昭通市彝良县洛泽河镇笋叶小学开展支教活动。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 7月18</span></span>日，三支支教队乘坐三十多小时的火车来到昭通彝良县。在此之前，支教团的同学们已经在学校做了充分的准备工作，有专门的支教培训和支教课件制作，同学们很快适应了当地的生活。当地的学校条件依旧十分艰苦，除了每天的工作室和宿舍条件非常简陋外，一天三顿的饭菜都需要队员们自己大锅生火、洗菜烧菜。其中四五天的一次赶集，队员们能采集到的食材自然也十分有限，当地的主要食材洋芋（马铃薯）也就成了大家的主要菜品。奋斗后得到的果实总是甜美的，对于很多第一次接触纯粹农村生活的同学而言，每一顿饭下来，碗筷间都洋溢着他们品尝自己劳动果实的喜悦，每一晚拖着疲惫身体回板房就寝，脸上却也淌着幸福的微笑。</p>\n<p style="line-height:200%;">\n	&nbsp;&nbsp; <span style="font-size:14pt;"><span style="font-family:宋体;">在当地学校主管老师的帮助下，很快就有一批已经进入假期的学生来学校上课。仙马小学有120</span>名学生返校，吉塘小学有320</span>名同学返校，笋叶小学也有110名同学返校。大家为学生分配好年级、班级，各任课老师开始自己紧锣密鼓的排课和授课阶段。在支教活动中，同学们带给当地学生基础知识的补充，让他们接触到了历史、环境卫生、美术等平日不常见到的课程，更重要的是在这个过程中，他们体会到的外面世界的精彩，在他们心中种下了希望的种子和催生了前进的动力。师生间的欢声笑语充盈着校园的每一个角落。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 8月3</span></span>日下午3时30分，就在支教工作的尾声阶段，云南省昭通市鲁甸县发生了里氏6.5<span style="font-size:14pt;"><span style="font-family:宋体;">级的地震，本次地震发生在昭通市的山区地带，震源深度较浅，灾害程度较高。正在支教的队员们离震中也很近，明显感觉到了大地的晃动。大家很快通过各个途径及时了解地震的准确消息。支教队员们支教行动完成结束后，大家临时决定在当地进行志愿救助工作。心系灾区人民，整个中国都在为灾区加油。身在灾区的各位支教队员，更有义务为当地的灾区人民进行力所能及的救助。大家募集善款到捐款点进行捐款外，一部分队员把随身带着的睡袋也送给了灾区的人民。队员们都希望通过自己的努力，为这几天的灾区救助贡献一份力量，以这种特殊的方式，结束支教工作离开昭通。对于我们这些大学生而言意义非凡。很多队员也表示，这次支教活动以及灾区救助活动提升了自己的人生意义。</span></span></p>\n\n', 0, NULL, '2014-11-19 23:05:41', '1'),
	(3, 11, 'resources/images/test/picture.jpg', '缘梦彩云支教团土木学院支教队云南昭通支教', '\n<p style="line-height:200%;">\n	&nbsp;<span style="font-size:14pt;"><span style="font-family:宋体;">由东南大学缘梦彩云支教团、土木工程学院团委共同开展的2014</span>年暑期缘梦彩云支教活动于 2014<span style="font-size:14pt;">年7</span>月18</span>日<span style="font-size:14pt;">至8</span>月5日在云南省昭通市彝良县举行。</p>\n<p style="line-height:200%;text-indent:28pt;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">本次支教活动共有三个支队，第一支队12</span>人，由土木学院学生9</span>名13级学生及3名12级学生组成，支教地为云南省昭通市彝良县奎乡仙马小学；第二支队是混合编队，12人来自不同学院，以13级同学为主，支教地为云南省昭通市彝良县奎乡吉塘小学；第三支队也是混合编队，但11人以高年级为主，他们在云南省昭通市彝良县洛泽河镇笋叶小学开展支教活动。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 7月18</span></span>日，三支支教队乘坐三十多小时的火车来到昭通彝良县。在此之前，支教团的同学们已经在学校做了充分的准备工作，有专门的支教培训和支教课件制作，同学们很快适应了当地的生活。当地的学校条件依旧十分艰苦，除了每天的工作室和宿舍条件非常简陋外，一天三顿的饭菜都需要队员们自己大锅生火、洗菜烧菜。其中四五天的一次赶集，队员们能采集到的食材自然也十分有限，当地的主要食材洋芋（马铃薯）也就成了大家的主要菜品。奋斗后得到的果实总是甜美的，对于很多第一次接触纯粹农村生活的同学而言，每一顿饭下来，碗筷间都洋溢着他们品尝自己劳动果实的喜悦，每一晚拖着疲惫身体回板房就寝，脸上却也淌着幸福的微笑。</p>\n<p style="line-height:200%;">\n	&nbsp;&nbsp; <span style="font-size:14pt;"><span style="font-family:宋体;">在当地学校主管老师的帮助下，很快就有一批已经进入假期的学生来学校上课。仙马小学有120</span>名学生返校，吉塘小学有320</span>名同学返校，笋叶小学也有110名同学返校。大家为学生分配好年级、班级，各任课老师开始自己紧锣密鼓的排课和授课阶段。在支教活动中，同学们带给当地学生基础知识的补充，让他们接触到了历史、环境卫生、美术等平日不常见到的课程，更重要的是在这个过程中，他们体会到的外面世界的精彩，在他们心中种下了希望的种子和催生了前进的动力。师生间的欢声笑语充盈着校园的每一个角落。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 8月3</span></span>日下午3时30分，就在支教工作的尾声阶段，云南省昭通市鲁甸县发生了里氏6.5<span style="font-size:14pt;"><span style="font-family:宋体;">级的地震，本次地震发生在昭通市的山区地带，震源深度较浅，灾害程度较高。正在支教的队员们离震中也很近，明显感觉到了大地的晃动。大家很快通过各个途径及时了解地震的准确消息。支教队员们支教行动完成结束后，大家临时决定在当地进行志愿救助工作。心系灾区人民，整个中国都在为灾区加油。身在灾区的各位支教队员，更有义务为当地的灾区人民进行力所能及的救助。大家募集善款到捐款点进行捐款外，一部分队员把随身带着的睡袋也送给了灾区的人民。队员们都希望通过自己的努力，为这几天的灾区救助贡献一份力量，以这种特殊的方式，结束支教工作离开昭通。对于我们这些大学生而言意义非凡。很多队员也表示，这次支教活动以及灾区救助活动提升了自己的人生意义。</span></span></p>\n\n', 0, NULL, '2014-11-19 23:05:41', '1'),
	(4, 11, 'resources/images/test/picture.jpg', '缘梦彩云支教团土木学院支教队云南昭通支教', '\n<p style="line-height:200%;">\n	&nbsp;<span style="font-size:14pt;"><span style="font-family:宋体;">由东南大学缘梦彩云支教团、土木工程学院团委共同开展的2014</span>年暑期缘梦彩云支教活动于 2014<span style="font-size:14pt;">年7</span>月18</span>日<span style="font-size:14pt;">至8</span>月5日在云南省昭通市彝良县举行。</p>\n<p style="line-height:200%;text-indent:28pt;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">本次支教活动共有三个支队，第一支队12</span>人，由土木学院学生9</span>名13级学生及3名12级学生组成，支教地为云南省昭通市彝良县奎乡仙马小学；第二支队是混合编队，12人来自不同学院，以13级同学为主，支教地为云南省昭通市彝良县奎乡吉塘小学；第三支队也是混合编队，但11人以高年级为主，他们在云南省昭通市彝良县洛泽河镇笋叶小学开展支教活动。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 7月18</span></span>日，三支支教队乘坐三十多小时的火车来到昭通彝良县。在此之前，支教团的同学们已经在学校做了充分的准备工作，有专门的支教培训和支教课件制作，同学们很快适应了当地的生活。当地的学校条件依旧十分艰苦，除了每天的工作室和宿舍条件非常简陋外，一天三顿的饭菜都需要队员们自己大锅生火、洗菜烧菜。其中四五天的一次赶集，队员们能采集到的食材自然也十分有限，当地的主要食材洋芋（马铃薯）也就成了大家的主要菜品。奋斗后得到的果实总是甜美的，对于很多第一次接触纯粹农村生活的同学而言，每一顿饭下来，碗筷间都洋溢着他们品尝自己劳动果实的喜悦，每一晚拖着疲惫身体回板房就寝，脸上却也淌着幸福的微笑。</p>\n<p style="line-height:200%;">\n	&nbsp;&nbsp; <span style="font-size:14pt;"><span style="font-family:宋体;">在当地学校主管老师的帮助下，很快就有一批已经进入假期的学生来学校上课。仙马小学有120</span>名学生返校，吉塘小学有320</span>名同学返校，笋叶小学也有110名同学返校。大家为学生分配好年级、班级，各任课老师开始自己紧锣密鼓的排课和授课阶段。在支教活动中，同学们带给当地学生基础知识的补充，让他们接触到了历史、环境卫生、美术等平日不常见到的课程，更重要的是在这个过程中，他们体会到的外面世界的精彩，在他们心中种下了希望的种子和催生了前进的动力。师生间的欢声笑语充盈着校园的每一个角落。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 8月3</span></span>日下午3时30分，就在支教工作的尾声阶段，云南省昭通市鲁甸县发生了里氏6.5<span style="font-size:14pt;"><span style="font-family:宋体;">级的地震，本次地震发生在昭通市的山区地带，震源深度较浅，灾害程度较高。正在支教的队员们离震中也很近，明显感觉到了大地的晃动。大家很快通过各个途径及时了解地震的准确消息。支教队员们支教行动完成结束后，大家临时决定在当地进行志愿救助工作。心系灾区人民，整个中国都在为灾区加油。身在灾区的各位支教队员，更有义务为当地的灾区人民进行力所能及的救助。大家募集善款到捐款点进行捐款外，一部分队员把随身带着的睡袋也送给了灾区的人民。队员们都希望通过自己的努力，为这几天的灾区救助贡献一份力量，以这种特殊的方式，结束支教工作离开昭通。对于我们这些大学生而言意义非凡。很多队员也表示，这次支教活动以及灾区救助活动提升了自己的人生意义。</span></span></p>\n\n', 0, NULL, '2014-11-19 23:05:41', '1'),
	(5, 11, 'resources/images/test/picture.jpg', '缘梦彩云支教团土木学院支教队云南昭通支教', '\n<p style="line-height:200%;">\n	&nbsp;<span style="font-size:14pt;"><span style="font-family:宋体;">由东南大学缘梦彩云支教团、土木工程学院团委共同开展的2014</span>年暑期缘梦彩云支教活动于 2014<span style="font-size:14pt;">年7</span>月18</span>日<span style="font-size:14pt;">至8</span>月5日在云南省昭通市彝良县举行。</p>\n<p style="line-height:200%;text-indent:28pt;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">本次支教活动共有三个支队，第一支队12</span>人，由土木学院学生9</span>名13级学生及3名12级学生组成，支教地为云南省昭通市彝良县奎乡仙马小学；第二支队是混合编队，12人来自不同学院，以13级同学为主，支教地为云南省昭通市彝良县奎乡吉塘小学；第三支队也是混合编队，但11人以高年级为主，他们在云南省昭通市彝良县洛泽河镇笋叶小学开展支教活动。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 7月18</span></span>日，三支支教队乘坐三十多小时的火车来到昭通彝良县。在此之前，支教团的同学们已经在学校做了充分的准备工作，有专门的支教培训和支教课件制作，同学们很快适应了当地的生活。当地的学校条件依旧十分艰苦，除了每天的工作室和宿舍条件非常简陋外，一天三顿的饭菜都需要队员们自己大锅生火、洗菜烧菜。其中四五天的一次赶集，队员们能采集到的食材自然也十分有限，当地的主要食材洋芋（马铃薯）也就成了大家的主要菜品。奋斗后得到的果实总是甜美的，对于很多第一次接触纯粹农村生活的同学而言，每一顿饭下来，碗筷间都洋溢着他们品尝自己劳动果实的喜悦，每一晚拖着疲惫身体回板房就寝，脸上却也淌着幸福的微笑。</p>\n<p style="line-height:200%;">\n	&nbsp;&nbsp; <span style="font-size:14pt;"><span style="font-family:宋体;">在当地学校主管老师的帮助下，很快就有一批已经进入假期的学生来学校上课。仙马小学有120</span>名学生返校，吉塘小学有320</span>名同学返校，笋叶小学也有110名同学返校。大家为学生分配好年级、班级，各任课老师开始自己紧锣密鼓的排课和授课阶段。在支教活动中，同学们带给当地学生基础知识的补充，让他们接触到了历史、环境卫生、美术等平日不常见到的课程，更重要的是在这个过程中，他们体会到的外面世界的精彩，在他们心中种下了希望的种子和催生了前进的动力。师生间的欢声笑语充盈着校园的每一个角落。</p>\n<p style="line-height:200%;">\n	<span style="font-size:14pt;"><span style="font-family:宋体;">&nbsp;&nbsp; 8月3</span></span>日下午3时30分，就在支教工作的尾声阶段，云南省昭通市鲁甸县发生了里氏6.5<span style="font-size:14pt;"><span style="font-family:宋体;">级的地震，本次地震发生在昭通市的山区地带，震源深度较浅，灾害程度较高。正在支教的队员们离震中也很近，明显感觉到了大地的晃动。大家很快通过各个途径及时了解地震的准确消息。支教队员们支教行动完成结束后，大家临时决定在当地进行志愿救助工作。心系灾区人民，整个中国都在为灾区加油。身在灾区的各位支教队员，更有义务为当地的灾区人民进行力所能及的救助。大家募集善款到捐款点进行捐款外，一部分队员把随身带着的睡袋也送给了灾区的人民。队员们都希望通过自己的努力，为这几天的灾区救助贡献一份力量，以这种特殊的方式，结束支教工作离开昭通。对于我们这些大学生而言意义非凡。很多队员也表示，这次支教活动以及灾区救助活动提升了自己的人生意义。</span></span></p>\n\n', 0, NULL, '2014-11-19 23:05:41', '1'),
	(6, 11, 'upload/images/1417671428076.png', '21413', '<p>adfadfafadfaf<br/></p>', 0, NULL, '2014-12-04 13:38:30', '1'),
	(7, 11, 'upload/images/1417673156800.png', '啊打发是否', '<p>啊打发肯德基分厘卡就的法可就的三发啊<br/></p>', 0, NULL, '2014-12-04 14:06:01', '1');
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;


-- 导出  表 school.role 结构
DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `authority` varchar(1000) DEFAULT NULL COMMENT '权限id',
  `authority_name` varchar(5000) DEFAULT NULL COMMENT '权限名称',
  `authority_path` varchar(5000) DEFAULT NULL COMMENT '权限路径',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '权限类型',
  `del_flag` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='角色';

-- 正在导出表  school.role 的数据：~5 rows (大约)
DELETE FROM `role`;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` (`id`, `name`, `authority`, `authority_name`, `authority_path`, `type`, `del_flag`) VALUES
	(1, '系统管理员', 'm001,m101,b10101,b10102,b10103,b10104,b10105,m102,b10201,b10202,b10203,b10204,b10205,m002,m201,b20101,b20102,b20103,b20104,b20105,m202,b20201,b20202,b20203,b20204,b20205,m203,b20301,b20302,b20303,b20304,b20305,m204,b20401,b20402,b20403,b20404,b20405,m003,m301,b30101,b30102,b30103,b30104,m302,b30201,b30202,b30203,b30204,b30205,m303,b30301,b30302,b30303,m304,b30401,b30402,b30403,b30404,b30405,m305,b30501,b30502,b30503,b30504,b30505,m306,b30601,b30602,m004,m401,b40101,b40102,b40103,b40105,m402,b40201,b40202,b40203,b40204,b40205', '系统管理,用户管理,查询用户,增加用户,修改用户,删除用户,查看用户详情,角色管理,查询角色,增加角色,修改角色,删除角色,查看角色详情,文章系统,菜单管理,查询菜单,增加菜单,修改菜单,删除菜单,查看详细信息,单页管理,查询单页,新增单页,修改单页,删除单页,查看单页详情,文章管理,查询文章,新增文章,修改文章,删除文章,查看文章详情,图文管理,查询图文,新增图文,修改图文,删除图文,查看图文详情,教务管理,科目管理,增加科目,增加科目,修改科目,停用/启用科目,房间管理,查询房间,增加房间,修改房间,删除房间,查看房间详情,班级管理,增加班级,修改班级,停用/启用班级,课表管理,查询课表,增加课表,修改课表,删除课表,查看课表详情,考试管理,查询考试,增加考试,修改考试,删除考试,查看考试详情,成绩管理,修改成绩,上传成绩,人员管理,教师管理,查询教师,增加教师,修改教师,查看教师详情,学生管理,查询学生,增加学生,修改学生,删除学生,查看学生详情', '/root/m001,/root/m001/m101,/root/m001/m101/b10101,/root/m001/m101/b10102,/root/m001/m101/b10103,/root/m001/m101/b10104,/root/m001/m101/b10105,/root/m001/m102,/root/m001/m102/b10201,/root/m001/m102/b10202,/root/m001/m102/b10203,/root/m001/m102/b10204,/root/m001/m102/b10205,/root/m002,/root/m002/m201,/root/m002/m201/b20101,/root/m002/m201/b20102,/root/m002/m201/b20103,/root/m002/m201/b20104,/root/m002/m201/b20105,/root/m002/m202,/root/m002/m202/b20201,/root/m002/m202/b20202,/root/m002/m202/b20203,/root/m002/m202/b20204,/root/m002/m202/b20205,/root/m002/m203,/root/m002/m203/b20301,/root/m002/m203/b20302,/root/m002/m203/b20303,/root/m002/m203/b20304,/root/m002/m203/b20305,/root/m002/m204,/root/m002/m204/b20401,/root/m002/m204/b20402,/root/m002/m204/b20403,/root/m002/m204/b20404,/root/m002/m204/b20405,/root/m003/m301,/root/m003/m301/b30101,/root/m003/m301/b30102,/root/m003/m301/b30103,/root/m003/m301/b30104,/root/m003/m302,/root/m003/m302/b30201,/root/m003/m302/b30202,/root/m003/m302/b30203,/root/m003/m302/b30204,/root/m003/m302/b30205,/root/m003/m303,/root/m003/m303/b30301,/root/m003/m303/b30302,/root/m003/m303/b30303,/root/m003/m304,/root/m003/m304/b30401,/root/m003/m304/b30402,/root/m003/m304/b30403,/root/m003/m304/b30404,/root/m003/m304/b30405,/root/m003/m305,/root/m003/m305/b30501,/root/m003/m305/b30502,/root/m003/m305/b30503,/root/m003/m305/b30504,/root/m003/m305/b30505,/root/m003/m306,/root/m003/m306/b30601,/root/m003/m306/b30602,/root/m004,/root/m004/m401,/root/m004/m401/b40101,/root/m004/m401/b40102,/root/m004/m401/b40103,/root/m004/m401/b40105,/root/m004/m402,/root/m004/m402/b40201,/root/m004/m402/b40202,/root/m004/m402/b40203,/root/m004/m402/b40204,/root/m004/m402/b40205', 1, 1),
	(2, '班主任', 'm005,m501,b50101,m502,b50201,m503,m009,m901,m902', '', '', 1, 1),
	(3, '教师', 'm006,m601,b60101,m602,b60201,b60202,m603,b60301,b60302,b60303,b60304,b60305,m604,b60401,b60402,m009,m901,m902', '教师菜单,我的课表,刷新课表,学生信息,查询学生信息,查看学生详情,作业管理,成绩管理,', NULL, 1, 1),
	(4, '学生', 'm008,m801,b80101,m802,b80201,m803,b80301,m804,b80401,b80402', NULL, NULL, 1, 1),
	(5, '家长', 'm007,m701,b70101,m702,b70201,m703,b70301,m704,b70401,b70402,m705,b70501,m009,m901,m902', NULL, NULL, 1, 1);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;


-- 导出  表 school.room 结构
DROP TABLE IF EXISTS `room`;
CREATE TABLE IF NOT EXISTS `room` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `type` int(1) NOT NULL COMMENT '类型（1：教室，2：办公室）',
  `amount` int(10) NOT NULL DEFAULT '0' COMMENT '容纳人数',
  `name` varchar(50) NOT NULL COMMENT '房间名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='房间';

-- 正在导出表  school.room 的数据：~3 rows (大约)
DELETE FROM `room`;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` (`id`, `type`, `amount`, `name`) VALUES
	(1, 1, 80, '教学楼201'),
	(2, 1, 50, '教学楼202'),
	(3, 1, 80, '教学楼203');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;


-- 导出  表 school.schedules 结构
DROP TABLE IF EXISTS `schedules`;
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) NOT NULL COMMENT '名称',
  `c_id` varchar(50) NOT NULL COMMENT '班级id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='课程表';

-- 正在导出表  school.schedules 的数据：~3 rows (大约)
DELETE FROM `schedules`;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` (`id`, `name`, `c_id`) VALUES
	(4, '2014-2015学年上学期一年二班课程表', 'c6'),
	(7, '2014-2041', 'c5'),
	(8, '省分公司', 'C2014121112374358');
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;


-- 导出  表 school.schedules_detail 结构
DROP TABLE IF EXISTS `schedules_detail`;
CREATE TABLE IF NOT EXISTS `schedules_detail` (
  `s_id` int(10) NOT NULL COMMENT '课表id',
  `c_id` int(10) NOT NULL COMMENT '课程id',
  `type` varchar(50) NOT NULL COMMENT '第几节课',
  KEY `FK_schedules_detail_schedules` (`s_id`),
  CONSTRAINT `FK_schedules_detail_schedules` FOREIGN KEY (`s_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='课表明细';

-- 正在导出表  school.schedules_detail 的数据：~28 rows (大约)
DELETE FROM `schedules_detail`;
/*!40000 ALTER TABLE `schedules_detail` DISABLE KEYS */;
INSERT INTO `schedules_detail` (`s_id`, `c_id`, `type`) VALUES
	(4, 3, 'c00'),
	(4, 2, 'c11'),
	(4, 6, 'c23'),
	(4, 11, 'c31'),
	(4, 11, 'c32'),
	(4, 1, 'c33'),
	(4, 11, 'c34'),
	(4, 11, 'c36'),
	(4, 1, 'c42'),
	(7, 1, 'c00'),
	(7, 1, 'c01'),
	(7, 1, 'c02'),
	(7, 1, 'c10'),
	(7, 1, 'c11'),
	(7, 5, 'c14'),
	(7, 2, 'c20'),
	(7, 7, 'c21'),
	(7, 6, 'c30'),
	(7, 8, 'c31'),
	(7, 6, 'c40'),
	(7, 8, 'c41'),
	(7, 3, 'c42'),
	(7, 6, 'c50'),
	(8, 3, 'c00'),
	(8, 7, 'c10'),
	(8, 7, 'c21'),
	(8, 1, 'c34'),
	(8, 5, 'c42');
/*!40000 ALTER TABLE `schedules_detail` ENABLE KEYS */;


-- 导出  表 school.score 结构
DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `ed_id` int(11) NOT NULL COMMENT '考试科目id',
  `s_id` int(11) NOT NULL COMMENT '学生id',
  `score` varchar(50) DEFAULT NULL COMMENT '分数',
  PRIMARY KEY (`id`),
  KEY `FK_score_exam_detail` (`ed_id`),
  CONSTRAINT `FK_score_exam_detail` FOREIGN KEY (`ed_id`) REFERENCES `exam_detail` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8 COMMENT='成绩表';

-- 正在导出表  school.score 的数据：~2 rows (大约)
DELETE FROM `score`;
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
INSERT INTO `score` (`id`, `ed_id`, `s_id`, `score`) VALUES
	(61, 15, 11, NULL),
	(62, 15, 21, NULL),
	(63, 15, 17, NULL),
	(64, 15, 19, NULL),
	(65, 15, 9, NULL),
	(66, 15, 15, NULL),
	(68, 16, 11, NULL),
	(69, 16, 21, NULL),
	(70, 16, 25, NULL),
	(71, 16, 17, NULL),
	(72, 16, 23, NULL),
	(73, 16, 19, NULL),
	(74, 16, 9, NULL),
	(75, 16, 15, NULL),
	(83, 17, 11, NULL),
	(84, 17, 21, NULL),
	(85, 17, 17, NULL),
	(86, 17, 19, NULL),
	(87, 17, 9, NULL),
	(88, 17, 15, NULL),
	(90, 18, 11, NULL),
	(91, 18, 21, NULL),
	(92, 18, 17, NULL),
	(93, 18, 19, NULL),
	(94, 18, 9, NULL),
	(95, 18, 15, NULL),
	(97, 19, 11, NULL),
	(98, 19, 21, NULL),
	(99, 19, 17, NULL),
	(100, 19, 19, NULL),
	(101, 19, 9, NULL),
	(102, 19, 15, NULL),
	(104, 20, 11, NULL),
	(105, 20, 17, NULL),
	(106, 20, 15, NULL),
	(107, 21, 21, NULL),
	(108, 21, 19, NULL),
	(109, 21, 9, NULL),
	(110, 22, 9, NULL),
	(111, 22, 19, NULL),
	(112, 22, 21, NULL);
/*!40000 ALTER TABLE `score` ENABLE KEYS */;


-- 导出  表 school.student 结构
DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `id` int(10) NOT NULL COMMENT 'id',
  `number` varchar(50) NOT NULL COMMENT '学号',
  `name` varchar(50) NOT NULL COMMENT '姓名',
  `sex` int(1) DEFAULT NULL COMMENT '性别',
  `race` varchar(50) DEFAULT NULL COMMENT '民族',
  `address` varchar(500) DEFAULT NULL COMMENT '地址',
  `c_id` varchar(50) DEFAULT NULL COMMENT '班级',
  `birthday` varchar(11) DEFAULT NULL COMMENT '出生日期',
  `enter_date` varchar(50) DEFAULT NULL COMMENT '入学时间',
  `pic` varchar(50) DEFAULT NULL COMMENT '照片',
  `father_name` varchar(50) DEFAULT NULL COMMENT '父亲姓名',
  `father_phone` varchar(50) DEFAULT NULL COMMENT '父亲电话',
  `father_company` varchar(500) DEFAULT NULL COMMENT '父亲单位',
  `mother_name` varchar(50) DEFAULT NULL COMMENT '母亲姓名',
  `mother_company` varchar(500) DEFAULT NULL COMMENT '母亲单位',
  `mother_phone` varchar(50) DEFAULT NULL COMMENT '母亲电话',
  UNIQUE KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='学生表';

-- 正在导出表  school.student 的数据：~3 rows (大约)
DELETE FROM `student`;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`id`, `number`, `name`, `sex`, `race`, `address`, `c_id`, `birthday`, `enter_date`, `pic`, `father_name`, `father_phone`, `father_company`, `mother_name`, `mother_company`, `mother_phone`) VALUES
	(11, '111111111111', '111111111', 0, '11111111', '111111111111111', 'c5', '2014-12-02', NULL, '', '', '', '', '', '', ''),
	(21, '1123123', '学生4', 0, '阿道夫', 'asdf ', 'c6', '2015-01-07', NULL, '', '', '', '', '', '', ''),
	(25, '1231244', '学生6', 1, '啊', '啊', 'C2014121112374358', '2015-01-06', NULL, '', '', '', '', '', '', ''),
	(17, '123144', '学生2', 0, '阿德', '阿三', 'c5', '2015-01-06', NULL, '', '', '', '', '', '', ''),
	(23, '1234512', '学生5', 0, '啊', '阿三', 'C2014121112374358', '2015-01-06', NULL, '', '', '', '', '', '', ''),
	(19, '2334523', '学生3', 0, '啊', '阿三', 'c6', '2015-01-06', NULL, '', '', '', '', '', '', ''),
	(9, '56789', '阿脸', 0, '汉', '阿脸', 'c6', '2014-12-25', NULL, 'upload/images/1419486116510.jpg', '', '', '', '', '', ''),
	(15, '6786789', '学生1', 0, '汉', '阿迪仨', 'c5', '2015-01-07', NULL, '', '', '', '', '', '', '');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;


-- 导出  表 school.teacher 结构
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `id` int(10) NOT NULL COMMENT 'id',
  `number` varchar(50) NOT NULL COMMENT '工号',
  `name` varchar(50) NOT NULL COMMENT '姓名',
  `sex` int(1) NOT NULL COMMENT '性别',
  `race` varchar(50) NOT NULL COMMENT '民族',
  `course` int(10) NOT NULL COMMENT '科目',
  `c_ids` varchar(500) DEFAULT NULL COMMENT '所教班级id',
  `birthday` varchar(50) NOT NULL COMMENT '出生日期',
  `phone` varchar(20) DEFAULT NULL COMMENT '联系电话',
  `pic` varchar(50) DEFAULT NULL COMMENT '照片',
  `party` varchar(50) DEFAULT NULL COMMENT '政治面貌',
  `ischarge` int(1) NOT NULL DEFAULT '0' COMMENT '是否为班主任',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '是否在职'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='教师表';

-- 正在导出表  school.teacher 的数据：~0 rows (大约)
DELETE FROM `teacher`;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` (`id`, `number`, `name`, `sex`, `race`, `course`, `c_ids`, `birthday`, `phone`, `pic`, `party`, `ischarge`, `status`) VALUES
	(2, '0002', '隔壁老王', 1, '汉', 1, 'c6', '2014-12-04', '123456', '', '团员', 0, 1),
	(3, '0003', '章老师', 1, '汉', 1, 'c5', '2014-12-04', '123456', '', '团员', 0, 1),
	(13, 'js1234', '张三', 0, '汉', 3, 'c5', '2015-01-06', '1317789', '', '121', 1, 1),
	(14, 'js1235', '李四', 1, '汉', 3, 'c6', '2015-01-06', '123', '', '12312', 1, 1),
	(27, 'js1236', '王五', 0, '啊', 2, 'C2014121112374358', '2015-01-06', '1', '', '啊', 1, 1),
	(28, 'js1237', '孙六', 0, '啊', 2, 'c5,c6', '2015-01-06', '啊', '', '1 ', 0, 1);
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;


-- 导出  表 school.user 结构
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `loginname` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL DEFAULT 'E10ADC3949BA59ABBE56E057F20F883E' COMMENT '密码',
  `name` varchar(50) DEFAULT NULL COMMENT '用户姓名',
  `role_id` varchar(50) NOT NULL COMMENT '角色id',
  `del_flag` int(11) NOT NULL DEFAULT '1' COMMENT '停用标识（1：未停，0：停用）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COMMENT='用户';

-- 正在导出表  school.user 的数据：~6 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `loginname`, `password`, `name`, `role_id`, `del_flag`) VALUES
	(1, 'super', 'E10ADC3949BA59ABBE56E057F20F883E', '超级管理员', '1', 1),
	(2, '0002', 'E10ADC3949BA59ABBE56E057F20F883E', '隔壁老王', '3', 1),
	(3, '0003', 'E10ADC3949BA59ABBE56E057F20F883E', '章老师', '3', 1),
	(9, '56789', 'E10ADC3949BA59ABBE56E057F20F883E', '阿脸', '4', 1),
	(10, 'jz_56789', 'E10ADC3949BA59ABBE56E057F20F883E', '阿脸家长', '5', 1),
	(11, '111111111111', 'E10ADC3949BA59ABBE56E057F20F883E', '111111111', '4', 1),
	(12, 'jz_111111111111', 'E10ADC3949BA59ABBE56E057F20F883E', '111111111家长', '5', 1),
	(13, 'js1234', 'E10ADC3949BA59ABBE56E057F20F883E', '张三', '2,3', 1),
	(14, 'js1235', 'E10ADC3949BA59ABBE56E057F20F883E', '李四', '2,3', 1),
	(15, '6786789', 'E10ADC3949BA59ABBE56E057F20F883E', '学生1', '4', 1),
	(16, 'jz_6786789', 'E10ADC3949BA59ABBE56E057F20F883E', '学生1家长', '5', 1),
	(17, '123144', 'E10ADC3949BA59ABBE56E057F20F883E', '学生2', '4', 1),
	(18, 'jz_123144', 'E10ADC3949BA59ABBE56E057F20F883E', '学生2家长', '5', 1),
	(19, '2334523', 'E10ADC3949BA59ABBE56E057F20F883E', '学生3', '4', 1),
	(20, 'jz_2334523', 'E10ADC3949BA59ABBE56E057F20F883E', '学生3家长', '5', 1),
	(21, '1123123', 'E10ADC3949BA59ABBE56E057F20F883E', '学生4', '4', 1),
	(22, 'jz_1123123', 'E10ADC3949BA59ABBE56E057F20F883E', '学生4家长', '5', 1),
	(23, '1234512', 'E10ADC3949BA59ABBE56E057F20F883E', '学生5', '4', 1),
	(24, 'jz_1234512', 'E10ADC3949BA59ABBE56E057F20F883E', '学生5家长', '5', 1),
	(25, '1231244', 'E10ADC3949BA59ABBE56E057F20F883E', '学生6', '4', 1),
	(26, 'jz_1231244', 'E10ADC3949BA59ABBE56E057F20F883E', '学生6家长', '5', 1),
	(27, 'js1236', 'E10ADC3949BA59ABBE56E057F20F883E', '王五', '2,3', 1),
	(28, 'js1237', 'E10ADC3949BA59ABBE56E057F20F883E', '孙六', '3', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
