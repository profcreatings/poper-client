import { useNavigate, useOutletContext } from 'react-router-dom';

import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { useLoginMutation } from '../../../queries/user/useLoginMutation.js';
import { Field } from '../../../components/form/Field/index.jsx';
import { ROUTES } from '../../../constants/router.js';
import { TextLink } from '../../../components/ui-kit/TextLink';
import { Form } from '../../../components/form/Form/index.jsx';
import {
    FormError,
    useSetFormError,
} from '../../../components/form/FormError/index.jsx';
import { SubmitButton } from '../../../components/form/SubmitButton/index.jsx';

export function LoginPage() {
    const { onSuccess, onError } = useOutletContext();
    const navigate = useNavigate();
    const setFormError = useSetFormError();
    const { mutateAsync: login } = useLoginMutation({
        onSuccess,
        onError: handleError,
    });

    function handleError(err) {
        if (err.message.includes('invalid identifier')) {
            return setFormError(['неверный e-mail или пароль']);
        }

        if (err.message.includes('not confirmed')) {
            return navigate(ROUTES.confirmation);
        }

        onError(err);
    }

    return (
        <Form onSubmit={login}>
            <h2>Вход</h2>
            <Field as={Input} name="email" type="text" placeholder="e-mail" />
            <Field
                as={Input}
                name="password"
                type="password"
                placeholder="пароль"
            />
            <SubmitButton>Войти</SubmitButton>
            <FormError />
            <TextLink to={ROUTES.forgotPassword} underline>
                я не помню пароль
            </TextLink>
            <TextLink to={ROUTES.registration} underline>
                регистрация
            </TextLink>
        </Form>
    );
}
