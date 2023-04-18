import { useMutation } from '@tanstack/react-query';
import { API } from '../../api/index.js';

export const useSendConfirmationMutation = (options) =>
    useMutation({
        ...options,
        mutationFn: ({ email }) => API.auth.sendConfirmation({ email }),
    });
