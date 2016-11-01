var mongoose = require('mongoose'),
		Schema =  mongoose.Schema;

var CustomerSchema = new Schema({
	name: String,
	// email: String,
	created_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Customer', CustomerSchema);
