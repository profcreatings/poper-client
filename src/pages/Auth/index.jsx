import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Outlet,
    useLocation,
    useNavigate,
    useSearchParams,
} from 'react-router-dom';

import { LOCAL_STORAGE_KEYS } from '../../constants/storage.js';
import { API } from '../../api/index.js';
import { queryClient } from '../../queries/index.js';
import { ROUTES } from '../../constants/router.js';
import { useSetFormError } from '../../components/form/FormError/index.jsx';
import { Center } from '../../components/layout/Center/index.jsx';
import { ERROR_MESSAGES } from '../../constants/errors.js';
import { usePersistSearchParams } from './hooks/usePersistSearchParams.js';
import { getValidationSchema } from './validation.js';

export function AuthPage() {
    /* Router */
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    usePersistSearchParams();

    /* Form */
    const form = useForm({
        resolver: yupResolver(getValidationSchema(pathname)),
    });
    const { reset, clearErrors } = form;
    const setFormError = useSetFormError(form);

    useEffect(() => {
        reset({}, { keepValues: true });
        clearErrors();
    }, [pathname, reset, clearErrors]);

    const handleSuccess = ({ jwt, user }) => {
        if (!user.confirmed) {
            navigate(ROUTES.confirmation);
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEYS.jwt, jwt);
            API.auth.setJwt(jwt);

            if (searchParams.has('buy')) {
                navigate(ROUTES.buy);
            }

            queryClient.setQueryData(['user'], user);
        }
    };

    const handleError = ({ message }) => {
        if (message.includes('too many attempts')) {
            return setFormError('слишком много попыток');
        }

        setFormError(ERROR_MESSAGES[500]);
    };

    return (
        <FormProvider {...form}>
            <Center>
                <Outlet
                    context={{
                        onSuccess: handleSuccess,
                        onError: handleError,
                    }}
                />
            </Center>
        </FormProvider>
    );
}
