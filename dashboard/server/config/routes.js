console.log('routes.js');
var User = require('../controllers/users.js');
var Topic = require('../controllers/topics.js');
var Answer = require('../controllers/answers.js');
var Comment = require('../controllers/comments.js');

module.exports = function(app){

	app.post('/login', User.login);
	app.post('/register', User.register);

	app.get('/logout', User.logout);

	app.get('/users/:id', User.get);

	app.get('/topics', Topic.show);
	app.post('/topics', Topic.createNew);
	app.get('/topics/:id', Topic.showOne);

	app.post('/topics/:id/answers', Answer.createNew);

	app.post('/answers/:id/comments', Comment.createNew);
	app.get('/comments/like/:id', Comment.like);
	app.get('/comments/dislike/:id', Comment.dislike);
}
