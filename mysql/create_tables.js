import {connection_function} from '../service/connection.mjs'
var connection = connection_function()

connection.query("CREATE TABLE product (product_id INT AUTO_INCREMENT PRIMARY KEY, admin_status VARCHAR(255), type VARCHAR(255), discription VARCHAR(255), seller_id INT , amount INT)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE bid_product (prodcut_id INT PRIMARY KEY,  status VARCHAR(255), base_price INT , end_time TIME , winner_id INT)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE buyer_bid (id INT AUTO_INCREMENT PRIMARY KEY ,bid INT , buyer_id INT,product_id INT)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE review (review_id INT AUTO_INCREMENT PRIMARY KEY ,comment VARCHAR(255) , user_id INT)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE user (user_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),password VARCHAR(255) , email VARCHAR(255),role VARCHAR(255) )", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  connection.query("CREATE TABLE cart (cart_id INT AUTO_INCREMENT PRIMARY KEY,buyer_id INT , product_id INT )", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });