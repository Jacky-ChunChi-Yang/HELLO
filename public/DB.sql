DROP table ShippingInfo cascade;
DROP table Transactions cascade;
DROP table OrderDetails cascade;
DROP table Cart_Item cascade;
DROP table Products cascade;
DROP table Categories cascade;
DROP table Orders cascade;
DROP table Users cascade;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO Categories (category_name) VALUES 
('Snacks'), 
('Drinks'), 
('Instant Noodles');

CREATE TABLE Products (
    product_flavor VARCHAR(100),
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_package VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

INSERT INTO Products (product_flavor, product_package, description, price, category_id, stock, image_url) VALUES 
('kui coconut','Bag ($3.75)', 'Bag ($3.75)', 3.75, 1, 100, 'pic/snacks/kui_green_demo.png'),
('kui chocolate','Bag ($3.75)', 'Bag ($3.75)', 3.75, 1, 100, 'pic/snacks/kui_red_demo.png'),
('kui salty','Bag ($3.75)', 'Bag ($3.75)', 3.75, 1, 100, 'pic/snacks/kui_yellow_demo.png'),
('pea Original','Bag ($2.99)', 'Bag ($2.99)', 2.99, 1, 100, 'pic/snacks/pea_red.png'),
('pea Basil','Bag ($2.99)', 'Bag ($2.99)', 2.99, 1, 50, 'pic/snacks/pea_green.png'),
('pea Spicy','Bag ($2.99)', 'Bag ($2.99)', 2.99, 1, 30, 'pic/snacks/pea_yellow.png'),
('pieapple cake Original','Pack of 6 ($9.99)', 'Pack of 6 ($9.99)', 9.99, 1, 100, 'pic/snacks/pineapple_6.png'),
('pieapple cake Original','Pack of 9 ($14.99)', 'Pack of 9 ($14.99)', 14.99, 1, 50, 'pic/snacks/pineapple_9.png'),
('pieapple cake Original','Pack of 12 ($27.99)', 'Pack of 12 ($27.99)', 27.99, 1, 30, 'pic/snacks/pineapple_12.png'),
('puff milk','Single ($3.25)', 'Single ($3.25)', 3.25, 1, 100, 'pic/snacks/puff_all.png'),
('puff chocolate','Single ($3.25)', 'Single ($3.25)', 3.25, 1, 50, 'pic/snacks/puff_all.png'),
('puff strawberry','Single ($3.25)', 'Single ($3.25)', 3.25, 1, 100, 'pic/snacks/puff_all.png'),
('puff milk','box for 3 ($9.00)', 'box for 3 ($9.00)', 9.00, 1, 50, 'pic/snacks/puff_milk.png'),
('puff chocolate','box for 3 ($9.00)', 'box for 3 ($9.00)', 9.00, 1, 100, 'pic/snacks/puff_choco.png'),
('puff strawberry','box for 3 ($9.00)', 'box for 3 ($9.00)', 9.00, 1, 50, 'pic/snacks/puff_strawberry.png'),
('want Original','Pack of 24 PC ($8.75)', 'Pack of 24 PC ($8.75)', 8.75, 1, 100, 'pic/snacks/want_bag.png'),
('barleytea original','Single ($0.89)', 'Single ($0.89)', 0.89, 2, 50, 'pic/drinks/barleytea_small.png'),
('barleytea original','Pack of 6 ($5.25)', 'Pack of 6 ($5.25)', 5.25, 2, 30, 'pic/drinks/barleytea_small.png'),
('barleytea original','Box of 24 ($19.99)', 'Box of 24 ($19.99)', 19.99, 2, 30, 'pic/drinks/barleytea_small.png'),
('barleytea original','Big bottle ($5.50)', 'Big bottle ($5.50)', 5.50, 2, 30, 'pic/drinks/barleytea_big.png'),
('heysong original','Can ($1.50)', 'Can ($1.50)', 1.50, 2, 100, 'pic/drinks/heysong_small.png'),
('heysong salt','Can ($1.50)', 'Can ($1.50)', 1.50, 2, 50, 'pic/drinks/heysong_salt_small.png'),
('heysong original','Pack of 6 ($8.5)', 'Pack of 6 ($8.5)', 8.5, 2, 30, 'pic/drinks/heysong_small_6.png'),
('heysong salt','Pack of 6 ($8.5)', 'Pack of 6 ($8.5)', 8.5, 2, 100, 'pic/drinks/heysong_salt-small_6.png'),
('heysong original','Big Bottle ($3)', 'Big Bottle ($3)', 3.00, 2, 50, 'pic/drinks/heysong_big.png'),
('heysong salt','Big Bottle ($3)', 'Big Bottle ($3)', 3.00, 2, 30, 'pic/drinks/heysong_salt_big.png'),
('japanese green tea','Single bottle($3.25)', 'Japanese Style Green Tea Sugar Free Single ($3.25)', 3.25, 2, 100, 'pic/drinks/tea_green.png'),
('taiwanese green tea','Single bottle($3.25)', 'Taiwanese Style Green Tea Drink Single ($3.25)', 3.25, 2, 50, 'pic/drinks/tea_yellow.png'),
('oolong','Single bottle($3.25)', 'Bai Hao Oolong Tea Drink Single ($3.25)', 3.25, 2, 30, 'pic/drinks/tea_grey.png'),
('apple soda original','Can ($1.25)', 'Refreshing apple soda in a can.', 1.25, 2, 100, 'pic/drinks/apple_small.png'),
('apple soda original','Pack of 6 cans ($5.99)', 'Pack of 6 cans of Apple Sidra.', 5.99, 2, 50, 'pic/drinks/apple_small_6.png'),
('apple soda original','Big Bottle ($4.99)', 'Large bottle of Apple Sidra.', 4.99, 2, 30, 'pic/drinks/apple_big.png'),
('one more Seafood','Single ($2.5)', 'Single ($2.5)', 2.5, 3, 100, 'pic/noodles/uni_seafood.png'),
('one more Beef','Single ($2.5)', 'Single ($2.5)', 2.5, 3, 50, 'pic/noodles/uni_beef.png'),
('one more Pork','Single ($2.5)', 'Single ($2.5)', 2.5, 3, 30, 'pic/noodles/uni_pork.png'),
('one more Seafood','Pack of 3 ($7.00)', 'Pack of 3 ($7.00)', 7.00, 3, 100, 'pic/noodles/uni_seafood.png'),
('one more Beef','Pack of 3 ($7.00)', 'Pack of 3 ($7.00)', 7.00, 3, 50, 'pic/noodles/uni_beef.png'),
('one more Pork','Pack of 3 ($7.00)', 'Pack of 3 ($7.00)', 7.00, 3, 30, 'pic/noodles/uni_pork.png'),
('weili original','single bowl ($2.75)', 'single bowl ($2.75)', 2.75, 3, 30, 'pic/noodles/weilih-bowl.png'),
('weili original','Pack of 4 ($4.99)', 'Pack of 4 ($4.99)', 4.99, 3, 100, 'pic/noodles/weilih_bag.png'),
('uni noodle','Pack of 5 ($2.00)', 'Pack of 5 ($2.00)', 2.00, 3, 50, 'pic/noodles/uni_pink_bag.png'),
('uni rice noodle','Pack of 5 ($2.00)', 'Pack of 5 ($2.00)', 2.00, 3, 30, 'pic/noodles/uni_blue_bag.png');


CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DOUBLE(100, 2) NOT NULL,
    shipping_address VARCHAR(255) NOT NULL,
    billing_address VARCHAR(255) NOT NULL,
    status ENUM('Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE OrderDetails (
    order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DOUBLE(100, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Cart_Item(
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    card_number VARCHAR(19),
    card_holder_name VARCHAR(100),
    expiration_date VARCHAR(5),
    cvv VARCHAR(4),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE ShippingInfo (
    shipping_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address_1 VARCHAR(255) NOT NULL,
    address_2 VARCHAR(255),
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    phone_number VARCHAR(15),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);
