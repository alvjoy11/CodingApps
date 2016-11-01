var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/new',{
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/edit/:id',{
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.when('/show/:id',{
		templateUrl: 'partials/show.html',
		controller: 'showController'
	})
	.otherwise({
		redirectTo: '/'
	})
});
