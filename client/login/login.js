console.log('LOGIN.JS LOADED');

angular.module('classMaker.login', [])
  .controller('loginController', function ($scope, $window, $location, $http, $rootScope) {
    $scope.user = {};
    $scope.errorMessage = '';

    $scope.signup = function (user) {
      console.log('IN LOGIN CONTROLLER', user);
      $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
      })
      .then(function(result) {
        console.log(result);
        $rootScope.thisUser = user.username;
        console.log($rootScope.thisUser, 'THIS IS THE LOGGED IN USER');
        $location.path('/classes');
      });
    };

    $scope.login = function(user) {
      console.log('IN LOGIN CONTROLLER', user);
      let inputuser = user.username;
      let inputpass = user.password;
      $http({
        method: 'POST',
        url: '/api/users/login',
        data: user
      })
        .then(function(result) {
          console.log('HTTP LOGIN RESULT', result);
          if (result.data !== '' && result.data.password === inputpass) {
            $rootScope.thisUser = user.username;
            console.log($rootScope.thisUser, 'THIS IS THE LOGGED IN USER');
            $location.path('/classes');
          } else {
            $scope.errorMessage = 'Incorrect username or password. Please try again.';
          }
        });
    };
  });
