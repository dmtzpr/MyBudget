import axios from 'axios';
import qs from 'qs';

import authHeader from '../helpers/auth-header';

export default {
    getBudget: () =>
        axios({
            method: 'get',
            url: '/api/budget/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.monthBudget);
        }),

    updateBudget: monthBudget =>
        axios({
            method: 'put',
            url: '/api/budget/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({ monthBudget }),
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.monthBudget);
        }),
};
