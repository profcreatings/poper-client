import { useFormContext, useWatch } from 'react-hook-form';

import { Button } from '../../../components/ui-kit/Button/index.jsx';
import { FormError } from '../../../components/form/FormError/index.jsx';
import { STEPS } from '../constants.js';
import { TextLink } from '../../../components/ui-kit/TextLink/index.jsx';
import { CardIcon, TonIcon } from '../../../components/ui-kit/Icons/index.jsx';
import { FormHelper } from '../../../components/form/FormHelper';
import { useRobokassaMutation } from '../../../queries/payment/useRobokassaMutation.js';
import { usePaywallMutation } from '../../../queries/payment/usePaywallMutation.js';
import { TonButton } from './styles.js';

export function Choice({ onError }) {
    const promoCode = useWatch({ name: 'validPromoCode' });
    const { setValue } = useFormContext();

    const mutationOptions = {
        onSuccess: (link) => {
            location.href = link;
        },
        onError,
    };

    const robokassaMutation = useRobokassaMutation(mutationOptions);
    const paywallMutation = usePaywallMutation(mutationOptions);

    const pay = ({ system, isTest }) => {
        const mutation = {
            robokassa: robokassaMutation,
            paywall: paywallMutation,
        }[system];

        return mutation.mutateAsync({ promoCode, isTest });
    };

    return (
        <>
            <FormHelper>выбери способ оплаты</FormHelper>
            <Button
                view="red"
                loading={robokassaMutation.isLoading}
                onClick={() => pay({ system: 'robokassa' })}
            >
                <CardIcon />
                российской картой
            </Button>
            <Button
                view="red"
                loading={paywallMutation.isLoading}
                onClick={() => pay({ system: 'paywall' })}
            >
                <CardIcon />
                иностранной картой
            </Button>
            <TonButton view="red" onClick={() => setValue('step', STEPS.ton)}>
                <TonIcon />
                <span>TON</span>
            </TonButton>
            <FormError />
            <TextLink underline onClick={() => setValue('step', STEPS.initial)}>
                назад
            </TextLink>
        </>
    );
}
