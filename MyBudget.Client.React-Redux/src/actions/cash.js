import { push } from 'connected-react-router';

import ActionTypes from '../constants/cash';
import cashService from '../services/cash';

export const addCash = cash => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_CASH_REQUEST, cash });
    cashService.addCash(cash).then(
        (cashes) => {
            dispatch({ type: ActionTypes.ADD_CASH_SUCCESS, cash: cashes });
            dispatch(push('/'));
        },
        (error) => {
            dispatch({ type: ActionTypes.ADD_CASH_FAILURE, error });
        },
    );
};
