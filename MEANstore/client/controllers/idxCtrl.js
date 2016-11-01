app.controller('IndexController', function($scope, CustomerFactory, ProductFactory, OrderFactory){
  console.log('indexController');
  $scope.customers = [];
  $scope.products = [];
	$scope.orders = [];

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
	// getAllProducts();

	function getAllOrders(){
		OrderFactory.getOrders()
		.then(function(serverResponse){
			$scope.orders = serverResponse.data;
		});
	}
	getAllOrders();

});
