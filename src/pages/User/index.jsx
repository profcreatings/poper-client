import { useLayoutEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useUserQuery } from '../../queries/user/useUserQuery.js';
import { Center } from '../../components/layout/Center';
import { Form } from '../../components/form/Form';
import { useUpdateUserMutation } from '../../queries/user/useUpdateUserMutation.js';
import { useSetFormError } from '../../components/form/FormError/index.jsx';
import { ERROR_MESSAGES } from '../../constants/errors.js';
import { ROUTES } from '../../constants/router.js';
import { getValidationSchema } from './validation.js';

export function UserPage() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { data: user } = useUserQuery();
    const { mutateAsync: updateUser } = useUpdateUserMutation({
        onSuccess: handleSuccess,
        onError: handleError,
    });

    const form = useForm({
        resolver: yupResolver(getValidationSchema(pathname)),
        defaultValues: user,
    });
    const { reset } = form;
    const setFormError = useSetFormError(form);

    useLayoutEffect(() => {
        reset(user);
    }, [user, pathname, reset]);

    function handleSuccess() {
        const message = {
            [ROUTES.profile]: 'профиль успешно изменён',
            [ROUTES.changePassword]: 'пароль успешно изменён',
        }[pathname];

        toast(message);
        navigate(ROUTES.profile);
    }

    function handleError() {
        setFormError(ERROR_MESSAGES[500]);
    }

    return (
        <FormProvider {...form}>
            <Center>
                <Form onSubmit={updateUser}>
                    <Outlet />
                </Form>
            </Center>
        </FormProvider>
    );
}
