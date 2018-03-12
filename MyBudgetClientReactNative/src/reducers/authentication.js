import ActionTypes from '../constants/user';

// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                isSignInFailed: true,
            };
        case ActionTypes.LOGOUT:
            return {};
        default:
            return state;
    }
};
