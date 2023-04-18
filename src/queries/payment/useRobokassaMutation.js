import { useMutation } from '@tanstack/react-query';

import { API } from '../../api/index.js';

export const useRobokassaMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ promoCode, isTest }) =>
            API.robokassa.request({
                isTest: isTest ?? import.meta.env.DEV,
                promoCode,
            }),
    });
