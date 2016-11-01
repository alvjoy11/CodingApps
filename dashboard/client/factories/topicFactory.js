app.factory('TopicFactory', ['$http', function($http){
	var factory = {};

	factory.getTopics = function(callback){
		$http({
			method: "GET",
			url: "/topics"
		}).then(function(res){
			callback(res.data);
		}, function(res){
			console.log(res);
		});
	}

	factory.createTopic = function(topic, callback){
		$http({
			method: "POST",
			url: "/topics",
			data: topic
		}).then(function success(){
			callback();
		}, function failure(res){
			 console.log(res);
		});
	}
	factory.getTopic = function(topicId, callback){
		$http({
			method: "GET",
			url: '/topics/'+topicId
		}).then(function success(res){
			callback(res.data);
		});
	}
	return factory;
}])
