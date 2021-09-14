const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const PizzaCart = require('./pizza-cart');

const app = express();
const pizzaCart = PizzaCart();

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support
app.engine('handlebars', exphbs({layoutsDir: 'views/layouts/'}));
app.set('view engine', 'handlebars');

// parse application in ->/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

// parse application in -> / json
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index', {

		choices: pizzaCart.getChoice(),
		cartTotal: pizzaCart.cartTotal()
	});
});

app.post('/cart', function(req, res) {
		pizzaCart.pizzaChoice({
		large: req.body.large,
		medium: req.body.medium,
		small: req.body.small,
	});
	res.redirect('/')
});

app.post('/order-pizza', function(req, res) {
	pizzaCart.pizzaChoice({
		large: req.body.large,
		medium: req.body.medium,
		small: req.body.small,
	});
	res.redirect('/')
})

const PORT =  process.env.PORT || 3017;
// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function(){
	console.log('App starting on port', PORT);
});