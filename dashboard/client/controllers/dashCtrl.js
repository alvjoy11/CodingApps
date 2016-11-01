app.controller('DashController', ['$scope', 'TopicFactory', function($scope, TopicFactory){
	console.log("Bonjour");
		$scope.topics = [];

	TopicFactory.getTopics(function(topics){
		$scope.topics = topics;
	})

	$scope.createTopic = function(topic){
		TopicFactory.createTopic(topic, function(){
			TopicFactory.getTopics(function(topics){
				$scope.topics = topics;
				$scope.newTopic = {};
			})
			console.log("topic created!");
		})
	}

}]);
