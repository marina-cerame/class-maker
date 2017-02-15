/* global angular */

angular.module('classMaker.services', [])
  .factory('Login', function ($http) {
    const signup = function (user) {
      return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user,
      });
    };
    return { signup };
  });
