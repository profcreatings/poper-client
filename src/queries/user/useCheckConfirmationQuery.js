import { useQuery } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useCheckConfirmationQuery = (options) =>
    useQuery({
        ...options,
        queryKey: ['confirmation', options.data.email],
        queryFn: ({ queryKey }) => API.auth.checkConfirmation(queryKey[1]),
        refetchOnWindowFocus: false,
    });
