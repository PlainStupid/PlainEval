'use strict';

angular.module('evaluationApp')
    .factory('UserService', ['ipCookie',

        function(ipCookie) {
            var user;
            return {
                setUser: function(newuser) {
                    user = newuser;
                    ipCookie('UserInfo', user, {
                        expires: 3
                    });
                },
                getUser: function() {
                    user = ipCookie('UserInfo');
                    return user;
                },
                delUser: function() {
                    ipCookie.remove('UserInfo');
                    user = '';
                }
            };
        }
    ]);
