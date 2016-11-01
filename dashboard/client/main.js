var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_login.html',
      controller: 'LoginController'
    }).when('/dashboard', {
      templateUrl: '/partials/_dashboard.html',
      controller: 'DashController'

    }).when('/users/:id', {
			templateUrl: '/partials/_user.html',
      controller: 'UserController'

		}).when('/topics/:id', {
			templateUrl: '/partials/_topic.html',
			controller: 'TopicController'
		}).otherwise({
			redirectTo: '/'
		});

}]);
