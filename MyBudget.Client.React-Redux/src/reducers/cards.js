import ActionTypes from '../constants/card';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.GET_CARDS_SUCCESS:
            return action.cards;
        case ActionTypes.ADD_CARD_SUCCESS:
            return [...state, action.card];
        case ActionTypes.DELETE_CARD_SUCCESS:
            return state.filter(card => card.id !== action.cardId);
        case ActionTypes.RECHARGE_CARD_SUCCESS:
            return state.map(
                card =>
                    (card.id === action.cardTransaction.id
                        ? {
                            ...card,
                            balance: card.balance + action.cardTransaction.amount,
                            debitCardRecharges: card.debitCardRecharges.push(action.cardTransaction.expense),
                        }
                        : card),
            );
        case ActionTypes.ADD_CARD_EXPENSE:
            return state.map(
                card =>
                    (card.id === action.id
                        ? {
                            ...card,
                            balance: card.balance - action.expense.amount,
                            debitCardRecharges: card.debitCardRecharges.push(action.expense),
                        }
                        : card),
            );
        default:
            return state;
    }
};
