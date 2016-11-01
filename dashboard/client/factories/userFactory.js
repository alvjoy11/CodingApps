app.factory('UserFactory', ['$http', function($http){
	var factory = {};

	factory.login = function(user, callback){
		$http({
			method: "POST",
			data: user,
			url: '/login'
		}).then(function success(res){
			callback(res);
		}, function error(res){
			 console.log(res);
		});
	}

	factory.register = function(user, callback){
		$http({
			method: "POST",
			data: user,
			url: '/register'
		}).then(function success(res){
			callback(res);
		}, function error(res){
			 console.log(res);
		});
	}

	factory.getUser = function(userId, callback){
		$http({
			method: "GET",
			url: '/users/'+userId
		}).then(function success(res){
			callback(res.data);
		});
	}

	return factory;
}])
