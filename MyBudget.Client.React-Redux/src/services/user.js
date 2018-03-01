import axios from 'axios';
import qs from 'qs';

export const userService = {
    login: (username, password) =>
        axios({
            method: 'post',
            url: '/api/auth/signin',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({ username, password }),
        })
            .then((response) => {
                if (response.status !== 200) {
                    return Promise.reject(response.statusText);
                }

                return response.data;
            })
            .then((user) => {
                if (user && user.token) {
                    localStorage.setItem('user', JSON.stringify(user));
                }

                return user;
            }),

    logout: () => {
        localStorage.removeItem('user');
    },
};
