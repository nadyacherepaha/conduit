import Axios, { AxiosRequestConfig, AxiosError } from 'axios';
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
axios.interceptors.response.use(
    (response) => {
        return response?.data ?? response;
    },
    (error: AxiosError) => {
        return Promise.reject<AxiosError>(error.response?.data ?? error);
    }
);
