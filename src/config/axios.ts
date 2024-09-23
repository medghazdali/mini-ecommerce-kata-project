import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://yourapi.baseurl.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
