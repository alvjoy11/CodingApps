var mongoose = require('mongoose'),
		Schema =  mongoose.Schema;

var UserSchema = new Schema({
	name: {type: String, required: true, minlength: 2},
	password: {type: String, required: true, minlength: 5},
	_topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	_answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	created_at: {type: Date, default: Date.now()}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
