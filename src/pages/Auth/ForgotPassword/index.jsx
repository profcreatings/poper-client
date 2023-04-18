import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

import { useForgotPasswordMutation } from '../../../queries/user/useForgotPasswordMutation.js';
import { Form } from '../../../components/form/Form/index.jsx';
import { Field } from '../../../components/form/Field/index.jsx';
import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { Email } from '../styles.js';
import { TextLink } from '../../../components/ui-kit/TextLink';
import { FormError } from '../../../components/form/FormError/index.jsx';
import { LetterIcon } from '../../../components/ui-kit/Icons';
import { SubmitButton } from '../../../components/form/SubmitButton/index.jsx';
import { FormHelper } from '../../../components/form/FormHelper/index.jsx';
import { SentHelper } from './styles.js';

export function ForgotPasswordPage() {
    const { onError } = useOutletContext();
    const { getValues } = useFormContext();
    const [isSent, setIsSent] = useState(false);
    const { mutateAsync } = useForgotPasswordMutation({
        onSuccess: () => setIsSent(true),
        onError,
    });

    if (isSent) {
        return (
            <Form>
                <h2>Проверь почту</h2>
                <LetterIcon />
                <SentHelper>
                    мы отправили ссылку
                    <p>для сброса пароля на</p>
                    <Email>{getValues().email}</Email>
                </SentHelper>
            </Form>
        );
    }

    return (
        <Form onSubmit={mutateAsync}>
            <h2>Сброс пароля</h2>
            <FormHelper>мы отправим ссылку для сброса на&nbsp;почту</FormHelper>
            <Field as={Input} name="email" type="text" placeholder="e-mail" />
            <SubmitButton>Отправить</SubmitButton>
            <FormError />
            <TextLink to={-1} underline>
                назад
            </TextLink>
        </Form>
    );
}
