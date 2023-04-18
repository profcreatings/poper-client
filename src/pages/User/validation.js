import { ROUTES } from '../../constants/router.js';
import { nameSchema, passwordSchema } from '../../constants/form.js';

export const getValidationSchema = (pathname) =>
    ({
        [ROUTES.profile]: nameSchema,
        [ROUTES.changePassword]: passwordSchema,
    }[pathname]);
