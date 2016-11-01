var express = require('express');
		mongoose = require('mongoose');
		bodyParser = require('body-parser');

var path = require('path');
// create the express app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect("mongodb://localhost/animal_app");
// static content, if any
app.use(express.static(path.join(__dirname, "./static")));

var AnimalSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1},
	species: {type: String, required: true},
	noise: {type: String, required: true},
	age: {type: Number, required: true},
}, {timestamps: true});

var Animal = mongoose.model('Animal', AnimalSchema); // the params: getter and setter
// ************ end of database code *************

app.get('/', function(req, res) {
	Animal.find({ }, function(err, animals){
		console.log(animals);
		if(err){
			console.log("Error");
		} else{
			res.render("index", {animals: animals});
		}
	})
})

//here we will SIMPLY display a form to create a new animal
app.get('/animals/new', function(req, res) {
	res.render("new");
})

app.post('/animals', function(req, res) {
 console.log("POST DATA", req.body);
 var animal = new Animal({name: req.body.name, species: req.body.species, noise: req.body.noise, age: req.body.age});
// an easier way to pass the above object would be: var animal = new Animal(req.body);
 animal.save(function(err){ // .save is the method that inserts into database!
	 if(err) {
		 console.log("Oops! Something went wrong!");
	 } else { // else console.log tha we did well & redirect to "/"
		 console.log("Success! Animal added!");
		 res.redirect("/");
	 }
 })
});
app.get('/animals/:id', function(req, res){
	Animal.findById(req.params.id, function(err, animal){ //alternate way to show one user by their id
		if(err){
			console.log('No animal found!');
		} else{
			res.render('show', {animal: animal});
		}
	})
})
app.get('/animals/:id/edit', function(req, res){
	Animal.findById(req.params.id, function(err, animal){ //alternate way to show one user by their id
		if(err){
			console.log('No animal found!');
		} else{
			res.render('edit', {animal: animal});
		}
	})
})
app.post("/animals/:id/update", function(req,res){
	Animal.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err){
		if(err){
			console.log("Didn't update!");
		} else{
			// animal.name = req.body.name;
			// animal.species = req.body.species;
			// animal.noise = req.body.noise;
			// animal.age = req.body.age;
				res.redirect('/animals/' + req.params.id);
				}
			})
		})

app.post("/animals/:id/remove", function(req,res){
	Animal.remove({_id: req.params.id}, function(err){
		if(err){
			console.log("Didn't delete animal!");
		} else{
			res.redirect('/');
		}
	})
});

app.listen(8000, function() {
 console.log("Listening on port 8000, have some chocolate!");
});
