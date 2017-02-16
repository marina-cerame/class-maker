/* global angular */

angular.module('classMaker.login', [])
  .controller('loginController', function ($scope, $window, $location, $http, $rootScope) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.signup = function (user) {
      $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user,
      })
      .then(function (result) {
        $rootScope.thisUser = user.username;
        $location.path('/classes');
      });
    };

    $scope.login = function(user) {
      const inputuser = user.username;
      const inputpass = user.password;
      $http({
        method: 'POST',
        url: '/api/users/login',
        data: user
      })
        .then(function (result) {
          console.log('HTTP LOGIN RESULT', result);
          if (result.data !== '' && result.data.password === inputpass) {
            $rootScope.thisUser = user.username;
            $location.path('/classes');
          } else {
            $scope.errorMessage = 'Incorrect username or password. Please try again.';
          }
        });
    };
  });
