import ActionTypes from '../constants/cash';

const initialState = {
    balance: 0,
    cashes: [],
};

export default function cash(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_CASH:
            return {
                balance: state.balance + action.cash.amount,
                cashes: state.cashes.push(action.cash),
            };
        case ActionTypes.ADD_CASH_EXPENSE:
            return {
                balance: state.balance - action.cash.amount,
                cashes: state.cashes.push(action.cash),
            };
        case ActionTypes.GET_CASHES:
            return {
                balance: state.cashes.reduce((balance, amount) => balance + amount),
                cashes: state.cashes,
            };
        default:
            return state;
    }
}
