import { useFormContext } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';

import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { Field } from '../../../components/form/Field/index.jsx';
import { useRegisterMutation } from '../../../queries/user/useRegisterMutation.js';
import { ROUTES } from '../../../constants/router.js';
import { TextLink } from '../../../components/ui-kit/TextLink';
import { Form } from '../../../components/form/Form/index.jsx';
import { FormError } from '../../../components/form/FormError/index.jsx';
import { SubmitButton } from '../../../components/form/SubmitButton/index.jsx';
import { Info, StyledCheckbox } from './styles.js';

export function RegistrationPage() {
    const { onSuccess, onError } = useOutletContext();
    const { setError } = useFormContext();
    const { mutateAsync: register } = useRegisterMutation({
        onSuccess,
        onError: handleError,
    });

    function handleError(err) {
        if (err.message.includes('already taken')) {
            return setError('email', { message: 'e-mail уже занят' });
        }

        onError(err);
    }

    return (
        <Form onSubmit={register}>
            <h2>Регистрация</h2>
            <Field as={Input} name="name" type="name" placeholder="имя" />
            <Field as={Input} name="email" type="text" placeholder="e-mail" />
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
            <Field as={StyledCheckbox} name="mailing">
                я даю согласие на получение
                рекламной&nbsp;рассылки&nbsp;от&nbsp;организатора
            </Field>
            <Info>
                нажимая кнопку, я принимаю{' '}
                <TextLink href="/offer.pdf" target="_blank" underline>
                    оферту
                </TextLink>{' '}
                и соглашаюсь с{' '}
                <TextLink href="/policy.pdf" target="_blank" underline>
                    политикой конфиденциальности
                </TextLink>
            </Info>
            <SubmitButton>Зарегистрироваться</SubmitButton>
            <FormError />
            <TextLink to={ROUTES.login} underline>
                вход
            </TextLink>
        </Form>
    );
}
