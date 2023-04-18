import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../index.js';
import { API } from '../../api/index.js';
import { LOCAL_STORAGE_KEYS } from '../../constants/storage.js';

export const useLogoutMutation = () =>
    useMutation({
        networkMode: 'always',
        mutationFn: () => {
            localStorage.removeItem(LOCAL_STORAGE_KEYS.jwt);
            localStorage.removeItem(LOCAL_STORAGE_KEYS.subscribed);
            API.auth.removeJwt();

            queryClient.resetQueries(['user']);
            queryClient.cancelQueries(['user']);
        },
    });
