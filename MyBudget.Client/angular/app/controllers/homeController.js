'use strict';

app.controller('homeController', ['$scope', '$location', 'loginService', 'cashService', 'debitCardsService', 'expenseService', 'budgetService',
    function ($scope, $location, loginService, cashService, debitCardsService, expenseService, budgetService) {
        if (!loginService.islogged()) {
            $location.path('/login');
        } else {
            $scope.username = loginService.getLoggedUsername();
            $scope.cashBalance = cashService.getCashBalance();
            $scope.cardsBalance = debitCardsService.getDebitCardsBalance();
            $scope.totalExpensesAmount = expenseService.getTotalExpensesAmount();
            $scope.monthBudget = budgetService.getMonthBudget();
            $scope.currentMonthIncomeAmount = cashService.getCurrentMonthCashIncome() + debitCardsService.getCurrentMonthDebitCardsIncomeBalance();
            $scope.currentMonthExpensesAmount = expenseService.getCurrentMonthExpensesAmount();
            
            $scope.totalBalance = function () {
                return $scope.cashBalance + $scope.cardsBalance - $scope.totalExpensesAmount;
            };
            $scope.currentMonthTotal = function () {
                return $scope.currentMonthIncome - $scope.currentMonthExpenses;
            };
            $scope.currentMontTotalAmount = function () {
                return $scope.currentMonthIncomeAmount - $scope.currentMonthExpensesAmount;
            };
            $scope.logout = function () {
                loginService.logout();
                $location.path('/login');
            };
        }
    }])