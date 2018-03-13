import axios from 'axios';
import qs from 'qs';

import authHeader from '../helpers/auth-header';
import responseHandler from '../helpers/response-handler';

export default {
    login: (username, password) =>
        axios
            .post('auth/signin', qs.stringify({ username, password }))
            .then(responseHandler())
            .then((user) => {
                if (user && user.token) {
                    localStorage.setItem('user', JSON.stringify(user));
                    Object.assign(axios.defaults.headers.common, authHeader());
                }

                return user;
            }),

    register: user => axios.post('auth/signup', qs.stringify(user)).then(responseHandler()),

    logout: () => {
        delete axios.defaults.headers.common.Authorization;
    },
};
