var AppDispatcher = require('../dispatcher/app-dispatcher'),
    CardsConstants = require('../constants/cards-constants');

var CardsActions = {
    addDebitCard: function (debitCardName) {
        AppDispatcher.dispatch({
            actionType: CardsConstants.MY_BUDGET_ADD_DEBIT_CARD,
            name: debitCardName
        });
    },

    deleteDebitCard: function (debitCardId) {
        AppDispatcher.dispatch({
            actionType: CardsConstants.MY_BUDGET_DELETE_DEBIT_CARD,
            id: debitCardId
        });
    },

    rechargeDebitCard: function (debitCardId, debitCardModel) {
        AppDispatcher.dispatch({
            actionType: CardsConstants.MY_BUDGET_RECHARGE_DEBIT_CARD,
            id: debitCardId,
            model: debitCardModel
        });
    },

    addExpense: function (debitCardId, debitCardModel) {
        AppDispatcher.dispatch({
            actionType: CardsConstants.MY_BUDGET_ADD_DEBIT_CARD_EXPENSE,
            id: debitCardId,
            model: debitCardModel
        });
    }
};

module.exports = CardsActions;