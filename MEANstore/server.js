var express = require('express'),
		bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

// ROUTES --> routes.js exports a function - we invoke it here by passing app
require('./server/config/routes.js')(app);

///MONGODB///
require('./server/config/db.js');

app.listen(8000, function(){
	console.log('Listening on 8000, dude');
});
