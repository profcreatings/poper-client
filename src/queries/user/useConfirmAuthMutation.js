import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useConfirmAuthMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ code, email }) => API.auth.confirm({ code, email }),
    });
