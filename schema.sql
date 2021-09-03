-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE


DROP DATABASE IF EXISTS cowapp;
CREATE DATABASE cowapp;
USE cowapp;

DROP TABLE IF EXISTS `cows`;
CREATE TABLE `cows` (
 `id` INTEGER NOT NULL AUTO_INCREMENT,
	`name` TEXT NULL DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO cows VALUES (NULL, 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.
');