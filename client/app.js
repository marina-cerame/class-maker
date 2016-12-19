var classMaker = angular.module('classMaker', ['ngRoute']);

classMaker.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/login/login.html',
    });
});
