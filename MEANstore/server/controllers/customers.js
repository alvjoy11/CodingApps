console.log('customers controller');
var Customer = require('../models/customer'); // here we are using the registered model "Customer" to talk to db
var Order = require('../models/order');

module.exports = {
	index: function(req, res){
		Customer.find({}, function(err, customers){
			if(err){
				res.json(err);
			} else{
				res.json(customers);
			}
		});
	},

	create: function(req,res){
		Customer.create(req.body, function(err, newCustomer){
			if(err){
				console.log("didn't work");
				res.json(err);
			} else{
				res.json(newCustomer);
			}
		});
	},

	recent: function(req, res){
		Customer.find({})
		.exec(function(err, results){
			res.json(results)
		});
	},

	delete: function(req,res){
		Customer.remove({_id: req.params.id}, function(err){
			if(err){ console.log('error, didnt delete'); return res.json(err);}
				return res.json(true);
		});
	}
}
