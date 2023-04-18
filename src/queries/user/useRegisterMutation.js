import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useRegisterMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ email, password, name, mailing }) =>
            API.auth.register({
                username: email,
                email,
                password,
                name,
                mailing: !!mailing,
            }),
    });
