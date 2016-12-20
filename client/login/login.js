console.log('LOGIN.JS LOADED');

angular.module('classMaker.login', [])
  .controller('loginController', function ($scope, $window, $location, $http) {
    $scope.user = {};

    $scope.signup = function (user) {
      console.log('IN LOGIN CONTROLLER', user);
      $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
      });
    };
  });
