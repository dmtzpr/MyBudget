'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    CashConstants = require('../constants/cash-constants');

var CashActions = {
    addCash: function (cashModel) {
        AppDispatcher.dispatch({
            actionType: CashConstants.MY_BUDGET_ADD_CASH,
            cashModel: cashModel
        });
    },

    addExpense: function (expenseModel) {
        AppDispatcher.dispatch({
            actionType: CashConstants.MY_BUDGET_ADD_CASH_EXPENSE,
            expenseModel: expenseModel
        });
    }
};

module.exports = CashActions;