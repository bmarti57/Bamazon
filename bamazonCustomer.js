var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db",
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

var start = function() {
    connection.query('SELECT * FROM products', function(err, res) {

        var table = new Table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
        });

        console.log("Welcome to Bamazon ");
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }
        console.log(table.toString());
        inquirer.prompt([{
            name: "item",
            type: "input",
            message: "What is the Item ID of the product?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {
            var chosenId = answer.item;
            var chosenProduct = res[chosenId];
            var chosenQuantity = answer.quantity;
            if (chosenQuantity < res[chosenId].stock_quantity) {
                console.log("Your total for " + "(" + answer.quantity + ")" + " - " + res[chosenId].product_name + " is: " + res[chosenId].price * chosenQuantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: res[chosenId].stock_quantity - chosenQuantity
                }, {
                    item_id: res[chosenId].item_id
                }], function(err, res) {

                    start();
                });

            } else {
                console.log("Insufficient Quantity. Only " + res[chosenId].stock_quantity + " left in stock.");
                start();
            }
        })
    })
}


start();