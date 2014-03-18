'use strict';

angular.module('evaluationApp')
    .controller('LogoutCtrl', ['$scope', '$location', 'UserService',
        function($scope, $location, UserService) {
            $scope.message = 'Logging out';
            UserService.delUser();
            $location.path('/');
        }
    ]);
