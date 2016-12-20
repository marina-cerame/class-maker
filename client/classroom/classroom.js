console.log('CLASSROOM.JS LOADED');

angular.module('classMaker.classroom', [])
  .controller('classroomController', function ($scope, $window, $location, $http, $rootScope) {
    $scope.student = {
      teacherName: $rootScope.thisUser,
      className: $rootScope.thisClass
    };

    $scope.sortOrder = 'firstName';
    
    $scope.setOrder = function(sort) {
      return $scope.sortOrder = sort;
    };

    $scope.getStudents = function() {
      $http({
        method: 'POST',
        url: '/api/students/getStudents',
        data: {className: $rootScope.thisClass}
      })
      .then(function(students) {
        $scope.classStudents = students;
      });
    };

    $scope.addStudent = function(student) {
      $http({
        method: 'POST',
        url: '/api/students/addStudent',
        data: student
      })
      .then(function(students) {
        $scope.classStudents = students;
      });
    };
  });
