'use strict';

angular.module('evaluationApp')
    .controller('MainCtrl', ['$scope', '$location', 'UserService',
        function($scope, $location, UserService) {

            if ((UserService.getUser() === '') || (UserService.getUser() === undefined)) {
                $location.path('/login');
            }
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
    ]);
