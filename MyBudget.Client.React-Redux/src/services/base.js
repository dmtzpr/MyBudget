import axios from 'axios';
import authHeader from '../helpers/auth-header';

axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Object.assign(axios.defaults.headers.common, authHeader());
