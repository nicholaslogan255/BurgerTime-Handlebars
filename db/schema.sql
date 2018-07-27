

CREATE DATABASE burgertime_db;
USE burgertime_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) not null,
    devoured boolean not null,
	PRIMARY KEY (id)
);