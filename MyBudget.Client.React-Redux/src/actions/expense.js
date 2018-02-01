import { push } from 'react-router-redux';

import ActionTypes from '../constants/expense';

export const addExpense = expense => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_EXPENSE_SUCCESS, expense });
    dispatch(push('/'));
};
