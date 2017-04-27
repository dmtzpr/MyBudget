var AppDispatcher = require('../dispatcher/app-dispatcher'),
    BudgetConstants = require('../constants/budget-constants'),
    WebApi = require('../utils/web-api');

var BudgetActions = {
    getMonthBudget: function () {
        WebApi.getMonthBudget().then(function (data) {
            AppDispatcher.dispatch({
                actionType: BudgetConstants.MY_BUDGET_RECEIVE_BUDGET_DATA,
                monthBudget: data.monthBudget
            });
        });
    },

    setNewMonthBudget: function (monthBudget) {
        WebApi.setMonthBudget(monthBudget).then(function () {
            AppDispatcher.dispatch({
                actionType: BudgetConstants.MY_BUDGET_SET_NEW_MONTH_BUDGET,
                monthBudget: monthBudget
            });
        });
    }
};

module.exports = BudgetActions;