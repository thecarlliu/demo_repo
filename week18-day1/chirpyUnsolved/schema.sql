CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` )

);