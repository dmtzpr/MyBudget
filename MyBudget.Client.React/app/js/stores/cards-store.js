var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');


var CardsConstants = require('../constants/cards-constants'),
    CHANGE_EVENT = require('../config').CHANGE_EVENT_NAME;

//mock data
var _debitCardsCollection = [{
    id: 1,
    name: 'My favorite debit card',
    balance: 300,
    debitCardRecharges: [{
        amount: 300,
        date: '14.05.2015',
        note: "my first salary"
    }]
}, {
    id: 2,
    name: 'Many dollars debit card',
    balance: 1500,
    debitCardRecharges: [{
        amount: 1500,
        date: '15.05.2015',
        note: "my second job first salary"
    }]
}];


function _deleteDebitCard(id) {
    var i = _debitCardsCollection.length;

    while (i--) {
        if (_debitCardsCollection[i].id === id) {
            _debitCardsCollection.splice(i, 1);
        }
    }
}

function _getDebitCardById(id) {
    return _debitCardsCollection.find(function (debitCard) {
        return debitCard.id === id;
    });
}

function _calculateDebitCardsBalance() {
    var debitCardsBalance = 0;

    _debitCardsCollection.forEach(function (debitCard) {
        debitCardsBalance += debitCard.balance;
    });

    return debitCardsBalance;
}


function _getDebitCardBlanceById(debitCardId) {
    var debitCardBalance = 0;

    if (_debitCardsCollection.length > 0) {
        debitCardBalance = _debitCardsCollection.find(function (debitCard) {
            return debitCard.id === debitCardId;
        }).balance;
    }

    return debitCardBalance;
}

function _rechargeDebitCard(id, model) {
    var selectedDebitCard = _getDebitCardById(id);

    selectedDebitCard.debitCardRecharges.push(model);
    selectedDebitCard.balance += model.amount;
    _calculateDebitCardsBalance();
}

function _addExpense(debitCardId, expenseModel) {
    var debitCard = _getDebitCardById(debitCardId);

    debitCard.balance -= expenseModel.amount;
    expenseModel.amount = +expenseModel.amount;
    debitCard.debitCardRecharges.push(expenseModel);
}

var CardsStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getDebitCards: function () {
        return _debitCardsCollection;
    },

    deleteDebitCard: function (id) {
        _deleteDebitCard(id);
    },

    getDebitCardsBalance: function () {
        return _calculateDebitCardsBalance();
    },

    getDebitCardBlanceById: function (id) {
        return _getDebitCardBlanceById(id);
    },

    getEachDebitCardBalance: function () {
        return _debitCardsCollection.map(function (debitCard) {
            return {
                id: debitCard.id,
                name: debitCard.name,
                balance: debitCard.balance
            };
        });
    },

    getCurrentMonthDebitCardsIncomeBalance: function () {
        return _calculateDebitCardsBalance();
    }

});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case CardsConstants.MY_BUDGET_ADD_DEBIT_CARD:
            _debitCardsCollection.push({
                id: new Date().getUTCMilliseconds(),
                name: action.name,
                balance: 0,
                debitCardRecharges: []
            });
            CardsStore.emitChange();
            break;

        case CardsConstants.MY_BUDGET_DELETE_DEBIT_CARD:
            _deleteDebitCard(action.id);
            CardsStore.emitChange();
            break;

        case CardsConstants.MY_BUDGET_RECHARGE_DEBIT_CARD:
            _rechargeDebitCard(action.id, action.model);
            CardsStore.emitChange();
            break;

        case CardsConstants.MY_BUDGET_ADD_DEBIT_CARD_EXPENSE:
            _addExpense(action.id, action.model);
            CardsStore.emitChange();
            break;
    }
});

module.exports = CardsStore;
