'use strict';

app.controller('debitCardsController', ['$scope', '$location', 'debitCardsService',
    function ($scope, $location, debitCardsService) {
        $scope.statusBarTitle = 'Add balance to debit card';
        $scope.newDebitCardName = '';
        $scope.isAddDebitCardFormShowed = false;
        $scope.selectedCardId = null;
        $scope.replenishmentModel = {
            amount: 0,
            date: new Date(),
            note: ''
        },
        $scope.debitCards = debitCardsService.getDebitCards();

        $scope.okButtonClick = function () {
            if ($scope.isAddDebitCardFormShowed) {
                if ($scope.newDebitCardName !== '') {
                    debitCardsService.addDebitCard($scope.newDebitCardName);
                    $scope.debitCards = debitCardsService.getDebitCards();
                    $scope.isAddDebitCardFormShowed = false;
                    $scope.statusBarTitle = 'Add balance to debit card';
                }
            } else {
                if ($scope.selectedCardId && $scope.replenishmentModel.amount > 0) {
                    debitCardsService.rechargeDebitCard($scope.selectedCardId, $scope.replenishmentModel);
                    $location.path('/home');
                }
            }
        };
        $scope.cancelButtonClick = function () {
            if ($scope.isAddDebitCardFormShowed) {
                $scope.isAddDebitCardFormShowed = false;
                $scope.statusBarTitle = 'Add balance to debit card';
            } else {
                $location.path('/home');
            }
        },
        $scope.deleteDebitCard = function (debitCardId) {
            if (debitCardId > 0) {
                debitCardsService.deleteDebitCard(debitCardId);
                $scope.debitCards = debitCardsService.getDebitCards();
            }
        };
        $scope.showAddDebitCardForm = function () {
            $scope.newDebitCardName = '';
            $scope.statusBarTitle = 'Add new debit card';
            $scope.isAddDebitCardFormShowed = true;
        };
        $scope.openDatepicker = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
    }]);
