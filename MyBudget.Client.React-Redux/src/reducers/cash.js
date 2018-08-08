import { handleActions } from 'redux-actions';

import ActionTypes from '../constants/cash';

export default handleActions(
    {
        [ActionTypes.GET_CASH_SUCCESS]: (state, action) => ({
            balance: action.cash.balance,
            cashes: action.cash.cashes,
        }),
        [ActionTypes.ADD_CASH_SUCCESS]: (state, action) => ({
            balance: state.balance + action.cash.amount,
            cashes: [...state.cashes, action.cash],
        }),
    },
    {
        balance: 0,
        cashes: [],
    },
);
