'use strict';

angular.module('evaluationApp')
    .controller('MamaCtrl', ['$scope', '$http', '$location', '$routeParams', 'evalConfig', 'UserService',
        function($scope, $http, $location, $routeParams, evalConfig, UserService) {
            var route = $routeParams.ID;
            $scope.user = UserService.getUser();
            $scope.CourseID = $routeParams.Course;
            var myHeader = {
                headers: {
                    'Authorization': 'Basic ' + $scope.user.Token
                }
            };
            if ((route === '') || (route === undefined)) {
                $http
                    .get(evalConfig.apiEndpoint + 'api/v1/evaluationtemplates', myHeader)
                    .success(function(data, status, headers, config) {
                        $scope.templates = data;
                    });
            } else {
                $http
                    .get(evalConfig.apiEndpoint + 'api/v1/evaluationtemplates/1005', myHeader)
                    .success(function(data, status, headers, config) {
                        $scope.templates = data;
                    });

            }
        }
    ]);
