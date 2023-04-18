import { axiosInstance } from './axios';

export const createService = (name) => ({
    get(id, config) {
        const url = id === 'all' ? name : `${name}/${id}`;
        return axiosInstance.get(url, config);
    },
    post(data, config) {
        return axiosInstance.post(name, data, config);
    },
    put(id, data, config) {
        return axiosInstance.put(`${name}/${id}`, data, config);
    },
    delete(id, config) {
        return axiosInstance.delete(`${name}/${id}`, config);
    },
});
