'use strict';

app.controller('cashController', ['$scope', '$location', 'cashService',
    function ($scope, $location, cashService) {
        $scope.statusBarTitle = 'Add cash';
        $scope.cashModel = {
            amount: 0,
            date: new Date(),
            note: ''
        },

        $scope.openDatepicker = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.okButtonClick = function () {
            cashService.addCash($scope.cashModel);
            $location.path('/home');
        };
        $scope.cancelButtonClick = function () {
            $location.path('/home');
        };
    }]);