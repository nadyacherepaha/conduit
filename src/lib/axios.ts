import Axios, { AxiosRequestConfig } from 'axios';
import storage from '../utils/storage';
import BASE_URL from '../utils/baseUrl';

export const axios = Axios.create({
  baseURL: BASE_URL,
});

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const token = storage.getToken();

  if (config.headers === undefined) {
    config.headers = {};
  }

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = 'application/json';

  return config;
};

axios.interceptors.request.use(authRequestInterceptor);
