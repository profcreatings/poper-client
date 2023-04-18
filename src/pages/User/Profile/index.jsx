import { useFormContext } from 'react-hook-form';

import { Field } from '../../../components/form/Field/index.jsx';
import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { SubmitButton } from '../../../components/form/SubmitButton/index.jsx';
import { FormError } from '../../../components/form/FormError/index.jsx';
import { TextLink } from '../../../components/ui-kit/TextLink/index.jsx';
import { LogoutLink } from '../styles.js';
import { ROUTES } from '../../../constants/router.js';
import { useLogoutMutation } from '../../../queries/user/useLogoutMutation.js';

export function ProfilePage() {
    const { mutate: logout } = useLogoutMutation();
    const {
        formState: { isDirty },
    } = useFormContext();

    return (
        <>
            <h2>Профиль</h2>
            <Field as={Input} name="name" type="text" placeholder="имя" />
            <Field
                as={Input}
                name="email"
                type="text"
                placeholder="e-mail"
                disabled
            />
            <SubmitButton disabled={!isDirty}>Сохранить</SubmitButton>
            <FormError />
            <TextLink to={ROUTES.changePassword} underline>
                изменить пароль
            </TextLink>
            <LogoutLink onClick={logout} underline>
                выйти
            </LogoutLink>
        </>
    );
}
