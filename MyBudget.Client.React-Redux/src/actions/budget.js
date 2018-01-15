import { push } from 'react-router-redux';

import ActionTypes from '../constants/budget';

export const setMonthBudget = monthBudget => (dispatch) => {
    dispatch({ type: ActionTypes.SET_MONTH_BUDGET_SUCCESS, monthBudget });
    dispatch(push('/'));
};
