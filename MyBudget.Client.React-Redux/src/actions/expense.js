import { push } from 'connected-react-router';

import ActionTypes from '../constants/expense';
import expenseService from '../services/expense';

export const addExpense = expense => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_EXPENSE_REQUEST, expense });

    expenseService.addExpense(expense).then(
        (expenseData) => {
            dispatch({ type: ActionTypes.ADD_EXPENSE_SUCCESS, expense: expenseData });
            dispatch(push('/'));
        },
        (error) => {
            dispatch({ type: ActionTypes.ADD_EXPENSE_FAILURE, error });
        },
    );
};
