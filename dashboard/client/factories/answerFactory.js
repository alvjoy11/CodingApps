app.factory('AnswerFactory', ['$http', function($http){
	var factory = {};

	factory.createAnswer = function(answer, topicId, callback){
		$http({
			method: "POST",
			url: "/topics/"+topicId+"/answers/",
			data: answer
		}).then(function success(){
			callback();
		}, function failure(res){
			console.log(res);
		});
	}

	return factory;
}])
