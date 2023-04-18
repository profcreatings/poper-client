import { useQuery } from '@tanstack/react-query';

import { API } from '../../api/index.js';
import { getAdminParams } from './utils/getAdminParams.js';

export const useUsersQuery = ({ options, params } = {}) =>
    useQuery({
        queryKey: ['users', params],
        queryFn: () =>
            API.users.get('all', {
                params: getAdminParams(params),
            }),
        refetchOnWindowFocus: import.meta.env.PROD,
        keepPreviousData: true,
        ...options,
    });
