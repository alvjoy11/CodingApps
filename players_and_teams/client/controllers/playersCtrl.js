app.controller('PlayersController', function($scope, playerFactory){
	$scope.players = [];

	playerFactory.getPlayers(function(players){
		$scope.players = players;
	})
	$scope.addPlayer = function(){
		playerFactory.addPlayer($scope.newPlayer);
		$scope.newPlayer = {};
	}
	$scope.delete = function($index){
		playerFactory.delete($index);
	}
})
