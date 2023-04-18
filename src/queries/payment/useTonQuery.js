import { useQuery } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useTonQuery = (options) =>
    useQuery({
        ...options,
        queryKey: ['ton'],
        refetchOnWindowFocus: false,
        queryFn: ({ promoCode }) =>
            API.ton.request({
                promoCode: promoCode || options?.data?.promoCode,
            }),
    });
