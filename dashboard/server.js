var express = require('express'),
 		mongoose = require('mongoose');
		bodyParser = require('body-parser');
 		session = require('express-session');
 		path = require('path');

var app = express();
/// MONGODB ///
require('./server/config/db.js');

var sessionConfig = {
		secret:'CookieMonster', // Secret name for decoding secret and such
		resave:false, // Don't resave session if no changes were made
		saveUninitialized: true, // Don't save session if there was nothing initialized
		name:'myCookie', // Sets a custom cookie name
		cookie: {
		secure: false, // This need to be true, but only on HTTPS
		httpOnly:false, // Forces cookies to only be used over http
		maxAge: 3600000
 }
}

app.use(session(sessionConfig));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

/// ROUTES /// --> routes.js exports a function - we invoke it here by passing app
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('Listening on 8000');
});
