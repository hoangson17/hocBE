-- thêm sửa xóa 
-- 1. them : insert into
USE backend_01;
INSERT INTO `users`(`name`,`email`,`password`)
VALUES ("user2","user2@gmai.com","123456"),
("user3","user3@gmai.com","123456");


-- 2. sua : UPDATE SET (phai co dieu kien : WHERE)
USE backend_01;
UPDATE `users` SET `name` = 'user 1 - update', `status`= 0
WHERE `id` = 1;

-- 3.xoa : delete from (phai co dieu kien :where)
USE backend_01;
DELETE FROM `users` WHERE `id` = 1;


-- function
USE backend_01;
INSERT INTO `users`(`name`,`email`,`password`)
VALUES ("user1","user1@gmai.com",PASSWORD('123456'));

USE backend_01;
INSERT INTO `users`(`name`,`email`,`password`)
VALUES ("user2","user2@gmai.com",PASSWORD('123456'));

USE backend_01;
INSERT INTO `users`(`name`,`email`,`password`,`created_at`,`updated_at`)
VALUES ("user6","user6@gmai.com",PASSWORD('123456'),NOW(),null);

-- truy van lay du lieu 
USE backend_01;
SELECT `name` AS `fullname` ,`email`,`status` FROM `users` AS `u`;

USE backend_01;
SELECT * FROM `users` WHERE 
id > 5 AND id <=9;

USE backend_01;
SELECT * FROM `users` WHERE 
id <>8;

USE backend_01;
SELECT * FROM `users` WHERE 
id BETWEEN 6 AND 10;

USE backend_01;
SELECT * FROM `users` WHERE 
`email` LIKE '%user3%';

USE backend_01;
SELECT * FROM `users` WHERE 
`created_at` IS NULL;

USE backend_01;
SELECT * FROM `users` WHERE 
`created_at` IS NOT NULL;

USE backend_01;
SELECT * FROM `users` WHERE 
`id` NOT IN(6,9);

USE backend_01;
SELECT * FROM `users` WHERE 
`id` NOT BETWEEN 6 and 9;

USE backend_01;
SELECT * FROM `users` WHERE 
`status` = 1 AND (`name` LIKE '%user3%' or `email` LIKE '%user3%' );

USE backend_01;
CREATE TABLE `customers` LIKE `users`;

-- sao chep du lieu  tu users sang customer
USE backend_01;
INSERT INTO `customers` SELECT * FROM `users`;

-- bai tap nhan ban ban ghi co id = 11(bo qua created_at va update_at)
USE backend_01;
INSERT INTO `customers`(`name`,`email`,`password`,`status`,`created_at`,`updated_at`)  
(SELECT `name`,`email`,`password`,`status`,NOW(),NOW() FROM `customers` WHERE id = 10);   

-- order by
USE backend_01;
SELECT * FROM `users` ORDER BY id DESC;


-- limit offset
SELECT * FROM `users`
ORDER BY `id` DESC 
LIMIT 2 OFFSET 2;

SELECT * FROM `users`
ORDER BY `id` DESC 
LIMIT 0, 3; -- offser viet truoc 

SELECT * FROM `order_details` GROUP BY `order_id`
