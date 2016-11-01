var express = require('express'),
		bodyParser = require('body-parser'),
 		path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.listen(8000, function(){
	console.log("Listening on 8000, pull up a chair");
});
