import { useFormContext } from 'react-hook-form';
import { useCallback } from 'react';

export const useSetFormError = (form) => {
    const { setError } = useFormContext() || form;

    return useCallback(
        (message) => setError('formError', { message }),
        [setError],
    );
};
