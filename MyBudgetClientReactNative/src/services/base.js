import axios from 'axios';
import authHeader from '../helpers/auth-header';
import appConfig from '../../app.json';

axios.defaults.baseURL = appConfig.serverApiURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Object.assign(axios.defaults.headers.common, authHeader());

export const addAuthHeader = () => {
    Object.assign(axios.defaults.headers.common, authHeader());
};

export const removeAuthHeader = () => {
    delete axios.defaults.headers.common.Authorization;
};
