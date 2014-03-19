'use strict';

//var url = 'http://project3api.haukurhaf.net/';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('evaluationApp'));

    var MainCtrl,
        scope,
        httpMock,
        evalConfigNew;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $httpBackend,evalConfig) {
        scope = $rootScope.$new();
        httpMock = $httpBackend;
        evalConfigNew = evalConfig;
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should show "Vinsamlegast skráðu þig inn!"', function() {
        expect(scope.notification === 'Vinsamlegast skráðu þig inn!');
    });

    it('should show Velkomin/nn Ragnar Pálsson', function() {
        var postData = {
            user: 'ragnarp12',
            pass: '12345'
        };

        //$httpBackend.whenPOST(url + 'api/v1/login', postData).respond(401);
        httpMock.expectPOST(evalConfigNew.apiEndpoint + 'api/v1/login', postData).respond(200);
        expect(scope.notification === 'Velkomin/nn Ragnar Pálsson');

    });
});
