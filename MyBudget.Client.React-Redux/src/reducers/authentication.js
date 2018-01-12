import { ActionTypes } from '../constants/user';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = { loggedIn: true, user: 'Dima123' }; //user ? { loggedIn: true, user: 'Dima123' } : {};

export default function authentication(state = initialState, action) {
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
}
