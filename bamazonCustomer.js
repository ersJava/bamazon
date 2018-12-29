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
    console.log("Before Products call")
    products();
});


function products() {
    console.log(colors.cyan.bold("**** Welcome to Bamazon Pup Store ****"));
    connection.query('SELECT * FROM products', function (err, res) {
        console.log("res here:")
        if (err) throw err

        var table = new Table({
            head: ["Product ID".green, "Product".green,"Product".green,"Product".green,"Product".green],
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
                    choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
                },
                {
                    name: 'quanity',
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

        .then(function (answer) {
            // based on their answer, either call the bid or post the functions
           
           
           for(var i = 0; i < res.length; i++){
            console.log("ID: ",answer.purchaseByID )
            console.log("res; ", res[i].id)
    
               if(parseInt(answer.purchaseByID) === parseInt(res[i].id)){
                   console.log("Have a match")




                   
               }
           }
           // purchase1()

        })
        connection.end();
    })
}

// chosen product ID - run next question prompts how many?
// var answer = value - takes that answer and run


// 12.2 great bay
