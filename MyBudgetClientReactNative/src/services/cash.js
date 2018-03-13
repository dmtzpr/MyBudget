import axios from 'axios';
import qs from 'qs';

import responseHandler from '../helpers/response-handler';

export default {
    getCash: () => axios.get('cash').then(responseHandler('cash')),

    addCash: cash => axios.post('cash', qs.stringify(cash)).then(responseHandler('cash')),
};
