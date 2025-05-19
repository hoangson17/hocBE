-- join table

SELECT `users`.*,`phones`.`phone` FROM `users`
JOIN `phones`
ON `users`.`id` = `phones`.`user_id`;

SELECT `users`.*,`phones`.`phone` FROM `users`
LEFT JOIN `phones`
ON `users`.`id` = `phones`.`user_id`;

SELECT `users`.*,`phones`.`phone` FROM `users`
RIGHT JOIN `phones`
ON `users`.`id` = `phones`.`user_id`;

SELECT `users`.*,`phones`.`phone` FROM `users`
JOIN `phones`
ON `users`.`id` = `phones`.`user_id`
WHERE `phones`.phone LIKE '%11%';


-- bai tap lay dand sach khoa hoc cua hoc vien co so dien thoai chua chuoi '22'
SELECT `courses`.* FROM `courses`
INNER JOIN `users_courses`
ON `courses`.`id` = `users_courses`.`courses_id`
INNER JOIN `phones`
ON `users_courses`.`user_id` = `phones`.`user_id`
WHERE `phones`.phone LIKE '%22%';