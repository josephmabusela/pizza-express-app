const express = require('express');
const exphbs  = require('express-handlebars');
const PizzaCart = require('./pizza-cart');

const app = express();
const pizzaCart = PizzaCart();

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
	res.render('index', {

		large: pizzaCart.largeTotal(),
		medium: pizzaCart.mediumTotal(),
		small: pizzaCart.smallTotal()
	});
});

app.post('/cart', function(req, res) {
	counter++;
	res.redirect('/')
});

app.post('/order-pizza', function(req, res) {
	let price = req.body.price;
	currentPrice = price;
	res.render('index', {
		currentPrice
	});
})

const PORT =  process.env.PORT || 3017;
// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function(){
	console.log('App starting on port', PORT);
});