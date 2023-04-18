import { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { Center } from '../../components/layout/Center';
import { Form } from '../../components/form/Form/index.jsx';
import { useUserQuery } from '../../queries/user/useUserQuery.js';
import { ROUTES } from '../../constants/router.js';
import { ERROR_MESSAGES } from '../../constants/errors.js';
import { useSetFormError } from '../../components/form/FormError/index.jsx';
import { STEPS } from './constants.js';
import { Initial } from './Initial/index.jsx';
import { Promo } from './Promo/index.jsx';
import { Choice } from './Choice/index.jsx';
import { Ton } from './Ton/index.jsx';

export function BuyPage() {
    const form = useForm({
        defaultValues: { step: STEPS.initial },
    });
    const { clearErrors, control } = form;
    const step = useWatch({ name: 'step', control });
    const setFormError = useSetFormError(form);

    const Step = {
        [STEPS.initial]: Initial,
        [STEPS.promo]: Promo,
        [STEPS.choice]: Choice,
        [STEPS.ton]: Ton,
    }[step];

    useEffect(() => {
        clearErrors();
    }, [step, clearErrors]);

    const handleError = (err) => {
        if (err.message.includes('already subscribed')) {
            return setFormError('уже оплачено');
        }

        setFormError(ERROR_MESSAGES[500]);
    };

    /* Redirect subscribed */
    const { data: user } = useUserQuery();

    if (user?.subscribed) {
        return <Navigate to={ROUTES.paymentSuccess} replace />;
    }

    return (
        <FormProvider {...form}>
            <Center>
                <Form>
                    <h2>Покупка спешла</h2>
                    <Step onError={handleError} />
                </Form>
            </Center>
        </FormProvider>
    );
}
