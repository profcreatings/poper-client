import { Field } from '../../../components/form/Field/index.jsx';
import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { SubmitButton } from '../../../components/form/SubmitButton/index.jsx';
import { FormError } from '../../../components/form/FormError/index.jsx';
import { TextLink } from '../../../components/ui-kit/TextLink/index.jsx';
import { ROUTES } from '../../../constants/router.js';

export function ChangePasswordPage() {
    return (
        <>
            <h2>Изменение пароля</h2>
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
            <TextLink to={ROUTES.profile} underline>
                назад
            </TextLink>
        </>
    );
}
