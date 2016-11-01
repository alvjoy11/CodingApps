app.factory('CommentFactory', ['$http', function($http){
	var factory = {};

	factory.createComment = function(comment, topicId, callback){
		$http({
			method: "POST",
			url: "/answers/"+topicId+"/comments/",
			data: comment
		}).then(function success(){
			callback();
		}, function failure(res){
			console.log(res);
		});
 }
 factory.dislike = function(id, callback){
	 $http({
		 method: "GET",
		 url: "/comments/dislike/"+id,
	 }).then(function success(){
		 callback();
	 }, function failure(res){
		 console.log(res);
	 });
 }
 factory.like = function(id, callback){
	 $http({
		 method: "GET",
		 url: "/comments/like/"+id,
	 }).then(function success(){
		 callback();
	 }, function failure(res){
		 console.log(res);
	 });
 }
		return factory;
}])
