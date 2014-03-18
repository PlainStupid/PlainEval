'use strict';

angular.module('evaluationApp')
    .controller('UserCtrl', ['$scope', 'UserService',
        function($scope, UserService) {
            $scope.awesomeThings = UserService.getUser();
        }
    ]);
