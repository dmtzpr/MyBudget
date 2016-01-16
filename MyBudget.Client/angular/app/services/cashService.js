'use strict';

app.factory('cashService', function () {
    //mock data
    var cashBalance = 900,
        cashCollection = [{
            "amount": 200,
            "date": "21.05.2015",
            "note": "First salary"
        }, {
            "amount": 700,
            "date": "19.05.2015",
            "note": "add cash"
        }];

    return {
        addCash: function (cashModel) {
            cashCollection.push(cashModel);
            cashBalance += cashModel.amount;
        },

        getCashBalance: function () {
            return cashBalance;
        },

        getCashBalanceModel: function () {
            return {
                id: 0,
                name: 'Cash',
                balance: cashBalance
            };
        },

        addExpense: function (expenseModel) {
            cashCollection.push(expenseModel);
            cashBalance -= expenseModel.amount;
        },

        getCurrentMonthCashIncome: function () {
            return cashBalance;
        }
    };
});