DROP DATABASE IF EXISTS turn_tables_db;

CREATE DATABASE turn_tables_db;

USE turn_tables_db;

CREATE TABLE businesses(
id NOT NULL AUTO_INCREMENT PRIMARY KEY,
name NOT NULL VARCHAR(256),
address VARCHAR(256),


);

CREATE TABLE customers(

);

CREATE TABLE reviews(

);

CREATE TABLE comments(

);