var app = angular.module('app', ['ngRoute']);

app.config($routeProvider, $httpProvider){
  $routeProvider
    .when('/login', {
      templateUrl: '/login/login.html',
    })
};
