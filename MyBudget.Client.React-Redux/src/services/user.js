import axios from 'axios';
import qs from 'qs';

import authHeader from '../helpers/auth-header';

export default {
    login: (username, password) =>
        axios
            .post('auth/signin', qs.stringify({ username, password }))
            .then((response) => {
                if (response.status !== 200) {
                    return Promise.reject(response.statusText);
                }

                return response.data;
            })
            .then((user) => {
                debugger;
                if (user && user.token) {
                    localStorage.setItem('user', JSON.stringify(user));
                    Object.assign(axios.defaults.headers.common, authHeader());
                }

                return user;
            }),

    logout: () => {
        localStorage.removeItem('user');
        delete axios.defaults.headers.common.Authorization;
    },
};
