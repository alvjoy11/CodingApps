app.controller('newController', ['$scope', 'friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams){
  $scope.friends = [];

  $scope.getFriends = function(){
    friendsFactory.index(function(data){
      $scope.friends = data;
    })
  };

  $scope.getFriends();

  $scope.create = function(data){
    console.log('Hello')
    // console.log(data);
    friendsFactory.create(data, function(){
      $scope.newFriend = {};
      $scope.getFriends();
    })
  };

  $scope.delete = function(id){
    console.log(id);
    friendsFactory.delete(id, function(){
      $scope.getFriends();
  })
 }

  $scope.show = function(friend){
    $location.url('/show/'+friend._id);
  }

  $scope.edit = function(friend){
    $location.url('/edit/'+friend._id)
  }

}]);
