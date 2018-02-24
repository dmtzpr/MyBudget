import axios from 'axios';
import qs from 'qs';

import authHeader from '../helpers/auth-header';

export const userService = {
    login: (username, password) =>
        axios({
            method: 'post',
            mode: 'no-cors',
            url: '/api/auth/signin',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                crossDomain: true,
            },
            data: qs.stringify({ username, password }),
        }).then((response) => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        }),
    // return fetch('', requestOptions)
    //     .then((response) => {
    //         if (!response.ok) {
    //             return Promise.reject(response.statusText);
    //         }

    //         return response.json();
    //     })
    //     .then((user) => {
    //         if (user && user.token) {
    //             localStorage.setItem('user', JSON.stringify(user));
    //         }

    //         return user;
    //     });

    logout: () => {
        localStorage.removeItem('user');
    },
};
