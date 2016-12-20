console.log('CLASSES.JS LOADED');

angular.module('classMaker.class', [])
  .controller('classController', function ($scope, $window, $location, $http, $rootScope) {
    $scope.classData = {
      teacher: $rootScope.thisUser
    };

    $scope.getClasses = function() {
      $http({
        method: 'POST',
        url: '/api/classrooms/classes',
        data: $scope.classData
      }).then(function(result) {
        $scope.allClasses = result;
      });
    };

    $scope.newClass = function(classData) {
      console.log(classData);
      $http({
        method: 'POST',
        url: '/api/classrooms/newclass',
        data: classData
      })
      .then(function(result) {
        console.log('NEW CLASS RESULT', result);
        $scope.classData.name = '';
        $scope.allClasses = result;
      });
    };

    $scope.openClassroom = function(className) {
      console.log('OPENING CLASSROOM ', className);
      $rootScope.thisClass = className;

      $location.path('/classroom');
    };

  });
