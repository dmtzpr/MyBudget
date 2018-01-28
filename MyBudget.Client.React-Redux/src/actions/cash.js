import { push } from 'react-router-redux';

import ActionTypes from '../constants/cash';

export const addCash = cash => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_CASH_SUCCESS, cash });
    dispatch(push('/'));
};
