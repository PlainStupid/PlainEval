'use strict';

angular.module('evaluationApp', [
    //'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'config',
    'ivpusic.cookie'
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
            .when('/logout', {
                templateUrl: 'views/logout.html',
                controller: 'LogoutCtrl'
            })
            .when('/user', {
                templateUrl: 'views/user.html',
                controller: 'UserCtrl'
            })
            .when('/mycourses', {
                templateUrl: 'views/mycourses.html',
                controller: 'MyCoursesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    });
