'use strict';

angular.module('evaluationApp')
    .controller('EvaluationCtrl', ['$scope', '$http', '$location', '$routeParams', 'evalConfig', 'UserService',
        function($scope, $http, $location, $routeParams, evalConfig, UserService) {

            $scope.user = UserService.getUser();
            $scope.CourseID = $routeParams.Course;

            var myHeader = {
                headers: {
                    'Authorization': 'Basic ' + $scope.user.Token
                }
            };
            var crap = [];

            $http
                .get(evalConfig.apiEndpoint + 'api/v1/my/evaluations', myHeader)
                .success(function(data, status, headers, config) {
                    $scope.evaluations = data;
                    /*for (var i = 0; i < data.length; i++) {
                        if (data[i].CourseID === $scope.CourseID) {
                            $http
                                .get(evalConfig.apiEndpoint + 'api/v1/courses/' + $scope.CourseID + '/' + data[i].Semester + '/evaluations/' + data[i].ID, myHeader)
                                .success(function(data2, status, headers, config) {
                                    crap.push(data2);
                                });
                        }
                    }*/

                });

            $scope.evaluationsName = crap;
        }
    ]);
