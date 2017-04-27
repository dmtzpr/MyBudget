var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');


var CashConstants = require('../constants/cash-constants'),
    CHANGE_EVENT = require('../config').CHANGE_EVENT_NAME;

var _cashBalance = 0,
    _cashes = [];

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
        case CashConstants.MY_BUDGET_GET_CASHES:
            _cashes = action.cashes;
            _cashBalance = 0;
            _cashes.forEach(function (cash) {
                _cashBalance += cash.amount;
            });
            CashStore.emitChange();
            break;
        case CashConstants.MY_BUDGET_ADD_CASH:
            _cashes.push(action.cashModel);
            _cashBalance += action.cashModel.amount;
            CashStore.emitChange();
            break;
        case CashConstants.MY_BUDGET_ADD_CASH_EXPENSE:
            _cashes.push(action.expenseModel);
            _cashBalance -= action.expenseModel.amount;
            CashStore.emitChange();
            break;
    }
});

module.exports = CashStore;
