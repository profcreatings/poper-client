import { object, string } from 'yup';
import { ROUTES } from '../../constants/router.js';
import {
    emailSchema,
    nameSchema,
    passwordSchema,
} from '../../constants/form.js';

export const getValidationSchema = (pathname) =>
    ({
        [ROUTES.registration]: registrationSchema,
        [ROUTES.login]: loginSchema,
        [ROUTES.confirmation]: confirmationSchema,
        [ROUTES.forgotPassword]: emailSchema,
        [ROUTES.resetPassword]: passwordSchema,
    }[pathname]);

const registrationSchema = emailSchema
    .concat(passwordSchema)
    .concat(nameSchema);

const loginSchema = emailSchema.concat(
    object({
        password: string().required('это обязательное поле'),
    }),
);

const confirmationSchema = object();
