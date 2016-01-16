'use strict';

app.controller('barChartController', ['$scope', '$location', 'expenseService', 'debitCardsService', 'cashService',
    function ($scope, $location, expenseService, debitCardsService, cashService) {
        var currentMonthExpensesAmount = expenseService.getCurrentMonthExpensesAmount(),
            currentMonthIncomeAmount = cashService.getCurrentMonthCashIncome() + debitCardsService.getCurrentMonthDebitCardsIncomeBalance(),
            currentMontTotalAmount = currentMonthIncomeAmount - currentMonthExpensesAmount;

        $scope.statusBarTitle = 'Current month balance bar chart';
        $scope.labels = ["Income", "Total", "Expenses"];
        $scope.data = [[currentMonthIncomeAmount, currentMontTotalAmount, currentMonthExpensesAmount]];

        $scope.okButtonClick = function () {
            $location.path('/home');
        };
        $scope.cancelButtonClick = function () {
            $location.path('/home');
        };
    }]);