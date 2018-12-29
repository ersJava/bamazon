DROP DATABASE IF EXISTS bamazon_pup_store_db;

CREATE	DATABASE bamazon_pup_store_db;

USE bamazon_pup_store_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100),
department VARCHAR (50),
price DECIMAL (13,2),
stock_quantity INT,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("collar", "general supplies", "$4.25", 5), ("leash", "general supplies", 5.50, 5), ("SM food bag", "food", 6.00, 10), 
("LG food bag", "food", 7.50), ("SM bed", "general supplies", 10.00), ("LG bed", "general supplies", 14.25), ("frog squeaky toy", "toys", 3.00), ("lambchops plush toy", "toys", 2.50), ("biscuits", "food", 1.25), 
("turkey/sweet potato treats", "food", 2.50), ("shampoo", "grooming", 4.50)



