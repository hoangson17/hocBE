-- comment trong sql
-- CREATE DATABASE backend_01;
-- DROP DATABASE backend_01;
-- SHOW DATABASES;
use backend_01;
CREATE TABLE users(
	`id` INT,
	`name` VARCHAR(30),
	`email` VARCHAR(100),
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`create_at` TIMESTAMP,
	`update_at` TIMESTAMP	
);

-- xem danh sach bang trong database
USE backend_01;
SHOW TABLES;

-- xem cau truc mot bang trong database
USE backend_01;
DESCRIBE users;

-- xoa bang 
USE backend_01;
DROP TABLE users;

-- them 1 cot moi vao bang
USE backend_01;
ALTER TABLE	`users` ADD `phone` VARCHAR(15) AFTER `email`;

-- xoa cot ra khoi bang
USE backend_01;
ALTER TABLE	`users` DROP COLUMN `phone`;

-- sua cot
USE backend_01;
ALTER TABLE	`users` MODIFY	COLUMN `password` INT;

-- doi ten cot
USE backend_01;
ALTER TABLE	`users` RENAME	COLUMN `name` TO `fullname`;


-- bai 1
DROP TABLE customers;

USE backend_01;
CREATE TABLE customers(
	`id` INT,
	`name` VARCHAR(15),
	`email` VARCHAR(100),
	`password` VARCHAR(100),
	`varfication_at` TIMESTAMP,
	`create_at` TIMESTAMP,
	`update_at` TIMESTAMP
);

USE backend_01;
ALTER TABLE	`customers` ADD `phone` VARCHAR(15) AFTER	`password`;
ALTER TABLE	`customers` ADD `status` TINYINT(1) AFTER	`phone`;


-- sao chep cau truc tu bang cu sang moi
CREATE TABLE `admin` LIKE `customers`;

-- them not null khi tao bang
USE backend_01;
CREATE TABLE users(
	`id` INT NOT NULL ,
	`name` VARCHAR(30) NOT NULL ,
	`email` VARCHAR(100) NOT NULL ,
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`create_at` TIMESTAMP,
	`update_at` TIMESTAMP	
);

-- them not null vao cot da co
USE backend_01;
ALTER TABLE `users` MODIFY COLUMN `password` VARCHAR(100) NOT NULL;


-- them unique khi tao bang
USE backend_01;
CREATE TABLE users(
	`id` INT,
	`name` VARCHAR(30) NOT NULL ,
	`email` VARCHAR(100) NOT NULL ,
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`create_at` TIMESTAMP,
	`update_at` TIMESTAMP,
	CONSTRAINT email_unique UNIQUE(email)
);

-- them unique sau khi da co bang
USE backend_01;
ALTER TABLE `users` ADD CONSTRAINT id_unique UNIQUE(id);

-- xoa unique
USE backend_01;
ALTER TABLE `users` DROP INDEX email_unique;

-- them khoa chinh khi tao bang
USE backend_01;
CREATE TABLE users(
	`id` INT PRIMARY KEY,
	`name` VARCHAR(30) NOT NULL ,
	`email` VARCHAR(100) NOT NULL ,
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`create_at` TIMESTAMP,
	`update_at` TIMESTAMP,
	CONSTRAINT email_unique UNIQUE(email)
);

-- xoa primary key ra khoi table
USE backend_01;
ALTER TABLE `users` DROP PRIMARY KEY;

-- them primary key sau khi cos table
USE backend_01;
ALTER TABLE `users` ADD PRIMARY KEY (id);

