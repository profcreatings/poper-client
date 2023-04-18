import { useMutation } from '@tanstack/react-query';

import { API } from '../../api/index.js';

export const usePaywallMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ promoCode }) => API.paywall.request({ promoCode }),
    });
