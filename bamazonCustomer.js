var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    // Your password
    password: "think&gr0W$",
    database: "bamazon_pup_store_db"
});
connection.connect(function (err) {
    if (err) throw err;
    products();
});
function products() {
    console.log("**** Welcome to Bamazon Pup Store ****")
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err
        console.log(res)

        inquirer
            .prompt({
                name: 'purchaseByID',
                type: 'list',
                message: 'Shop by Item ID',
                choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
            })
            .then(function (answer) {
                // based on their answer, either call the bid or post the functions
                answer.purchaseByID
                    purchase1()
                
            })
        connection.end();
    })
}

// chosen product ID - run next question prompts how many?
//var answer = value - takes that answer and run
// 

//12.2 great bay
