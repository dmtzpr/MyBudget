import { push } from 'react-router-redux';

import { ActionTypes } from '../constants/user';
import { userService } from '../services/user';

export const login = (username, password) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST, user: username });

    userService.login(username, password).then(
        (user) => {
            dispatch({ type: ActionTypes.LOGIN_SUCCESS, user });
            dispatch(push('/'));
        },
        (error) => {
            dispatch({ type: ActionTypes.LOGIN_FAILURE, error });
        },
    );
};

export const logout = () => {
    userService.logout();

    return { type: ActionTypes.LOGOUT };
};
