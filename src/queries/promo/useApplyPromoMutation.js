import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useApplyPromoMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: (code) => API.promo.apply(code),
    });
