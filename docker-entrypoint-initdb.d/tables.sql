CREATE DATABASE IF NOT EXISTS device;
CREATE DATABASE IF NOT EXISTS `device-test`;

Use device;
DROP TABLE IF EXISTS `Device`;
CREATE TABLE `Device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `createdAt` datetime default now(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `DeviceId_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

Use `device-test`;
DROP TABLE IF EXISTS `Device`;
CREATE TABLE `Device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `createdAt` datetime default now(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `DeviceId_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;