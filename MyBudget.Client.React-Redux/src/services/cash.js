import axios from 'axios';
import qs from 'qs';

export default {
    getCash: () =>
        axios.get('cash').then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.cash);
        }),

    addCash: cash =>
        axios.post('cash', qs.stringify(cash)).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.cash);
        }),
};
