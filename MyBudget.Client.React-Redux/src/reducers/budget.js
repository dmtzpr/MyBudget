import ActionTypes from '../constants/budget';

const initialState = 1500;

export default function budget(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_MONTH_BUDGET_SUCCESS:
            return action.monthBudget;
        default:
            return state;
    }
}
