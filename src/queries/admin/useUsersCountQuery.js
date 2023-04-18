import { useQuery } from '@tanstack/react-query';

import { API } from '../../api/index.js';
import { getAdminParams } from './utils/getAdminParams.js';

export const useUsersCountQuery = ({ options, params }) =>
    useQuery({
        queryKey: ['users-count', params],
        queryFn: () =>
            API.users.get('count', {
                params: getAdminParams(params),
            }),
        refetchOnWindowFocus: import.meta.env.PROD,
        refetchOnMount: false,
        keepPreviousData: true,
        ...options,
    });
