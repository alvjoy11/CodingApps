var express = require('express');
		path =	require('path');
		mongoose = require('mongoose');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/message_board_test');
var Schema = mongoose.Schema;
var errors  =[];
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minLength: 1},
	message: {type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minLength: 1},
	_messages: {type: Schema.Types.ObjectId, ref: "Message"},
	comment: {type: String, required: true},
}, {timestamps: true});

var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

// Set up empty array to hold our errors
var errors = [];

app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	Message.find({})
	.populate('comments')
	.exec(function(err, messages){
		res.render('index', {messages: messages, errors: errors});
		errors = [];
	})
})

app.post('/new', function(req,res){
	var message = new Message(req.body);
	console.log(message.errors);
	message.save(function(err){
		if(err){
// <<<<<<< HEAD
			// console.log(message.errors);
			console.log('Error! try again');
			errors.push(err);
		}
			res.redirect('/');
// =======
			// errors.push(err)
			// Anyway you can send the errors back to the browser to be displayed?
		// }
		// res.redirect('/');
// >>>>>>> 07e1778e4cc21ef229908dda3f333b5cd4e0c6e1
	})
});

app.post('/new_comment/:id', function(req, res){
	console.log(("POST DATA", req.body));
	Message.findOne({_id: req.params.id}, function(err, message){
		var comment = new Comment(req.body);
		comment._message = message;
		message.comments.push(comment);
		comment.save(function(err){
			if(err){
				console.log("Didn't post!");
				// What about handling validation errors?
			}
			message.save(function(err){
				if(err){
					console.log('Error.. nothing posted');
				} else{
					res.redirect('/');
				}
			})
		})
	});
})
app.listen(8000, function(){
	console.log('Listening on port 8000, have a truffle');
});
