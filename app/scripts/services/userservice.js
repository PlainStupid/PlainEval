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
                    console.log('User is now set: ' + user);
                },
                getUser: function() {
                    user = ipCookie('UserInfo');
                    console.log('current user is ' + user);
                    return user;
                },
                delUser: function() {
                    console.log('Deleting user');
                    ipCookie.remove('UserInfo');
                    user = '';
                    console.log('User is now: ' + user);
                }
            };
        }
    ]);
