import { object, ref, string } from 'yup';

export const nameSchema = object({
    name: string().required('это обязательное поле'),
});

export const emailSchema = object({
    email: string()
        .required('некорректный e-mail')
        .email('некорректный e-mail'),
});

export const passwordSchema = object({
    password: string().min(6, 'не менее 6 символов'),
    passwordConfirmation: string().equals(
        [ref('password')],
        'пароли не совпадают',
    ),
});
