import axios from 'axios';
import Constants from './constants';

const axiosInstance = axios.create({
  baseURL: Constants.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
