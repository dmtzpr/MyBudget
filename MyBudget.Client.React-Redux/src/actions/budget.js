import ActionTypes from '../constants/budget';
import { history } from '../helpers/history';

export const setMonthBudget = monthBudget => (dispatch) => {
    dispatch({ type: ActionTypes.SET_MONTH_BUDGET_SUCCESS, monthBudget });
    history.push('/');
};
