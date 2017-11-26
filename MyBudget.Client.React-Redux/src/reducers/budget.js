import ActionTypes from '../constants/budget';

const initialState = 1500;

export default function budget(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_BUDGET:
            return action.budget;
        default:
            return state;
    }
}
