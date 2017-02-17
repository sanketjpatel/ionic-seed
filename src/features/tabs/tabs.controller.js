    (function(angular) {
        'use strict';
        angular
            .module('causeConnect.tabs')
            .controller('TabsController', TabsController);

        // @ngInject
        function TabsController($window, AuthService, $state, $ionicPush) {
            var tabsVm = this;

            tabsVm.isSeeker = false;

            //tabsVm.validateLogin = validateLogin;
            tabsVm.registerForPush = registerForPush;

            /*function validateLogin() {
                AuthService.authenticate(tabsVm.email, tabsVm.password)
                    .then(function(resp) {
                        _setUpPush();
                    }, function() {

                    });
            }*/

            function registerForPush() {
                $ionicPush.register().then(function(t) {
                    return $ionicPush.saveToken(t);
                }).then(function(t) {
                    console.log('Token saved:', t.token);
                });
            }


            /*function _setUpPush() {
                $window.Ionic.Auth.login('basic', {}, {
                    'email': tabsVm.email,
                    'password': tabsVm.email
                }).then(function (user) {
                    AuthService.registerForPush(user, true);
                }, function() {
                    // or register and then login
                    $window.Ionic.Auth.signup({
                        'email': tabsVm.email,
                        'password': tabsVm.email
                    }).then(function (res) {
                        $window.Ionic.Auth.login('basic', {}, {
                            'email': tabsVm.email,
                            'password': tabsVm.email
                        }).then(function (user) {
                            AuthService.registerForPush(user, true);
                        }, function() {

                        });
                    }, function() {

                    });
                });
            }*/
        }
    }(angular));
