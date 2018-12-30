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
VALUES 
("collar", "general supplies", 4.25, 8), 
("leash", "general supplies", 5.50, 7),
("SM bed", "general supplies", 10.00, 4), 
("LG bed", "general supplies", 14.25, 8),  
("SM food bag", "food", 6.00, 10), 
("LG food bag", "food", 7.50, 12),
("biscuits", "food", 1.25, 16), 
("turkey/sweet potato treats", "food", 2.50, 7),  
("frog squeaky toy", "toys", 3.00, 7), 
("lambchops plush toy", "toys", 2.50, 11), 
("4pk tennis balls", "toys", 4.50, 12),
("rope toy", "toys", 3.75, 5),
("shampoo", "grooming", 4.50, 9),
("brush", "grooming", 2.50, 8)




