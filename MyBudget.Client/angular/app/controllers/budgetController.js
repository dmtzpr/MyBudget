'use strict';

app.controller('budgetController', ['$scope', '$location', 'budgetService',
    function ($scope, $location, budgetService) {
        $scope.statusBarTitle = 'Budget';
        $scope.monthBudget = budgetService.getMonthBudget();
        
        $scope.okButtonClick = function () {
            if ($scope.monthBudget > 0) {
                budgetService.setNewMonthBudget($scope.monthBudget);
                $location.path('/home');
            }
        };
        $scope.cancelButtonClick = function () {
            $location.path('/home');
        };
    }]);