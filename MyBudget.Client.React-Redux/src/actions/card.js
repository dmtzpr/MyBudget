import { push } from 'react-router-redux';

import ActionTypes from '../constants/card';

export const rechargeCard = cardTransaction => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_CASH_SUCCESS, cardTransaction });
    dispatch(push('/'));
};
