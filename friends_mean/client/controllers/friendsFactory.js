console.log('Friends Factory!');

app.factory('friendsFactory', ['$http', function($http){
		var factory = {};

	factory.create = function(newFriend, callback){
		console.log(newFriend);
		$http.post('/friends', newFriend).then(callback);
	};

	factory.update = function(friend, callback){
      console.log('friend update in factory', friend)
      $http.put('/friends/' + friend._id, friend).then(callback)
	};

	factory.show = function(id, callback){
		$http.get('/friends/'+ id).then(callback);
	};

	factory.index = function(callback){
		//call factory method if you want to update / set the friends variable
		$http.get('/friends').then(function(returned_data){
			console.log(returned_data.data);
			friends = returned_data.data;
			callback(friends);
		});
	};
	factory.delete = function(id, callback){
		$http.delete('/friends/'+ id).then(callback);
		friends.splice(id, 1)
	};

	return factory;
}]);
