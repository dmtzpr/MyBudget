import ActionTypes from '../constants/card';

const initialState = [{
    id: 1,
    name: 'My favorite debit card',
    balance: 300,
    debitCardRecharges: [{
        amount: 300,
        date: '2017-11-02T11:21:00.317Z',
        note: 'my first salary',
    }],
}, {
    id: 2,
    name: 'Many dollars debit card',
    balance: 1500,
    debitCardRecharges: [{
        amount: 1530,
        date: '2018-01-06T13:21:08.125Z',
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
        case ActionTypes.RECHARGE_CARD_SUCCESS:
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
