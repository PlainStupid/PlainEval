'use strict';

angular.module('evaluationApp')
    .controller('LoginCtrl', ['$scope', '$http', '$location', 'evalConfig', 'UserService',
        function($scope, $http, $location, evalConfig, UserService) {

            $scope.loginSubmit = function() {
                $http
                    .post(evalConfig.apiEndpoint + 'api/v1/login', {
                        'user': $scope.user,
                        'pass': $scope.pass
                    })
                    .success(function(data, status, headers, config) {
                        if (status === 401) {
                            $scope.message = 'Vitlaust notendanafn eða lykilorð';
                            $scope.showMessage = true;
                            $scope.messageType = 'Villa: ';
                            $scope.messageAlert = 'alert-warning';
                            $scope.$apply();
                        } else if (status === 200) {
                            // Set user info to cookie so we can come again without login in
                            UserService.setUser(data);

                            // Since we got 200 from the server we dont need to be on login
                            // page. Redirect to /user
                            $location.path('/mycourses');
                        }
                    })
                    .error(function(data, status, headers, config) {
                        if (status === 401) {
                            $scope.message = 'Vitlaust notendanafn eða lykilorð';
                            $scope.showMessage = true;
                            $scope.messageType = 'Aðvörun: ';
                            $scope.messageAlert = 'alert-warning';
                            $scope.$apply();
                        } else {
                            $scope.message = 'Villa kom upp í samskiptum';
                            $scope.messageType = 'Villa: ';
                            $scope.messageAlert = 'alert-danger';
                            $scope.showMessage = true;
                            $scope.$apply();
                        }
                    });
            };

            $scope.switchBool = function(value) {
                $scope[value] = !$scope[value];
            };

        }
    ]);
