console.log('friends model, oh yeah');
var mongoose = require("mongoose");

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: true, minlength: 1},
	last_name: {type: String, required: true},
	dob: {type: Date, default: Date.now, required: true}
})
mongoose.model('Friend', FriendSchema);
