import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';
import { queryClient } from '../index.js';

export const useUpdateUserMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: (data) => API.users.put('me', data),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user);
            options?.onSuccess?.(user);
        },
    });
