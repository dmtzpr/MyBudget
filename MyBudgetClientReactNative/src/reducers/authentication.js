import ActionTypes from '../constants/user';

const initialState = { loggingIn: false, loggedIn: false, isSignInFailed: false, user: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isSignInFailed: false,
                loggedIn: true,
                user: action.user,
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isSignInFailed: true,
                loggedIn: false,
                loggingIn: false,
            };
        case ActionTypes.SET_USER:
            return {
                ...state,
                isSignInFailed: false,
                loggedIn: true,
                user: action.user,
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};
