var mongoose = require('mongoose'),
		Schema =  mongoose.Schema;

var TopicSchema = new Schema({
	topic: {type: String, minlength: 5},
	description: {type: String},
	category: {type: String, required: true},
	_answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	_author: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
	created_at: {type: Date, default: Date.now()}
}, {timestamps: true});

module.exports = mongoose.model('Topic', TopicSchema);
