import ActionTypes from '../constants/cash';

const initialState = {
    balance: 0,
    cashes: [],
};

export default function cashes(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_CASH_SUCCESS:
            return {
                balance: action.cash.balance,
                cashes: action.cash.cashes,
            };
        case ActionTypes.ADD_CASH_SUCCESS:
            return {
                balance: state.balance + action.cash.amount,
                cashes: [...state.cashes, action.cash],
            };
        default:
            return state;
    }
}
