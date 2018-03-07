import ActionTypes from '../constants/budget';

export default (state = 0, action) => {
    switch (action.type) {
        case ActionTypes.GET_MONTH_BUDGET_SUCCESS:
            return action.monthBudget;
        case ActionTypes.SET_MONTH_BUDGET_SUCCESS:
            return action.monthBudget;
        default:
            return state;
    }
};
