app.controller('CustomerController', function($scope, CustomerFactory, $location){
  $scope.customers = [];

  function getAllCustomers(){
    CustomerFactory.getCustomers()
    .then( function(serverResponse){
      $scope.customers = serverResponse.data;
    })
  }
  getAllCustomers();

  $scope.createCustomer = function(){
    CustomerFactory.createCustomer($scope.newCustomer)
    .then( function(serverResponse){
      console.log(serverResponse.data)
      $scope.newCustomer = {};
      getAllCustomers();
      $location.path('/customers');
    })
    .catch( function(err){
      console.log(err)
    })
  }
  $scope.deleteCustomer = function(id){
    console.log("hi");
    CustomerFactory.deleteCustomer(id)
    .then(getAllCustomers)
  }
})
