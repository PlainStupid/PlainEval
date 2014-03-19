'use strict';

angular.module('evaluationApp')
    .controller('MainCtrl', ['$scope', '$location', 'UserService',
        function($scope, $location, UserService) {

            $scope.user = UserService.getUser();

            if (($scope.user === '') || ($scope.user === undefined)) {
                $scope.userurl = 'login';
                $scope.userurlText = 'Login';
                $scope.notification = 'Vinsamlegast skráðu þig inn!';
                $scope.hideme = true;
            } else {
                $scope.userurl = 'mycourses';
                $scope.userurlText = 'My Courses';
                $scope.notification = 'Velkomin/nn ' + $scope.user.User.FullName;
                $scope.hideme = false;
            }
        }
    ]);
