var keyMirror = require('keymirror');

var ExpenseConstants = keyMirror({
    MY_BUDGET_ADD_CATEGORY: null,
    MY_BUDGET_ADD_EXPENSE_CATEGORY: null,
    MY_BUDGET_DELETE_EXPENSE_CATEGORY: null,
    MY_BUDGET_ADD_EXPENSE_SUBCATEGORY: null,
    MY_BUDGET_DELETE_EXPENSE_SUBCATEGORY: null
});

module.exports = ExpenseConstants;