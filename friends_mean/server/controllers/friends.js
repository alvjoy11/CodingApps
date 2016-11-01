console.log('friends controller');
var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

function FriendsController(){
	this.index = function(req,res){
		Friend.find({}, function(err, friends){
			console.log(friends);
			res.json(friends);
		})
	};

this.create = function(req,res){
 // console.log("POST DATA", req.body);
  var friend = new Friend(req.body);
  friend.save(function(err){ // .save is the method that inserts into db.
 	 if(err) {
 		 console.log("Oops! Something went wrong!");
 	 } else {
 		 console.log("Success! Friend added!");
	 	 res.json({placeholder:'create'})
  }
 })
};

this.show = function(req,res){
	Friend.findOne({_id: req.params.id }, function(err, friend){
			console.log("inside the show function",friend);
			res.json(friend);
	})
};

this.update = function(req, res){
  Friend.update({_id: req.params.id}, {first_name: req.body.first_name, last_name: req.body.last_name, dob: req.body.dob}, function(err){
    if(err){
      console.log('could not update');
    } else {
      console.log('successfully updated');
      res.sendStatus(200);
    }
  })
},
this.delete = function(req,res){
	console.log("HELLO");
		Friend.remove({_id: req.params.id}, function(err){
			if(err){
				console.log("Didn't delete friend!");
			} else{
				res.json({placeholder:'delete'});
			}
		})
	};
}
module.exports = new FriendsController();
