import { useLayoutEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Navigate, useOutletContext } from 'react-router-dom';

import { Email } from '../styles.js';
import { Field } from '../../../components/form/Field/index.jsx';
import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { TextLink } from '../../../components/ui-kit/TextLink';
import { useConfirmAuthMutation } from '../../../queries/user/useConfirmAuthMutation.js';
import { ROUTES } from '../../../constants/router.js';
import { Form } from '../../../components/form/Form/index.jsx';
import {
    FormError,
    useSetFormError,
} from '../../../components/form/FormError/index.jsx';
import { SubmitButton } from '../../../components/form/SubmitButton/index.jsx';
import { FormHelper } from '../../../components/form/FormHelper/index.jsx';
import { Repeat } from './Repeat/index.jsx';

export function ConfirmationPage() {
    const { onSuccess, onError } = useOutletContext();
    const { resetField } = useFormContext();
    const setFormError = useSetFormError();
    const email = useWatch({ name: 'email' });
    const { mutateAsync: confirm } = useConfirmAuthMutation({
        onSuccess: (data) => {
            data.user.confirmed = true;
            onSuccess(data);
        },
        onError: handleError,
    });

    function handleError(err) {
        if (err.message.includes('invalid token')) {
            return setFormError('неверный код');
        }

        onError(err);
    }

    useLayoutEffect(() => {
        resetField('code');
    }, [resetField]);

    if (!email) {
        return <Navigate to={ROUTES.login} replace />;
    }

    return (
        <Form onSubmit={confirm}>
            <h2>Введи&nbsp;код</h2>
            <FormHelper>
                мы отправили код подтверждения на
                <Email>{email}</Email>
            </FormHelper>
            <Field as={Input} name="code" type="text" placeholder="код" />
            <SubmitButton>Подтвердить</SubmitButton>
            <FormError />
            <Repeat />
            <TextLink to={-1} underline>
                назад
            </TextLink>
        </Form>
    );
}
