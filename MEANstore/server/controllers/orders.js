console.log('orders controller');
var Order = require('../models/order');
var Product = require('../models/product');

module.exports = {
	index: function(req, res){
		Order.find({})
		.populate('_customer _product')
		.exec(function(err, orders){
			if(err){
				res.json(false);
			} else{
				res.json(orders);
			}
		});
	},

	create: function(req,res){
		var quantity = req.body.quantity,
				_customer = req.params.customerId,
				_product = req.params.productId;
				// productId = req.body._product;
				if(quantity < 1) {return res.json(false);}

			Product.isQuantityAvailable(_product, quantity, function(results, product){
				if(results){
					product.decrementQuantity(quantity, function(err){
						if(err) {return res.json(err);}

					Order.create({quantity: quantity, _customer: _customer, _product: _product}, function(err){
						if(err){
							console.log('sorry no dice');
							return res.json(err);}
							return res.json(true);
					})
				})
			} else{
				return res.json(false);
			}
		})
	},

	show: function(req, res){
		Order.findById(req.params.id, function(err, order){
			if(err){
				res.json(err);
			} else {
				res.json(order);
			}
		})
	},
	delete: function(req,res){
		Order.remove({_id: req.params.id}, function(err){
			if(err){ console.log('error, didnt delete order'); return res.json(err);}
				return res.json(true);
		});
	}
}
