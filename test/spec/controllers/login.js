'use strict';

//var url = 'http://project3api.haukurhaf.net/';

describe('Controller: LoginCtrl', function() {

    // load the controller's module
    beforeEach(module('evaluationApp'));

    var LoginCtrl,
        scope,
        httpMock,
        evalConfigNew;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $httpBackend, evalConfig) {
        scope = $rootScope.$new();
        httpMock = $httpBackend;
        evalConfigNew = evalConfig;
        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope
        });
    }));


    it('shoud give back status code 200', function() {
        var postData = {
            user: 'ragnarp12',
            pass: '12345'
        };

        //$httpBackend.whenPOST(url + 'api/v1/login', postData).respond(401);
        httpMock.expectPOST(evalConfigNew.apiEndpoint + 'api/v1/login', postData).respond(200);
        //httpMock.flush();
    });

    it('shoud give back status code 401', function() {
        var postData = {
            user: 'ddd',
            pass: 'ddd'
        };

        //$httpBackend.whenPOST(url + 'api/v1/login', postData).respond(401);
        httpMock.expectPOST(evalConfigNew.apiEndpoint + 'api/v1/login', postData).respond(401);
        //httpMock.flush();
    });

});
