import { createService } from './createService';
import { axiosInstance } from './axios';

// TODO-: refactor
export const API = {
    auth: {
        register: async (data) =>
            axiosInstance.post('/auth/local/register', data),
        login: async (data) => axiosInstance.post('/auth/local', data),
        confirm: async ({ code, email }) =>
            axiosInstance.get(
                `/auth/email-confirmation?confirmation=${code}&email=${email}`,
            ),
        checkConfirmation: async (email) =>
            axiosInstance.get(`/auth/check-email-confirmation?email=${email}`),
        sendConfirmation: async (data) =>
            axiosInstance.post(`/auth/send-email-confirmation`, data),
        forgotPassword: async (data) =>
            axiosInstance.post('/auth/forgot-password', data),
        resetPassword: async (data) =>
            axiosInstance.post('/auth/reset-password', data),
        setJwt: (token) => {
            axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
        },
        removeJwt: () => {
            delete axiosInstance.defaults.headers.Authorization;
        },
    },
    robokassa: {
        request: async (data) => axiosInstance.post('/robokassa/request', data),
    },
    paywall: {
        request: async (data) => axiosInstance.post('/paywall/request', data),
    },
    ton: {
        request: async (data) => axiosInstance.post('/ton/request', data),
    },
    promo: {
        apply: async (code) => axiosInstance.get(`/promo/apply?code=${code}`),
    },
    webcast: {
        resolve: async ({ code, time }) =>
            axiosInstance.get(`/webcast/resolve?code=${code}&time=${time}`),
    },
    users: createService('users'),
    gumlet: createService('gumlet'),
};
