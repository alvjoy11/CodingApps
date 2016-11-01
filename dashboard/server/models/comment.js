var mongoose = require('mongoose'),
		Schema =  mongoose.Schema;

var CommentSchema = new Schema({
	comment: {type: String, minlength: 5},
	likes: {type: Number, default: 0},
	dislikes: {type: Number, default: 0},
	_answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	_author: [{type: Schema.Types.ObjectId, ref: 'User'}],
	created_at: {type: Date, default: Date.now()}
}, {timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema);
