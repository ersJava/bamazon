# bamazon
MySQL Online Puppy Supply Store

## About the app:

**NPM** 
CLI Table - for the tables
Color.js - colors

Bamazon: Online Puppy Supply Store will a list items for purchase and will display the price and stock quantity of each product.
You will be asked to purchase an item by **Product ID** and asked how many you would like to purchase. If you choose a quantity that is larger than what is in stock, you will see a message saying *"Sorry, not enough quantity to fill your order""*

*Unfinished Items*
Once you make your selection, the quantity will update in the database and display the total price of your purchase.

**To get started:** 

* Type in node bamazonCustomer in the command line. You will be greeted, followed by the table of products for sale.

![photo](/images/intro.png)

* To search you will need to type in the command line, node liri "selected command", followed by search term in quoations marks.   
The mulitple functions are performed from the case switch statments.

* Here is an example of the **concertThis()** function in action: _node liri concert-this "Rolling Stones"_

![concert this example](/images/concert_this_example1.png)

The return results will give you the Line-Up, venue, city and date of the show provided by moments.js 

* Here is an example of the **spotifyThis()** function in action: _node liri spotify-this "Never Gonna Give You Up"_

![concert this example](/images/spotify_this_example.png)

The return results will give you the artist, song title, a preview URL and album name. 

If a song title is not entered, spotify-this will automatically give you _Sheena Easton, "For Your Eyes Only"_.

* Here is an example of the **movieThis()** function in action: _node liri movie-this "The Dark Knight"_

![concert this example](/images/movie_this_example.png)

The return results will give all the basic information about the movie along with a short plot summary. 

If a movie is not choosen, movie-this will automatically suggest _"If you are looking for a classic 90s, feel good movie, you should watch The Goonies!"_ and give you the movie results for The Goonies. 

* **doWhatItSays()** function coming soon!

## API Keys

The API used to make this application are Spotify, Bands In Town and OMDB. The API Keys are stored in .env

## log.txt

fs.appendFile is logging all the data from the terminal and outputting the data to the log.txt and does not overwrite the file each time a command is run.



