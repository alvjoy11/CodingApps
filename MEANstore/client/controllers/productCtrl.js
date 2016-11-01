app.controller('ProductController', function($scope, ProductFactory){
	console.log('ProductController');
	$scope.products = [];
	getAllProducts();

	function getAllProducts(){
		ProductFactory.getProducts()
		.then(function(serverResponse){
			$scope.products = serverResponse.data;
		})
	}

  $scope.createProduct = function(){
    ProductFactory.createProduct($scope.newProduct)
    .then(function(){$scope.newProduct = {};})
    .then(getAllProducts)
  }
	$scope.deleteProduct = function(id){
    console.log("hi");
    ProductFactory.deleteProduct(id)
    .then(getAllProducts)
  }

	// function getProdById(){
	// 	ProductFactory.getProduct($routeParams.id)
	// 	.then(function(serverResponse){
	// 		$scope.product = serverResponse.data;
	// 		console.log(serverResponse.data);
	// 	})
	// }
	// getProdById($routeParams.id);

})
