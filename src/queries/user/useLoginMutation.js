import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useLoginMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ email, password }) =>
            API.auth.login({ identifier: email, password }),
    });
