'use strict';

angular.module('evaluationApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'config'
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
