import { ActionTypes } from '../constants/user';
import { userService } from '../services/user';
import { history } from '../helpers/history';

export const login = (username, password) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST, user: username });

    userService.login(username, password)
        .then((user) => {
            dispatch({ type: ActionTypes.LOGIN_SUCCESS, user });
            history.push('/');
        },
        (error) => {
            dispatch({ type: ActionTypes.LOGIN_FAILURE, error });
        });
};

export const logout = () => {
    userService.logout();

    return { type: ActionTypes.LOGOUT };
};

