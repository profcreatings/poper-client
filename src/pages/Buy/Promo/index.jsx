import { useFormContext } from 'react-hook-form';

import { FormHelper } from '../../../components/form/FormHelper/index.jsx';
import { Field } from '../../../components/form/Field/index.jsx';
import { Input } from '../../../components/ui-kit/Input/index.jsx';
import { Button } from '../../../components/ui-kit/Button/index.jsx';
import {
    FormError,
    useSetFormError,
} from '../../../components/form/FormError/index.jsx';
import { TextLink } from '../../../components/ui-kit/TextLink/index.jsx';
import { useApplyPromoMutation } from '../../../queries/promo/useApplyPromoMutation.js';
import { ERROR_MESSAGES } from '../../../constants/errors.js';
import { STEPS } from '../constants.js';
import { useUserQuery } from '../../../queries/user/useUserQuery.js';

export function Promo() {
    const { setValue, getValues } = useFormContext();
    const setFormError = useSetFormError();
    const userQuery = useUserQuery();

    const goBack = () => setValue('step', STEPS.initial);

    const handleSuccess = ({ free, value }) => {
        if (free) {
            userQuery.refetch();
        } else {
            setValue('validPromoCode', value);
            goBack();
        }
    };

    const handleError = (err) => {
        if (err.message.includes('not found')) {
            return setFormError('промокод не найден');
        }
        if (err.message.includes('already used')) {
            return setFormError('промокод уже использовался');
        }

        setFormError(ERROR_MESSAGES[500]);
    };

    const applyPromoMutation = useApplyPromoMutation({
        onSuccess: handleSuccess,
        onError: handleError,
    });

    const validatePromo = () => {
        applyPromoMutation.mutate(getValues().promoCode);
    };

    return (
        <>
            <h2>у тебя есть промокод?</h2>
            <FormHelper>
                если у&nbsp;тебя есть промокод на&nbsp;скидку или бесплатный
                просмотр&nbsp;&mdash; самое время ввести его ниже:
            </FormHelper>
            <Field
                as={Input}
                name="promoCode"
                type="text"
                placeholder="промокод"
            />
            <Button
                view="red"
                onClick={validatePromo}
                loading={applyPromoMutation.isLoading || userQuery.isFetching}
            >
                Применить
            </Button>
            <FormError />
            <TextLink underline onClick={goBack}>
                назад
            </TextLink>
        </>
    );
}
