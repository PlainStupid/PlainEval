'use strict';

angular.module('evaluationApp')
    .controller('MainCtrl', ['$scope', '$location', 'UserService',
        function($scope, $location, UserService) {

            $scope.user = UserService.getUser();

            if (($scope.user === '') || ($scope.user === undefined)) {
                $scope.eval = 'login';
                $scope.evalText = 'Login';
                $scope.notification = 'Vinsamlegast skráðu þig inn!'
                $scope.hideme = true;
            } else {
                $scope.eval = 'mycourses';
                $scope.evalText = 'My Courses';
                $scope.notification = 'Velkomin/nn ' + $scope.user.User.FullName;
                $scope.hideme = false;
            }
        }
    ]);
