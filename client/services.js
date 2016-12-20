angular.module('classMaker.services', [])
  .factory('Login', function($http, $location, $window) {
    var signup = function (user) {
      return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
      });
    };
    return {
      signup: signup
    };
  });
