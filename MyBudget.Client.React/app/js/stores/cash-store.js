'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');


var CashConstants = require('../constants/cash-constants'),
    CHANGE_EVENT = require('../config').ChangeEventName;

//mock data
var _cashBalance = 900,
    _cashCollection = [{
        "amount": 200,
        "date": "21.05.2015",
        "note": "First salary"
    }, {
        "amount": 700,
        "date": "19.05.2015",
        "note": "add cash"
    }];

var CashStore = assign({}, EventEmitter.prototype, {
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
            username: _loggedUsername,
            isLoggedIn: !!_loggedUsername
        }
    },

    getCashBalance: function () {
        return _cashBalance;
    },

    getCashBalanceModel: function () {
        return {
            id: 0,
            name: 'Cash',
            balance: _cashBalance
        };
    },

    getCurrentMonthCashIncome: function () {
        return _cashBalance;
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case CashConstants.MY_BUDGET_ADD_CASH:
            _cashCollection.push(action.cashModel);
            _cashBalance += action.cashModel.amount;
            CashStore.emitChange();
            break;
        case CashConstants.MY_BUDGET_ADD_CASH_EXPENSE:
            _cashCollection.push(action.expenseModel);
            _cashBalance -= action.expenseModel.amount;
            CashStore.emitChange();
            break;
    }
});

module.exports = CashStore;
