'use strict';

app.factory('debitCardsService', function () {
    //mock data
    var debitCardsCollection = [{
        id: 1,
        name: 'My favorite debit card',
        balance: 300,
        debitCardRecharges: [{
            amount: 300,
            date: '14.05.2015',
            note: "my first salary"
        }]
    }, {
        id: 2,
        name: 'Many dollars debit card',
        balance: 1500,
        debitCardRecharges: [{
            amount: 1500,
            date: '15.05.2015',
            note: "my second job first salary"
        }]
    }
    ];

    return {
        getDebitCards: function () {
            return debitCardsCollection;
        },

        addDebitCard: function (debitCardName) {
            debitCardsCollection.push({
                id: +Date.now(),
                name: debitCardName,
                balance: 0,
                debitCardRecharges: []
            });
        },

        deleteDebitCard: function (id) {
            var i = debitCardsCollection.length;

            while (i--) {
                if (debitCardsCollection[i].id === id) {
                    debitCardsCollection.splice(i, 1);
                }
            }
        },

        rechargeDebitCard: function (id, model) {
            var selectedDebitCard = this.getDebitCardById(id);

            selectedDebitCard.debitCardRecharges.push(model);
            selectedDebitCard.balance += model.amount;
            this.calculateDebitCardsBalance();
        },

        getDebitCardsBalance: function () {
            return this.calculateDebitCardsBalance();
        },
        getDebitCardById: function (id) {
            return debitCardsCollection.filter(function (debitCard) {
                return debitCard.id = id;
            })[0];
        },

        calculateDebitCardsBalance: function () {
            var debitCardsBalance = 0;

            debitCardsCollection.forEach(function (debitCard) {
                debitCardsBalance += debitCard.balance;
            });

            return debitCardsBalance;
        },

        getEachDebitCardBalance: function () {
            return debitCardsCollection.map(function (debitCard) {
                return {
                    id: debitCard.id,
                    name: debitCard.name,
                    balance: debitCard.balance
                };
            });
        },

        addExpense: function (debitCardId, expenseModel) {
            var debitCard = this.getDebitCardById(debitCardId);

            debitCard.balance -= expenseModel.amount;
            expenseModel.amount = -expenseModel.amount;
            debitCard.debitCardRecharges.push(expenseModel);
        },

        getDebitCardBlanceById: function (debitCardId) {
            var debitCardBalance = 0;

            if (debitCardsCollection.length > 0) {
                debitCardBalance = debitCardsCollection.filter(function (debitCard) {
                    return debitCard.id = debitCardId;
                })[0].balance;
            }

            return debitCardBalance;
        },

        getCurrentMonthDebitCardsIncomeBalance: function () {
            return this.getDebitCardsBalance();
        }
    };
});