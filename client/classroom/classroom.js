console.log('CLASSROOM.JS LOADED');

angular.module('classMaker.classroom', [])
  .controller('classroomController', function ($scope, $window, $location, $http, $rootScope) {
    $scope.student = {
      teacherName: $rootScope.thisUser,
      className: $rootScope.thisClass
    };

    $scope.sortOrder = 'firstName';

    $scope.setOrder = function(sort) {
      if (sort === 'referrals') {
        sort = '-referrals';
      }
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

    $scope.seatingChart = {
      'width': '610px',
      'border': '1px solid black',
      'height': '800px',
      'padding': '5px'
    };

    $scope.desks = {
      'width': '50px',
      'height': '50px',
      'border': '1px solid gray',
      'padding': '1px',
      'margin': '1px',
      'float': 'left'
    };

    $scope.setRows = function(rows) {
      rows = Number(rows);
      let size = 600 - (rows * 4);
      size = Math.floor(size / rows);
      $scope.desks['width'] = size + 'px';
    };

  });
