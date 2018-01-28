import ActionTypes from '../constants/cash';

const initialState = [{
    id: 1,
    date: '2017-12-02T23:12:00.121Z',
    amount: 300,
    note: 'add cash',
}, {
    id: 2,
    date: '2018-01-12T20:58:00.231Z',
    amount: 700,
    note: 'found cash',
},
{
    id: 3,
    date: '2017-01-10T12:14:01.122Z',
    amount: -350,
    note: 'buy bicycle',
}];

export default function cashes(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_CASH_SUCCESS:
            return [
                ...state, {
                    id: state.reduce((maxId, cash) => Math.max(cash.id, maxId), -1) + 1,
                    date: action.cash.date,
                    amount: action.cash.amount,
                    note: action.cash.note,
                },
            ];
        default:
            return state;
    }
}
