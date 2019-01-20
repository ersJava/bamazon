var mysql = require("mysql");
var inquirer = require("inquirer");

var colors = require('colors');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "think&gr0W$",
    database: "bamazon_pup_store_db"
});

connection.connect(function (err) {
    if (err) throw err;
    products();
});


function products() {
    console.log(colors.cyan.bold("**** Welcome to Bamazon: Online Puppy Supply Store ****"));
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err

        var table = new Table({
            head: ["Product ID".blue, "Product".blue, "Department".blue, "Price".blue, "Quantity".blue],
            colWidths: [12, 30, 20, 12, 12],
        });
        for (var i = 0; i < res.length; i++) {
            table.push(
                //[res[i].id, res[i].product_name]

                [res[i].id, res[i].product_name, res[i].department, parseFloat(res[i].price).toFixed(2), res[i].stock_quantity]
            );
        }
        console.log(table.toString());

        inquirer
            .prompt([
                {
                    name: 'purchaseByID',
                    type: 'list',
                    message: 'Shop by Item ID',
                    choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
                },
                {
                    name: 'quantity',
                    type: 'input',
                    message: 'How many would you like to buy?',
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true
                        }
                        return false
                    }
                },
            ])

            // looked up youtube videos of other projects and StackFlow to get help with the syntax 
            .then(function (answer) {
                for (var i = 0; i < res.length; i++) {

                    if (parseInt(answer.purchaseByID) === parseInt(res[i].id)) {
                        connection.query('SELECT * FROM products WHERE id =' + answer.purchaseByID, function (err, res) {
                
                            if (err) throw err

                            if (res[0].stock_quantity < answer.quantity) {
                                console.log("Sorry, not enough quantity to fill your order")
                            } else {
                                connection.query('UPDATE products SET stock_quantity = stock_quantity -' + answer.quantity +
                                    'WHERE id=' + answer.purchaseByID, function (err, res) {
                                        console.log("Thank you for shopping at Bamazon: Online Puppy Supply Store!");
                        
                                    }
                                )
                            }
                        })
                    }
                // purchase1()
                }
        connection.end();
    }
    )
}
    )}
