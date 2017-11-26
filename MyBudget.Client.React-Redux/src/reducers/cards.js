import ActionTypes from '../constants/cards';

const initialState = [{
    id: 1,
    name: 'My favorite debit card',
    balance: 300,
    debitCardRecharges: [{
        amount: 300,
        date: '14.05.2015',
        note: 'my first salary',
    }],
}, {
    id: 2,
    name: 'Many dollars debit card',
    balance: 1500,
    debitCardRecharges: [{
        amount: 1500,
        date: '15.05.2015',
        note: 'my second job first salary',
    }],
}];

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CARD:
            return [
                ...state, {
                    id: state.reduce((maxId, card) => Math.max(card.id, maxId), -1) + 1,
                    name: action.name,
                    balance: action.balance,
                    debitCardRecharges: [],
                },
            ];
        case ActionTypes.DELETE_CARD:
            return state.filter(card =>
                card.id !== action.id,
            );
        case ActionTypes.RECHARGE_CARD:
            return state.map(card =>
                (card.id === action.id ? {
                    ...card,
                    balance: card.balance + action.balance,
                    debitCardRecharges: card.debitCardRecharges.push(action.expense),
                } : card),
            );
        case ActionTypes.ADD_CARD_EXPENSE:
            return state.map(card =>
                (card.id === action.id ? {
                    ...card,
                    balance: card.balance - action.expense.amount,
                    debitCardRecharges: card.debitCardRecharges.push(action.expense),
                } : card),
            );
        default:
            return state;
    }
};
