import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useResetPasswordMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ code, password, passwordConfirmation }) =>
            API.auth.resetPassword({
                code,
                password,
                passwordConfirmation,
            }),
    });
