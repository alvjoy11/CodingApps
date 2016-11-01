console.log('topics controller');
var Topic = require('../models/topic');
var User = require('../models/user');

module.exports = {

	show: function(req,res){
		Topic.find({})
			.populate("_author")
			.exec(function(err,topics){
				res.json(topics);
		})
	},

	createNew: function(req,res){
		var topicInfo = req.body;
		topicInfo._author = req.session.user;
		var topic = new Topic(topicInfo);
		topic.save(function(err, topic){
				User.update({_id: req.session.user}, {$push:{topics:topic}}, function(err, user){
						if(!err){
							res.sendStatus(200);
						} else{
							res.sendStatus(500);
						}
				});
		})
	},

	showOne: function(req,res){
		Topic.findOne({_id: req.params.id})
			.populate({path:'answers', populate:{path: '_author'}})
			.populate({path:'answers', populate:{path: 'comments', populate:{path: '_author'}}})
			.populate('_author') // author from topic
			.exec(function(err,topic){
					if(err){
						return res.sendStatus(500);
					}
					res.json(topic);
				})
			}
 }
