var mongoose = require('mongoose'),
		Schema =  mongoose.Schema;

var AnswerSchema = new Schema({
	answer: {type: String},
	_topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	_author: [{type: Schema.Types.ObjectId, ref: 'User'}],
	created_at: {type: Date, default: Date.now()}
}, {timestamps: true});

module.exports = mongoose.model('Answer', AnswerSchema);
