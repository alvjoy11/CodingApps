console.log('answers controller');
var Answer = require('../models/answer');
var User = require('../models/user');
var Topic = require('../models/topic');

module.exports = {

	createNew: function(req,res){
		var commentInfo = req.body;
		commentInfo._author = req.session.user;
		commentInfo._answer = req.params.id;
		var comment = new Comment(commentInfo);
		comment.save(function(err, comment){
			User.update({_id: req.session.user}, {$push:{comments:comment}}, function(err, user){
				Answer.update({_id: req.params.id}, {$push:{comments:comment}}, function(err, comment){
					if(!err){
						res.sendStatus(200);
					} else{
						res.sendStatus(500);
					}
			});
		})
	})
},
	like: function(req,res){
		Comment.update({_id:req.params.id}, {$inc:{"likes":1}}, function(err,comment){
			res.sendStatus(200);
		})
	},
	dislike: function(req,res){
		Comment.update({_id:req.params.id}, {$inc:{"dislikes":-1}}, function(err,comment){
			res.sendStatus(200);
		})
  }
}
