import { useFormContext, useWatch } from 'react-hook-form';

import { Line, Price } from '../styles.js';
import { Button } from '../../../components/ui-kit/Button/index.jsx';
import { FormError } from '../../../components/form/FormError/index.jsx';
import { TextLink } from '../../../components/ui-kit/TextLink/index.jsx';
import { STEPS } from '../constants.js';
import { FormHelper } from '../../../components/form/FormHelper';
import {
    SPECIAL_PRICE,
    SPECIAL_RELEASE_DATE,
} from '../../../constants/special.js';

export function Initial() {
    const { setValue } = useFormContext();
    const validPromoCode = useWatch({ name: 'validPromoCode' });

    return (
        <>
            <FormHelper>
                просмотр станет доступен <br />
                {SPECIAL_RELEASE_DATE.toLocaleDateString('ru')}
            </FormHelper>
            {validPromoCode ? (
                <>
                    <Line>
                        <span>цена</span>
                        <Price>{SPECIAL_PRICE} ₽</Price>
                    </Line>
                    <Line>
                        <span>скидка</span>
                        <Price discount>- {SPECIAL_PRICE / 2} ₽</Price>
                    </Line>
                    <Line overall>
                        <span>итого</span>
                        <Price big>{SPECIAL_PRICE / 2} ₽</Price>
                    </Line>
                </>
            ) : (
                <Line>
                    <span>цена</span>
                    <Price big>420 ₽</Price>
                </Line>
            )}

            <Button view="red" onClick={() => setValue('step', STEPS.choice)}>
                Оплатить
            </Button>

            <FormError />

            {!validPromoCode && (
                <TextLink
                    underline
                    onClick={() => setValue('step', STEPS.promo)}
                >
                    ввести промокод
                </TextLink>
            )}
        </>
    );
}
