'use strict';

app.controller('loginController', ['$scope', '$location', 'loginService',
    function ($scope, $location, loginService) {
        $scope.message = '';
        $scope.username = '';
        $scope.password = '';
        
        $scope.login = function (username, password) {
            loginService.login(username, password, function (response) {
                if (response.success) {
                    $location.path('/home');
                } else {
                    $scope.username = '';
                    $scope.password = '';
                    $scope.message = response.message;
                }
            });
        };
    }]);