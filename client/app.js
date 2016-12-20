console.log('PLEASE FOR THE LOVE OF GOD WORK');


angular.module('classMaker', ['ngRoute'])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'login/login.html'
      })
      .when('/signup', {
        templateUrl: 'login/signup.html'
      });
  });
