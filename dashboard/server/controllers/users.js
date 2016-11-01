console.log('users controller, back end');
var User = require('../models/user');

module.exports = {
	register: function(req,res){
			var user = new User(req.body);
			user.save(function(err,user){ //creating a new user here
				if(err){
					return res.status(400).json(err);
				}
				req.session.user = user._id;
				res.sendStatus(200);
			})
	},

	login: function(req,res){
		var password = req.body.password;
		User.findOne({name: req.body.name, password:password}, function(err,user){
					if(err){
						return res.status(400).json(err);
					}
					else if(user){
						req.session.user = user._id;
						res.sendStatus(200);
				} else{
					res.status(400).send({data: "User password isnt correct"});
				}
			})
	},
	
	logout: function(req,res){
		req.session.destroy();
		res.send(200);
	},

	get: function(req,res){
		User.findOne({_id: req.params.id}, function(err,user){
			if(err){
				return res.sendStatus(500);
			}
			res.json(user);
		})
	}
}
