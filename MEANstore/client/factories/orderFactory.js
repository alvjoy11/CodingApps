app.factory('OrderFactory', function($http){
	var factory = {};

	factory.getOrders = function(){
		return $http.get('/orders')
	}
	factory.createOrder = function(newOrder){
		return $http.post(`/orders/${newOrder._product}/${newOrder._customer}`, newOrder)
		.then(function(res){
			if(!res.data){
				throw new Error('Your purchase is not complete')
			}
		})
	}
	factory.getRecentOrders = function(){
		return $http.get('/orders/recent')
	}
	factory.deleteOrder = function(id){
		return $http.delete('/orders/'+id)
	}
	return factory;
})
