import { Actions } from 'react-native-router-flux';

import ActionTypes from '../constants/user';
import userService from '../services/user';

export const login = (username, password) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST, user: { username } });

    userService.login(username, password).then(
        (user) => {
            dispatch({ type: ActionTypes.LOGIN_SUCCESS, user });
            Actions.home();
        },
        (error) => {
            dispatch({ type: ActionTypes.LOGIN_FAILURE, error });
        },
    );
};

export const register = user => (dispatch) => {
    dispatch({ type: ActionTypes.REGISTER_REQUEST });

    userService.register(user).then(
        (registeredUser) => {
            dispatch({ type: ActionTypes.REGISTER_SUCCESS, user: registeredUser });
            Actions.login();
        },
        (error) => {
            dispatch({ type: ActionTypes.REGISTER_FAILURE, error });
        },
    );
};

export const logout = () => (dispatch) => {
    userService.logout();
    dispatch({ type: ActionTypes.LOGOUT });
};
