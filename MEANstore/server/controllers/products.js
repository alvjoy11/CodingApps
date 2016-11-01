console.log('products controller');
var Product = require('../models/product');
var Order = require('../models/order');

module.exports = {
	index: function(req, res){
		Product.find({}, function(err, products){
			if(err){
				res.json(err);
			} else{
				res.json(products);
			}
		});
	},

	create: function(req,res){
		console.log(req.body);
		Product.create(req.body, function(err, product){
			if(err){
				console.log("didn't work");
				res.json(err);
			} else{
				res.json(product);
			}
		});
	},
	show: function(req, res){
		Product.findById(req.params.id, function(err, product){
			if(err){
				res.json(err);
			} else {
				res.json(product);
			}
		})
	},
	delete: function(req,res){
		Product.remove({_id: req.params.id}, function(err){
			if(err){ console.log('error, didnt delete product'); return res.json(err);}
				return res.json(true);
		});
	}
}
