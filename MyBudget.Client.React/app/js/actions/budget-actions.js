'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    BudgetConstants = require('../constants/budget-constants');

var BudgetActions = {
    setNewMonthBudget: function (budget) {
        AppDispatcher.dispatch({
            actionType: BudgetConstants.MY_BUDGET_SET_NEW_MONTH_BUDGET,
            budget: budget
        });
    }
};

module.exports = BudgetActions;