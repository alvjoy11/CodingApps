app.controller('UserController', ['$scope', 'UserFactory', '$routeParams', function($scope, UserFactory, $routeParams){
	console.log($routeParams);

	UserFactory.getUser($routeParams.id, function(user){
		$scope.user = user;
		console.log(user);
	})

}]);
