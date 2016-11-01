app.factory('teamFactory', function(){
	var teams = [];
	var factory = {};
	factory.getTeams =  function(callback){
		callback(teams);
	}
	factory.addTeam = function(team){ //this adds a team name
		teams.push(team);
	}
	factory.removeTeam = function($index){ // and this removes the team
		teams.splice(teams.indexOf($index), 1);
	}
	return factory;
})
