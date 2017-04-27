var AppDispatcher = require('../dispatcher/app-dispatcher'),
    ExpenseConstants = require('../constants/expense-constants');

var ExpenseActions = {
    addExpense: function (expenseModel) {
        AppDispatcher.dispatch({
            actionType: ExpenseConstants.MY_BUDGET_ADD_CATEGORY,
            model: expenseModel
        });
    },

    addExpenseCategory: function (expenseCategoryName) {
        AppDispatcher.dispatch({
            actionType: ExpenseConstants.MY_BUDGET_ADD_EXPENSE_CATEGORY,
            name: expenseCategoryName
        });
    },

    deleteExpenseCategory: function (expenseCategoryId) {
        AppDispatcher.dispatch({
            actionType: ExpenseConstants.MY_BUDGET_DELETE_EXPENSE_CATEGORY,
            id: expenseCategoryId
        });
    },

    addExpenseSubcategory: function (expenseCategoryId, expenseSubcategoryName) {
        AppDispatcher.dispatch({
            actionType: ExpenseConstants.MY_BUDGET_ADD_EXPENSE_SUBCATEGORY,
            id: expenseCategoryId,
            name: expenseSubcategoryName
        });
    },

    deleteExpenseSubcategory: function (expenseCategoryId, expenseSubcategoryId) {
        AppDispatcher.dispatch({
            actionType: ExpenseConstants.MY_BUDGET_DELETE_EXPENSE_SUBCATEGORY,
            expenseCategoryId: expenseCategoryId,
            expenseSubcategoryId: expenseSubcategoryId
        });
    }
};

module.exports = ExpenseActions;