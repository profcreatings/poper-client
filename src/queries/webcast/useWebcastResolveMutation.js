import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useWebcastResolveMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ code, time }) => API.webcast.resolve({ code, time }),
    });
