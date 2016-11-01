app.controller('showController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location){
  $scope.friend = {};
  console.log($routeParams);

  function getFriend(){
		friendsFactory.show($routeParams.id, function(data){
			console.log("we are in the show controller", data.data);
      $scope.friend = data.data;
		})
	}
	getFriend();
}]);
