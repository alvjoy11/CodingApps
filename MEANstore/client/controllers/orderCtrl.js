app.controller('OrderController', function($scope, CustomerFactory, OrderFactory, ProductFactory){
  $scope.orders = [];
  $scope.customers = [];
  $scope.products = [];

  function getAllOrders(){
    OrderFactory.getOrders()
    .then(function(serverResponse){
      $scope.orders = serverResponse.data;
    });
  }
  getAllOrders();

  function getAllCustomers(){
    CustomerFactory.getCustomers()
    .then(function(serverResponse){
      $scope.customers = serverResponse.data;
    });
  }
  getAllCustomers();

  function getAllProducts(){
    ProductFactory.getProducts()
    .then(function(serverResponse){
      $scope.products = serverResponse.data;
    });
  }
  getAllProducts();

  $scope.createOrder = function(){
    OrderFactory.createOrder($scope.newOrder)
    .then(function(){
      $scope.newOrder = {};
    })
    .catch(function(err){
      console.log(err)
    })
    .then(getAllOrders)
  }
  $scope.deleteOrder = function(id){
    console.log("hi");
    OrderFactory.deleteOrder(id)
    .then(getAllOrders)
  }
})
