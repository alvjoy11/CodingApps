var Customer = require('../controllers/customers')
var Product = require('../controllers/products')
var Order = require('../controllers/orders')


module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(__dirname + '../../client/index.html');
	});
	app.get('/customers', Customer.index);
	app.post('/customers', Customer.create);
	app.delete('/customers/:id', Customer.delete);
	//need recent route here for customers

	// app.get('/:id', Product.show);
	app.get('/products', Product.index);
	app.post('/products', Product.create);
	app.delete('/products/:id', Product.delete);

	app.get('/orders', Order.index);
	app.get('/orders/:id', Order.show);
	app.post('/orders/:productId/:customerId', Order.create);
	app.delete('/orders/:id', Order.delete);
}
