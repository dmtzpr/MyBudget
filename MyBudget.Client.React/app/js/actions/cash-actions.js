var AppDispatcher = require('../dispatcher/app-dispatcher'),
    CashConstants = require('../constants/cash-constants'),
    WebApi = require('../utils/web-api');


var CashActions = {
    getCashes: function () {
        WebApi.getCashes().then(function (data) {
            AppDispatcher.dispatch({
                actionType: CashConstants.MY_BUDGET_GET_CASHES,
                cashes: data.cashes
            });
        });
    },

    addCash: function (cashModel) {
        WebApi.addCash(cashModel).then(function (data) {
            AppDispatcher.dispatch({
                actionType: CashConstants.MY_BUDGET_ADD_CASH,
                cashModel: cashModel
            });
        });
    },

    addExpense: function (expenseModel) {
        WebApi.addExpense(expenseModel).then(function () {
            AppDispatcher.dispatch({
                actionType: CashConstants.MY_BUDGET_ADD_CASH_EXPENSE,
                expenseModel: expenseModel
            });
        });
    }
};

module.exports = CashActions;