var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

var BudgetConstants = require('../constants/budget-constants'),
    CHANGE_EVENT = require('../config').CHANGE_EVENT_NAME;

var _monthBudget = 0;

var BudgetStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getState: function () {
        return {
            monthBudget: _monthBudget
        }
    },

    getMouthBudget: function () {
        return _monthBudget;
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case BudgetConstants.MY_BUDGET_RECEIVE_BUDGET_DATA:
            _monthBudget = action.monthBudget;
            BudgetStore.emitChange();
            break;
        case BudgetConstants.MY_BUDGET_SET_NEW_MONTH_BUDGET:
            if (_monthBudget !== action.monthBudget) {
                _monthBudget = action.monthBudget;
                BudgetStore.emitChange();
            }
            break;
    }
});

module.exports = BudgetStore;
