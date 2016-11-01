var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_dashboard.html',
      controller: 'IndexController'
    })
    .when('/products', {
      templateUrl: 'partials/_products.html',
      controller: 'ProductController'
    })
    .when('/orders', {
      templateUrl: 'partials/_orders.html',
      controller: 'OrderController'
    })
    .when('/customers', {
      templateUrl: '/partials/_customer.html',
      controller: 'CustomerController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
