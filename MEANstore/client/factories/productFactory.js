app.factory('ProductFactory', function($http){
	var factory = {};

	factory.getProducts = function(){
		return $http.get('/products')
	}
	factory.createProduct = function(newProduct){
		return $http.post('/products', newProduct)
	}
	factory.deleteProduct = function(id){
		return $http.delete('/products/'+id)
	}
	return factory;
})
