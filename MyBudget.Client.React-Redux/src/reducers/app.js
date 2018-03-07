import ActionTypes from '../constants/app';

const initialState = { isLoading: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.IS_LOADING_START:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.IS_LOADING_FINISH:
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.IS_LOADING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.reason,
            };
        default:
            return state;
    }
};
