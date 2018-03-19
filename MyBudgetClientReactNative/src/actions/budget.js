import { Actions } from 'react-native-router-flux';

import ActionTypes from '../constants/budget';
import budgetService from '../services/budget';

export const getMonthBudget = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_MONTH_BUDGET_REQUEST });

    budgetService.getBudget().then(
        (budget) => {
            dispatch({ type: ActionTypes.GET_MONTH_BUDGET_SUCCESS, monthBudget: budget });
        },
        (error) => {
            dispatch({ type: ActionTypes.GET_MONTH_BUDGET_FAILURE, error });
        },
    );
};

export const setMonthBudget = monthBudget => (dispatch) => {
    dispatch({ type: ActionTypes.SET_MONTH_BUDGET_REQUEST, monthBudget });

    budgetService.updateBudget(monthBudget).then(
        (budget) => {
            dispatch({ type: ActionTypes.SET_MONTH_BUDGET_SUCCESS, monthBudget: budget });
            Actions.home();
        },
        (error) => {
            dispatch({ type: ActionTypes.SET_MONTH_BUDGET_FAILURE, error });
        },
    );
};
