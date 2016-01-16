'use strict';

app.controller('pieChartController', ['$scope', '$location', 'expenseService', 'debitCardsService', 'cashService',
    function ($scope, $location, expenseService, debitCardsService, cashService) {
        var currentMonthExpensesAmount = expenseService.getCurrentMonthExpensesAmount(),
            currentMonthIncomeAmount = cashService.getCurrentMonthCashIncome() + debitCardsService.getCurrentMonthDebitCardsIncomeBalance(),
            currentMontTotalAmount = currentMonthIncomeAmount - currentMonthExpensesAmount;

        $scope.statusBarTitle = 'Current month balance pie chart';
        $scope.labels = ["Income", "Total", "Expenses"];
        $scope.data = [currentMonthIncomeAmount, currentMontTotalAmount, currentMonthExpensesAmount];
        
        $scope.okButtonClick = function () {
            $location.path('/home');
        };
        $scope.cancelButtonClick = function () {
            $location.path('/home');
        };
    }]);