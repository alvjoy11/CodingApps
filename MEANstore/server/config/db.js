console.log('mongo connection is good!');
var mongoose = require('mongoose'),
		fs = require('fs'), // this allows us to load, read, require all model files.
		path = require('path'), //here we utilize 'path' for easy dir/file joining
		reg = new RegExp('.js$', 'i'), // regular expression that checks for javascript files
		models_path = path.join(__dirname, '../models'); // dir where models reside

mongoose.Promise = global.Promise;
//connect mongoose here
mongoose.connect('mongodb://localhost/MEANstore');
//and load any existing models

//read/loop through all files in models dir (require them) & check if it is a js file before requiring it:
fs.readdirSync(models_path).forEach(function(file){
	if(reg.test(file)){
		require(path.join(models_path, file));
	}
});
