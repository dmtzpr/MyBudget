import axios from 'axios';
import qs from 'qs';

import responseHandler from '../helpers/response-handler';

export default {
    getBudget: () => axios.get('budget').then(responseHandler('monthBudget')),

    updateBudget: monthBudget =>
        axios.put('budget', qs.stringify({ monthBudget })).then(responseHandler('monthBudget')),
};
