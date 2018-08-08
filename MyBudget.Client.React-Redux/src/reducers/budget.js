import { handleActions, combineActions } from 'redux-actions';

import ActionTypes from '../constants/budget';

export default handleActions(
    {
        [combineActions(ActionTypes.GET_MONTH_BUDGET_SUCCESS, ActionTypes.SET_MONTH_BUDGET_SUCCESS)]: (state, action) =>
            action.monthBudget,
    },
    0,
);
