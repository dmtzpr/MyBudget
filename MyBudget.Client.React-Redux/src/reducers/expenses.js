import ActionTypes from '../constants/expenses';

const initialState = [
    {
        id: 1,
        categoryId: 4,
        subcategoryId: 2,
        amount: 100,
        date: '2018-01-12T20:51:00.121Z',
        note: 'is bought adult clothing',
    }, {
        id: 2,
        categoryId: 2,
        subcategoryId: 3,
        amount: 1250,
        date: '2017-11-02T11:21:00.317Z',
        note: '250$',
    }, {
        id: 3,
        categoryId: 3,
        subcategoryId: 1,
        amount: 295,
        date: '2018-01-12T21:51:00.547Z',
        note: '295$',
    },
];

export default function expenses(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_EXPENSE:
            return [
                ...state, {
                    id: state.reduce((maxId, expense) => Math.max(expense.id, maxId), -1) + 1,
                    categoryId: action.categoryId,
                    subcategoryId: action.subcategoryId,
                    amount: action.amount,
                    date: action.date,
                    note: action.note,
                },
            ];
        default:
            return state;
    }
}
