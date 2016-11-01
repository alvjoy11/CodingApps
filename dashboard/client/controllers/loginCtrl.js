app.controller('LoginController', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location){
	console.log("Hello, Login Ctrl front end");

	$scope.login = function(user){
		UserFactory.login(user, function(res){
			console.log(res);
			$location.path('/dashboard');
		})
	}

	$scope.register = function(user){
		UserFactory.register(user, function(res){
			$location.path('/dashboard');
		})
	}

}]);
