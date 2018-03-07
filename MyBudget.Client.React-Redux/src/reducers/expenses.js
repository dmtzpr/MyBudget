import ActionTypes from '../constants/expense';

export default function expenses(state = [], action) {
    switch (action.type) {
        case ActionTypes.GET_EXPENSE_SUCCESS:
            return action.expenses;
        case ActionTypes.ADD_EXPENSE_SUCCESS:
            return [...state, action.expense];
        default:
            return state;
    }
}
