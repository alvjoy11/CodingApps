app.controller('AssociationsController', function($scope, playerFactory, teamFactory){
	$scope.players = [];
	$scope.teams = [];
	//when this controller is loaded --> fetch list pf players
	playerFactory.getPlayers(function(players){
		$scope.players = players;
	})
	// when this controller is loaded --> fetch list of teams
	teamFactory.getTeams(function(teams){
		$scope.teams = teams;
	})
	// here we pass the player's index & team name to create an association
	$scope.addPlayerToTeam = function(){
		playerFactory.addPlayerToTeam($scope.newAssoc);
	}
	// and here we pass $index to playerFactory to remove the player's team
	$scope.removePlayerFromTeam = function($index){
		playerFactory.removePlayerFromTeam($index);
	}
})
