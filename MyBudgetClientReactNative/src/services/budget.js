import axios from 'axios';
import qs from 'qs';

export default {
    getBudget: () =>
        axios.get('budget').then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.monthBudget);
        }),

    updateBudget: monthBudget =>
        axios.put('budget', qs.stringify({ monthBudget })).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.monthBudget);
        }),
};
