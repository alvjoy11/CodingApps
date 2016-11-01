console.log('mongo connection, mongoose setup! now we are cooking!!');
var mongoose = require('mongoose'),

fs = require('fs'), // this allows us to load, read, require all model files.
path = require('path'),  //here we utilize 'path' for easy dir/file joining
models_path = path.join(__dirname, './../models'), // dir where models reside
reg = new RegExp('.js$', 'i'), // regular expression that checks for .js extension
dbURI = 'mongodb://localhost/friends_mean';

mongoose.connect(dbURI); //connect to database
//CONNECTION EVENTS --> when connection is a success:
mongoose.connection.on('connected', function(){
	console.log('Mongoose default connection open to ${dbURI}');
});

//If connection throws an ERROR
mongoose.connection.on('error', function(err){
	console.error('Mongoose default connection error: ${err}');
});
// When connection is DISCONNECTED
mongoose.connection.on('disconnected', function(){
	console.log("Mongoose default connection disconnected");
});
//If the Node process ends, close the Mongoose connection
process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});
//read all files in models dir & check if it is a js file before requiring it:
fs.readdirSync(models_path).forEach(function(file){
	if(reg.test(file)){
		require(path.join(models_path, file));
	}
});
