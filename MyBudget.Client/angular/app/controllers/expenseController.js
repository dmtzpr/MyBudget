'use strict';

app.controller('expenseController', ['$scope', '$location', 'expenseService', 'debitCardsService', 'cashService',
    function ($scope, $location, expenseService, debitCardsService, cashService) {
        $scope.statusBarTitle = 'Add expense';
        $scope.isAddCategoryShowed = false;
        $scope.isAddSubcategoryShowed = false;
        $scope.newCategoryName = '';
        $scope.newSubcategoryName = '';
        $scope.expenseModel = {
            categoryId: null,
            subcategoryId: null,
            amount: 0,
            date: new Date(),
            note: ''
        };
        $scope.selectedPaymentTypeId = null;
        $scope.paymentTypes = [];
        $scope.paymentTypes = debitCardsService.getEachDebitCardBalance();
        $scope.paymentTypes.push(cashService.getCashBalanceModel());
        $scope.categories = expenseService.getCategories();

        $scope.updateSubcategorySelect = function () {
            $scope.expenseModel.subcategoryId = '';
            if ($scope.expenseModel.categoryId) {
                $scope.subcategories = expenseService.getSubcategories($scope.expenseModel.categoryId);
            }
        };
        $scope.okButtonClick = function () {
            if ($scope.isAddCategoryShowed) {
                $scope.newCategoryName && expenseService.addCategory($scope.newCategoryName);
                $scope.isAddCategoryShowed = false;
            } else if ($scope.isAddSubcategoryShowed) {
                $scope.newSubcategoryName && expenseService.addSubcategory($scope.expenseModel.categoryId, $scope.newSubcategoryName);
                $scope.isAddSubcategoryShowed = false;
            } else {
                if ($scope.expenseModel.amount > 0 && $scope.selectedPaymentTypeId !== null && $scope.expenseModel.categoryId !== null && $scope.expenseModel.subcategoryId !== null) {
                    if ($scope.selectedPaymentTypeId === 0) {
                        if (cashService.getCashBalance() >= $scope.expenseModel.amount) {
                            cashService.addExpense($scope.expenseModel);
                            expenseService.addExpense($scope.expenseModel);
                            $location.path('/home');
                        } else {
                            alert('too little money');
                        }

                    } else {
                        if (debitCardsService.getDebitCardBlanceById($scope.selectedPaymentTypeId) >= $scope.expenseModel.amount) {
                            debitCardsService.addExpense($scope.selectedPaymentTypeId, $scope.expenseModel);
                            expenseService.addExpense($scope.expenseModel);
                            $location.path('/home');
                        } else {
                            alert('too little money');
                        }
                    }
                }
            }
        };
        $scope.cancelButtonClick = function () {
            if ($scope.isAddCategoryShowed || $scope.isAddSubcategoryShowed) {
                $scope.isAddCategoryShowed = false;
                $scope.isAddSubcategoryShowed = false;
            } else {
                $location.path('/home');
            }
        };
        $scope.deleteExpenseCategory = function (categoryId) {
            if (categoryId) {
                expenseService.deleteCategory(categoryId);
                $scope.subcategories = [];
                $scope.categories = expenseService.getCategories();
            }
        };
        $scope.deleteExpenseSubcategory = function (categoryId, subcategoryId) {
            if (categoryId && subcategoryId) {
                expenseService.deleteSubcategory(categoryId, subcategoryId);
                $scope.updateSubcategorySelect();
            }
        };
        $scope.showAddCategoryForm = function () {
            $scope.statusBarTitle = 'Add new category';
            $scope.newCategoryName = '';
            $scope.isAddCategoryShowed = true;

        };
        $scope.showAddSubcategoryForm = function () {
            if ($scope.expenseModel.categoryId) {
                $scope.statusBarTitle = 'Add new subcategory';
                $scope.newSubcategoryName = '';
                $scope.selectedCategoryName = expenseService.getCategoryName($scope.expenseModel.categoryId);
                $scope.isAddSubcategoryShowed = true;
            } else {
                alert('please choose category');
            }
        };
        $scope.openDatepicker = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };
    }]);
