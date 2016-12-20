console.log('LOGIN.JS LOADED');

angular.module('classMaker.login', [])
  .controller('loginController', function ($scope, $window, $location, $http) {
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
            $location.path('/classes');
          } else {
            $scope.errorMessage = 'Incorrect username or password. Please try again.';
          }
        });
    };
  });
