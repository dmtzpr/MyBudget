import axios from 'axios';
import authHeader from '../helpers/auth-header';

axios.defaults.baseURL = 'http://192.168.13.58:4000/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Object.assign(axios.defaults.headers.common, authHeader());

export const addAuthHeader = () => {
    Object.assign(axios.defaults.headers.common, authHeader());
};

export const removeAuthHeader = () => {
    delete axios.defaults.headers.common.Authorization;
};
