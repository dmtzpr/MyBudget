import axios from 'axios';
import qs from 'qs';

import authHeader from '../helpers/auth-header';

export default {
    getCash: () =>
        axios({
            method: 'get',
            url: '/api/cash/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            debugger;
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.cash);
        }),

    addCash: cash =>
        axios({
            method: 'post',
            url: '/api/cash/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify(cash),
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.cash);
        }),
};
