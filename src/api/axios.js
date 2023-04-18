import axios from 'axios';
import qs from 'qs';
import { LOCAL_STORAGE_KEYS } from '../constants/storage.js';
import { getStrapiError } from '../utils/getStrapiError.js';

const initialJwt = localStorage.getItem(LOCAL_STORAGE_KEYS.jwt);

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    paramsSerializer: {
        serialize: (params) => qs.stringify(params, { encodeValuesOnly: true }),
    },
    headers: {
        Authorization: initialJwt && `Bearer ${initialJwt}`,
    },
});

axiosInstance.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(getStrapiError(err) || err),
);
