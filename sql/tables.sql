CREATE DATABASE IF NOT EXISTS device_db;
CREATE DATABASE IF NOT EXISTS device_db_test;

GRANT ALL PRIVILEGES ON device_db.* TO `user_device`@`%`;
GRANT ALL PRIVILEGES ON device_db_test.* TO `user_device`@`%`;
FLUSH PRIVILEGES;

Use device_db;
DROP TABLE IF EXISTS device;
CREATE TABLE device (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  brand varchar(20) NOT NULL,
  createdAt datetime default now(),
  PRIMARY KEY (id),
  UNIQUE KEY DeviceId_UNIQUE (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

Use device_db_test;
DROP TABLE IF EXISTS device;
CREATE TABLE device (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  brand varchar(20) NOT NULL,
  createdAt datetime default now(),
  PRIMARY KEY (id),
  UNIQUE KEY DeviceId_UNIQUE (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;