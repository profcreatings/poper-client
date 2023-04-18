import { useOutletContext, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Form } from '../../../components/form/Form/index.jsx';
import { Field } from '../../../components/form/Field/index.jsx';
import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { useResetPasswordMutation } from '../../../queries/user/useResetPasswordMutation.js';
import {
    FormError,
    useSetFormError,
} from '../../../components/form/FormError/index.jsx';
import { SubmitButton } from '../../../components/form/SubmitButton/index.jsx';

export function ResetPasswordPage() {
    const { onSuccess, onError } = useOutletContext();
    const setFormError = useSetFormError();
    const [searchParams] = useSearchParams();
    const { mutateAsync } = useResetPasswordMutation({
        onSuccess: handleSuccess,
        onError: handleError,
    });

    function handleSubmit({ password, passwordConfirmation }) {
        return mutateAsync({
            code: searchParams.get('code'),
            password,
            passwordConfirmation,
        });
    }

    function handleSuccess(...args) {
        toast('пароль успешно изменён');
        onSuccess(...args);
    }

    function handleError(err) {
        if (err.message.includes('incorrect code')) {
            return setFormError('ссылка недействительна');
        }

        onError(err);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Новый пароль</h2>
            <Field
                as={Input}
                name="password"
                type="password"
                placeholder="пароль"
                rules={{
                    deps: ['passwordConfirmation'],
                }}
            />
            <Field
                as={Input}
                name="passwordConfirmation"
                type="password"
                placeholder="повторить пароль"
            />
            <SubmitButton>Изменить</SubmitButton>
            <FormError />
        </Form>
    );
}
