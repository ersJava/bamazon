# Bamazon
> Amazon-like storefront

A command line node application using MySQL to create an Online Puppy Supply Store.

## Customer View

Bamazon: Puppy Supply Store will display a menu of items for purchase and update stock quanity of item from the store's inventory based on the customer's purchase. 

### How It Works
`node bamazonCustomer` in the command line will greet the customer and display the table of products for sale.

The customer will be asked to 'Shop by Item ID' and then asked '? How many would you like to buy?' If the customer chooses a quantity that is larger than what is in stock, they will see  `"Sorry, not enough quantity to fill your order"` 

**NPM** 
CLI Table - for the tables
Color.js - colors

Y

*Unfinished Items*
Once you make your selection, the quantity will update in the database and display the total price of your purchase.

**To get started:** 

* Type in node bamazonCustomer in the command line. You will be greeted, followed by the table of products for sale.

![intro screenshot](/images/intro.png)

* Once you made the selection you will be prompted by INQUIRER to make your selection by **Product ID**. You will use the arrow keys to scroll through the choices.    

![choice screenshot](/images/choice.png)

* Next you will be asked how many of the item you would like to buy. Again, if you choose a quantity that is larger than what is in stock you will receive this message message saying *"Sorry, not enough quantity to fill your order""*

Once you a complete a transaction you will see this screen. 

![thank you screenshot](/images/thankyou.png)







