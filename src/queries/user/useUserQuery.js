import { useQuery } from '@tanstack/react-query';
import { API } from '../../api/index.js';
import { LOCAL_STORAGE_KEYS } from '../../constants/storage.js';

export const useUserQuery = (options) =>
    useQuery({
        queryKey: ['user'],
        queryFn: () =>
            API.users.get('me', {
                params: {
                    fields: [
                        'confirmed',
                        'subscribed',
                        'blocked',
                        'email',
                        'name',
                    ],
                },
            }),
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        enabled:
            !!localStorage.getItem(LOCAL_STORAGE_KEYS.jwt) && !document.hidden,
        ...options,
    });
