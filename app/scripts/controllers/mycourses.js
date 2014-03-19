'use strict';

angular.module('evaluationApp')
    .controller('MyCoursesCtrl', ['$scope', '$http', '$location', 'evalConfig', 'UserService',
        function($scope, $http, $location, evalConfig, UserService) {
            $scope.user = UserService.getUser();

            var myHeader = {
                headers: {
                    'Authorization': 'Basic ' + $scope.user.Token
                }
            };


            $http
                .get(evalConfig.apiEndpoint + 'api/v1/my/courses', myHeader)
                .success(function(data, status, headers, config) {
                    $scope.userCourses = '';

                    if (status === 200) {
                        $scope.userCourses = data;
                        $http
                            .get(evalConfig.apiEndpoint + 'api/v1/my/evaluations', myHeader)
                            .success(function(dataTotal, status, headers, config) {
                                $scope.totalEval = dataTotal;
                            });

                    }
                })
                .error(function(data, status, headers, config) {});
        }
    ]);
