/* global angular */
angular.module('classMaker', ['classMaker.login', 'classMaker.class', 'classMaker.classroom', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', { templateUrl: 'login/login.html' })
      .when('/signup', { templateUrl: 'login/signup.html' })
      .when('/classes', { templateUrl: 'classes/classes.html' })
      .when('/classroom', { templateUrl: 'classroom/classroom.html' });
  });
