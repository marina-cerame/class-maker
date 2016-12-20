console.log('CLASSES.JS LOADED');

angular.module('classMaker.class', [])
  .controller('classController', function ($scope, $window, $location, $http, $rootScope) {
    $scope.classData = {
      teacher: $rootScope.thisUser
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
        $scope.allClasses = result;
      });
    };

  });
