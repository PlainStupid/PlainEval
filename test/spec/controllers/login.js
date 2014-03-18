'use strict';

//var url = 'http://dispatch.hir.is/h03';

describe('Controller: LoginCtrl', function() {

    // load the controller's module
    beforeEach(module('evaluationApp'));

    var LoginCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope
        });
    }));


    it('should get 401 error ', function() {
       /* var body = {
            user: 'ddd',
            pass: 'adad'
        };

        $httpBackend.expectPOST('POST', url + '/api/v1/login', body)
            .respond(401);*/


    });

});
