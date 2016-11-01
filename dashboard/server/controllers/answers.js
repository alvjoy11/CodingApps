console.log('answers controller, back end');
var Answer = require('../models/answer');
var User = require('../models/user');
var Topic = require('../models/topic');

module.exports = {

	createNew: function(req,res){
		var answerInfo = req.body;
		answerInfo._author = req.session.user;
		answerInfo._topic = req.params.id;
		var answer = new Answer(answerInfo);
		answer.save(function(err, answer){
			User.update({_id: req.session.user}, {$push:{answers:answer}}, function(err, user){
				Topic.update({_id: req.params.id}, {$push:{answers:answer}}, function(err, answer){
					if(!err){
						res.sendStatus(200);
					} else{
						res.sendStatus(500);
					}
			});
		})
	})
 }
}
