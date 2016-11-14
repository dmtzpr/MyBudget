'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

var ExpenseConstants = require('../constants/expense-constants'),
    CHANGE_EVENT = require('../config').ChangeEventName;

//mock data
var _expensesCollection = [
        {
            categoryId: 4,
            subcategoryId: 2,
            amount: 100,
            date: '18.05.2015',
            note: 'is bought adult clothing'
        },
        {
            categoryId: 2,
            subcategoryId: 3,
            amount: 250,
            date: '18.05.2015',
            note: '250$'
        },
        {
            categoryId: 3,
            subcategoryId: 1,
            amount: 295,
            date: '18.05.2015',
            note: '295$'
        }
    ],
    _categories = [{
        id: 1,
        name: 'Food',
        subcategories: [{
            id: 1,
            name: 'Groceries'
        },
            {
                id: 2,
                name: 'Restaurants'
            },
            {
                id: 3,
                name: 'Pet Food/Treats'
            }]
    }, {
        id: 2,
        name: 'Shelter',
        subcategories: [{
            id: 1,
            name: 'Mortgage'
        },
            {
                id: 2,
                name: 'Rent'
            },
            {
                id: 3,
                name: 'Property Taxes'
            }, {
                id: 4,
                name: 'Household Repairs'
            },
            {
                id: 5,
                name: 'HOA Dues'
            }]
    },
        {
            id: 3,
            name: 'Utilities',
            subcategories: [{
                id: 1,
                name: 'Electricity'
            },
                {
                    id: 2,
                    name: 'Water'
                },
                {
                    id: 3,
                    name: 'Heating'
                }, {
                    id: 4,
                    name: 'Garbage'
                },
                {
                    id: 5,
                    name: 'Phones'
                },
                {
                    id: 6,
                    name: 'Cable'
                },
                {
                    id: 7,
                    name: 'Internet'
                }]
        },
        {
            id: 4,
            name: 'Clothing',
            subcategories: [{
                id: 1,
                name: 'Children Clothing'
            },
                {
                    id: 2,
                    name: 'Adult Clothing'
                }]
        },
        {
            id: 5,
            name: 'Transportation',
            subcategories: [{
                id: 1,
                name: 'Fuel'
            },
                {
                    id: 2,
                    name: 'Tires'
                },
                {
                    id: 3,
                    name: 'Oil Changes'
                }, {
                    id: 4,
                    name: 'Maintenance'
                },
                {
                    id: 5,
                    name: 'Parking Fees'
                },
                {
                    id: 6,
                    name: 'Repairs'
                }]
        },
        {
            id: 6,
            name: 'Medical',
            subcategories: [{
                id: 1,
                name: 'Primary Care'
            },
                {
                    id: 2,
                    name: 'Dental Care'
                },
                {
                    id: 3,
                    name: 'Specialty Care'
                }, {
                    id: 4,
                    name: 'Medications'
                },
                {
                    id: 5,
                    name: 'Medical Devices'
                }]
        }];

function getExpenses() {
    return _expensesCollection;
}

function _deleteExpenseCategory(categoryId) {
    var i = _categories.length;

    while (i--) {
        if (_categories[i].id === categoryId) {
            _categories.splice(i, 1);
            break;
        }
    }
}

function _deleteExpenseSubcategory(expenseCategoryId, expenseSubcategoryId) {
    var i = _categories.length,
        j;

    while (i--) {
        if (_categories[i].id === expenseCategoryId) {
            j = _categories[i].subcategories.length;
            while (j--) {
                if (_categories[i].subcategories[j].id === expenseSubcategoryId) {
                    _categories[i].subcategories.splice(j, 1);
                    break;
                }
            }
            break;
        }
    }
}

function _addExpense(expenseModel) {
    _expensesCollection.push(expenseModel);
}

function _getTotalExpensesAmount() {
    var totalAmount = 0;

    _expensesCollection.forEach(function (expenseModel) {
        totalAmount += expenseModel.amount;
    });

    return totalAmount;
}

function _addCategory(categoryName) {
    _categories.push({
        id: +Date.now(),
        name: categoryName,
        subcategories: []
    });
}

function _addSubcategory(categoryId, subcategoryName) {
    _categories.find(function (category) {
        return category.id === categoryId;
    }).subcategories.push({
        id: +Date.now(),
        name: subcategoryName
    });
}

var ExpenseStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCategories: function () {
        return _categories;
    },

    getSubcategories(categoryId) {
        if (categoryId) {
            var subcategories = _categories.find(function (category) {
                return category.id === categoryId;
            }).subcategories;

            return subcategories;
        }

        return [];
    },

    getTotalExpensesAmount: function () {
        return _getTotalExpensesAmount();
    },

    getCurrentMonthExpensesAmount: function () {
        return _getTotalExpensesAmount();
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case ExpenseConstants.MY_BUDGET_ADD_CATEGORY:
            _addExpense(action.model);
            ExpenseStore.emitChange();
            break;

        case ExpenseConstants.MY_BUDGET_ADD_EXPENSE_CATEGORY:
            _addCategory(action.name);
            ExpenseStore.emitChange();
            break;

        case ExpenseConstants.MY_BUDGET_DELETE_EXPENSE_CATEGORY:
            _deleteExpenseCategory(action.id);
            ExpenseStore.emitChange();
            break;

        case ExpenseConstants.MY_BUDGET_ADD_EXPENSE_SUBCATEGORY:
            _addSubcategory(action.id, action.name);
            ExpenseStore.emitChange();
            break;

        case ExpenseConstants.MY_BUDGET_DELETE_EXPENSE_SUBCATEGORY:
            _deleteExpenseSubcategory(action.expenseCategoryId, action.expenseSubcategoryId);
            ExpenseStore.emitChange();
            break;
    }
});

module.exports = ExpenseStore;
