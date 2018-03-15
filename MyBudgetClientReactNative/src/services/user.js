import axios from 'axios';
import qs from 'qs';

import { addAuthHeader, removeAuthHeader } from './base';
import { setUser, removeUser } from '../helpers/user-storage';
import responseHandler from '../helpers/response-handler';

export default {
    login: (username, password) =>
        axios
            .post('auth/signin', qs.stringify({ username, password }))
            .then(responseHandler())
            .then((user) => {
                if (user && user.token) {
                    setUser(user);
                    addAuthHeader();
                }

                return user;
            }),

    register: user => axios.post('auth/signup', qs.stringify(user)).then(responseHandler()),

    logout: () => {
        removeUser();
        removeAuthHeader();
    },
};
