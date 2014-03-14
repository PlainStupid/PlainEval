'use strict';

angular.module('evaluationApp')
    .controller('LoginCtrl', ['$scope', '$http', 'evalConfig',
        function($scope, $http, evalConfig) {

            $scope.loginSubmit = function() {
                $http
                    .post(evalConfig.apiEndpoint + 'api/v1/login', {
                        'user': $scope.user,
                        'pass': $scope.pass
                    })
                    .success(function(data, status, headers, config) {
                        $scope.message = data;
                    })
                    .error(function(data, status, headers, config) {
                        $scope.message = 'Username or password error';
                    });
            };

        }
    ]);
