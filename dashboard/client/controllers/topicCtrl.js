app.controller('TopicController', ['$scope', 'TopicFactory', '$routeParams', 'CommentFactory', 'AnswerFactory', function($scope, TopicFactory, $routeParams, CommentFactory, AnswerFactory){
	console.log("Hello");

	TopicFactory.getTopic($routeParams.id, function(topic){
		$scope.topic = topic;
		console.log(topic);
	})
	$scope.postAnswer = function(answer, topicId){
		AnswerFactory.createAnswer(answer, topicId, function(){
				TopicFactory.getTopic($routeParams.id, function(topic){
					$scope.topic = topic;
					$scope.answer = {};
					console.log(topic);
				})
		})
	}
	$scope.postComment = function(comment, answerId){
		CommentFactory.createComment(comment, answerId, function(){
				TopicFactory.getTopic($routeParams.id, function(topic){
					$scope.topic = topic;
					console.log(topic);
				})
		})
	}
	$scope.like = function(id){
		CommentFactory.like(id, function(){
				TopicFactory.getTopic($routeParams.id, function(topic){
					$scope.topic = topic;
					console.log(topic);
				})
		})
	}
	$scope.dislike = function(id){
		CommentFactory.dislike(id, function(){
				TopicFactory.getTopic($routeParams.id, function(topic){
					$scope.topic = topic;
					console.log(topic);
				})
		})
	}

}]);
