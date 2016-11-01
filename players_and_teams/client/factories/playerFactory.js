app.factory('playerFactory', function(){
	var players = [];
	console.log(players);
	var factory = {};
	factory.getPlayers = function(callback){
		callback(players);
	}
	factory.addPlayer = function(player){
		player.team = ''; //new players dont belong to a team yet
		players.push(player);
	}
	factory.delete = function($index){ //simply delete a player
		players.splice($index, 1);
	}
	// here we can set the player's team name
	factory.addPlayerToTeam =  function(data){
		players[data.playerIdx].team = data.team;
	}
	// here we reset a player's team name to an empty string
	factory.removePlayerFromTeam = function($index){
		players[$index].team = '';
	}
	return factory;
})
