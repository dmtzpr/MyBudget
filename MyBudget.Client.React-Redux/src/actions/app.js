import ActionTypes from '../constants/budget';
import budgetService from '../services/budget';

export const appLoad = () => (dispatch) => {
    budgetService.getBudget().then(
        (budget) => {
            dispatch({ type: ActionTypes.SET_MONTH_BUDGET_SUCCESS, monthBudget: budget });
        },
        (error) => {
            dispatch({ type: ActionTypes.SET_MONTH_BUDGET_FAILURE, error });
        },
    );
};
