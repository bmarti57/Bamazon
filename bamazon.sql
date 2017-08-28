CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INTEGER NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(6,2) NOT NULL,
stock_quantity INTEGER(100) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0001,
"Television",
"Electronics",
149.99,
20
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0002,
"Pillows",
"Home",
14.99,
50
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0003,
"Notebooks",
"Office Supplies",
5.99,
32
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0004,
"Wireless Mouse",
"Electronics",
7.49,
8
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0005,
"Stereo",
"Electronics",
59.25,
17
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0006,
"Desk",
"Home",
79.95,
4
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0007,
"Night Stand",
"Home",
109.05,
10
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0008,
"Paper Clips",
"Office Supplies",
1.99,
100
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0009,
"Printer Ink",
"Office Supplies",
29.95,
41
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
0010,
"Headphones",
"Electronics",
17.05,
20
);

