import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useForgotPasswordMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ email }) => API.auth.forgotPassword({ email }),
    });
