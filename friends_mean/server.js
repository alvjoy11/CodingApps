var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

var mongoose = require("./server/config/mongoose.js");
var routes = require("./server/config/routes.js")(app);
//routes.js exports a function now we invoke it by passing app!

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(8000, function(){
	console.log("Running on 8000.. have some coffee!");
});
