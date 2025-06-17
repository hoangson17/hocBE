-- FUNCTION
-- SUM --> tính tổng
-- AVG --> trung bình cộng
-- COUNT --> đếm số hàng
-- MAX --> lấy giá trị lớn nhất của một cột
-- MIN --> lấy giá trị nhỏ nhất của một cột

SELECT COUNT(*) AS `status_count`,`status` 
FROM `users` 
GROUP BY `status` HAVING `status_count` > 1 ORDER BY `status_count` DESC

-- bài tập 1: hiển thị danh sách user và số lượng đơn hàng từ user
SELECT `users`.*, COUNT(`orders`.`user_id`) AS `tongdon` FROM `users`
LEFT JOIN `orders` ON `users`.`id` = `orders`.user_id GROUP BY `orders`.`user_id`;

-- bai 2: tra ve thong tin user co tong so don hang lon nhat 
SELECT `users`.*, COUNT(`orders`.`user_id`) AS `tongdon` FROM `users`
LEFT JOIN `orders` ON `users`.`id` = `orders`.user_id 
GROUP BY `orders`.`user_id` 
ORDER BY `tongdon` DESC LIMIT 1;


SELECT `users`.*, COUNT(`orders`.`user_id`) AS `tongdon` 
FROM `users`
LEFT JOIN `orders` ON `users`.`id` = `orders`.user_id 
GROUP BY `orders`.`user_id`
HAVING `tongdon` = (
	SELECT MAX(`users_tmp`.`tongdon`) AS `maxtongdon` 
	FROM (
		SELECT `users`.*, COUNT(`orders`.`user_id`) AS `tongdon` FROM `users`
		LEFT JOIN `orders` ON `users`.`id` = `orders`.user_id 
		GROUP BY `orders`.`user_id`
   ) AS `users_tmp`) ORDER BY `orders`.`created_at` desc;



-- bài tập truy vấn trả về danh sách sản phẩn và sắp xếp theo thứ tự giảm dần của số lượng đơn hàng

SELECT `products`.*,sum(`order_details`.quantity) AS `tongdon`  FROM `products` 
LEFT JOIN `order_details` ON `products`.`id` = `order_details`.`product_id` 
JOIN `orders` ON `orders`.id = `order_details`.order_id
WHERE `orders`.`status` = 'completed'
GROUP BY `order_details`.order_id
ORDER BY `tongdon` DESC


-- lấy danh sách orders
SELECT *, (
CASE
	WHEN `status` = 'pending' THEN 1 
	WHEN `status` = 'completed' THEN 2
	ELSE 3
END
) AS `status_orders` FROM `orders`
ORDER BY `status_orders` ASC;


-- trả về danh sách sản phẩm kèm theo số tiền bán được của từng sản phẩm
SELECT `products`.*,SUM(`order_details`.amount) AS `total` FROM `products`
LEFT JOIN `order_details` ON `products`.`id` = `order_details`.`product_id`
GROUP BY `order_details`.`product_id`;


SELECT `products`.*,SUM(`order_details`.amount) AS `total`,`inventory`.`total` AS `gianhap` ,
(
case
	when SUM(`order_details`.amount) > `inventory`.`total` 
		then CONCAT(ROUND(((SUM(`order_details`.amount) - `inventory`.`total`)/`inventory`.`total`)*100),'%')
	ELSE  CONCAT(ROUND(((SUM(`order_details`.amount) - `inventory`.`total`)/`inventory`.`total`)*100),'%')
end 
)AS `chenhlech`
FROM `products`
LEFT JOIN `order_details` ON `products`.`id` = `order_details`.`product_id`
INNER JOIN `inventory` ON `products`.`id`= `inventory`.`product_id`
GROUP BY `order_details`.`product_id`

-- Index
-- Locks
-- Transactions

CREATE INDEX idx_email ON users(email)

SHOW INDEX FROM `users`

SELECT * FROM `users` WHERE email like 'user6@gmail.com';

EXPLAIN SELECT * FROM `users` WHERE email like 'user6@gmail.com';

DROP INDEX idx_email ON `users`;


SELECT `products`.*, SUM(`order_details`.`amount`) FROM `products`
LEFT JOIN `order_details` ON `products`.`id` = `order_details`.`product_id`
GROUP BY `order_details`.`product_id`;


LOCK TABLES `products` WRITE;
-- chỉ section hiện tại đc đọc ghi 
UPDATE `products` SET price = price;

UNLOCK TABLE;

LOCK TABLE `products` READ;
-- tất cả section đc đọc không ai đc ghi
SELECT * FROM `products`;

UNLOCK TABLES;



START TRANSACTION;
-- khóa hàng và lấy số dư
SELECT * FROM `accounts` WHERE id = 1 FOR UPDATE;
-- khóa câu lệnh đó đến khi commit
-- thực hiện trừ tiền
UPDATE `accounts` SET balance = balance - 50 WHERE id = 1;

-- xác nhận giao dịch
COMMIT;

-- kiểm tra lại dữ kiệu
SELECT * FROM `accounts`



 