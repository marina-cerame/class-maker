console.log('CLASSROOM.JS LOADED');

angular.module('classMaker.classroom', [])
  .controller('classroomController', function ($scope, $window, $location, $http, $rootScope) {
    $scope.student = {
      teacherName: $rootScope.thisUser,
      className: $rootScope.thisClass
    };

    $scope.addStudent = function(student) {
      $http({
        method: 'POST',
        url: '/api/students/addStudent',
        data: student
      })
      .then(function(students) {
        console.log(students);
        $scope.classStudents = students;
        console.log($scope);
      });

    };
  });
