USE backend_01;
CREATE TABLE `phones`(
	`id` INT PRIMARY KEY,
	`phone` VARCHAR(15),
	`user_id` INT,
	`created_at` TIMESTAMP,
  	`update_at` TIMESTAMP ,
  	CONSTRAINT user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id)
);


-- xoa khoa ngoai
USE backend_01;
ALTER TABLE `phones` DROP FOREIGN KEY user_id_foreign;

-- them khoa ngoai vao bang co san
USE backend_01;
ALTER TABLE `phones`
ADD CONSTRAINT user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id);


CREATE TABLE `posts`(
	id INT PRIMARY KEY,
	title VARCHAR(200),
	content TEXT,
	user_id INT,
	created_at TIMESTAMP,
  	update_at TIMESTAMP ,
  	CONSTRAINT posts_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE `courses`(
	id INT PRIMARY KEY,
	`name` VARCHAR(200),
	price INT,
	created_at TIMESTAMP,
  	update_at TIMESTAMP 
)

CREATE TABLE `users_courses`(
	id INT PRIMARY KEY ,
	user_id INT,
	courses_id INT,
	created_at TIMESTAMP,
   update_at TIMESTAMP ,
   CONSTRAINT users_courses_user_id FOREIGN KEY (user_id) REFERENCES users(id),
   CONSTRAINT users_courses_courses_id FOREIGN KEY (courses_id) REFERENCES courses(id),
   
)


-- default
USE backend_01;
ALTER TABLE `users` MODIFY COLUMN `status` TINYINT(1) DEFAULT 1;


-- AUTO_INCREMENT tu dong tang
USE backend_01;
ALTER TABLE `courses` MODIFY COLUMN `id` INT AUTO_INCREMENT;