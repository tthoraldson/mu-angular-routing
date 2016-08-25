var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      //controller: "HomeController"
    })
    .when('/mystic', {
      templateUrl: '/views/mystic.html',
      //controller: "OrdersController"
    })
    .when('/valor', {
      templateUrl: '/views/valor.html',
      //controller: "OrdersController"
    })
    .when('/instinct', {
      templateUrl: '/views/instinct.html',
      //controller: "OrdersController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
