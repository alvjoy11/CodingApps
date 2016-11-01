console.log('editController');
app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location){

	console.log($routeParams);

	function getFriend(){
		friendsFactory.show($routeParams.id, function(data){
			$scope.friend = data.data;
			console.log("we are in the show function in edit controller", data.data);
		})
	}
	getFriend();

	$scope.update = function(friend){
		friendsFactory.update(friend, function(res){
			console.log(res);
			$location.path('/new')
		})
	}

}]);
