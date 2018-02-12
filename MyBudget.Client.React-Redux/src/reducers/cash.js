import ActionTypes from '../constants/cash';

const initialState = {
    balance: 1650,
    cashes: [
        {
            id: 1,
            date: '2018-02-02T23:12:00.121Z',
            amount: 300,
            note: 'add cash',
        },
        {
            id: 2,
            date: '2018-02-12T20:58:00.231Z',
            amount: 1700,
            note: 'found cash',
        },
        {
            id: 3,
            date: '2018-02-10T12:14:01.122Z',
            amount: -350,
            note: 'buy bicycle',
        },
    ],
};

export default function cashes(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_CASH_SUCCESS:
            return {
                balance: state.balance + action.cash.amount,
                cashes: [
                    ...state.cashes,
                    {
                        id: state.cashes.reduce((maxId, cash) => Math.max(cash.id, maxId), -1) + 1,
                        date: action.cash.date,
                        amount: action.cash.amount,
                        note: action.cash.note,
                    },
                ],
            };
        default:
            return state;
    }
}
