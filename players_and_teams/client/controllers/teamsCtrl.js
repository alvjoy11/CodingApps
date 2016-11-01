// 2nd controller
app.controller('TeamsController', function($scope, teamFactory){
	$scope.teams = [];

		teamFactory.getTeams(function(teams){
			$scope.teams = teams;
	})
 // new team info to the teamFactory
	$scope.addTeam = function(){
		teamFactory.addTeam($scope.newTeam)
		$scope.newTeam = {};
	}
	$scope.removeTeam =  function($index){ 	// here we use $index to teamFactory to remove a team
		teamFactory.removeTeam($index);
	}
})
