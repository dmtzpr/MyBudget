'use strict';

app.controller('settingsController', ['$scope', 'loginService',
    function ($scope, loginService) {
        $scope.logout = function () {
            loginService.logout();
        };
    }])