import axios from 'axios';
// import {API_BASE_URL} from '../helpers/constants';
// import { getUserState } from '../states';

axios.defaults.baseURL = 'https://exercise.smtapps.net/api';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

axios.interceptors.request.use(
  config => {
    //   const user = getUserState();
    //   if (user && !axios.defaults.headers.Authorization) {
    //     config.headers!.Authorization = `Bearer ${user.token}`;
    //   }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);
export default axios;
