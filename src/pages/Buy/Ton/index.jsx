import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';

import { TextLink } from '../../../components/ui-kit/TextLink/index.jsx';
import { STEPS } from '../constants.js';
import { FormHelper } from '../../../components/form/FormHelper/index.jsx';
import { Button } from '../../../components/ui-kit/Button/index.jsx';
import { useUserQuery } from '../../../queries/user/useUserQuery.js';
import { useTonQuery } from '../../../queries/payment/useTonQuery.js';
import { Preloader } from '../../../components/ui-kit/Preloader/index.jsx';
import { FormError } from '../../../components/form/FormError';
import { copyText } from '../../../utils/copyText.js';
import { PreloaderWrapper, QR, White } from './styles.js';

export function Ton() {
    const { setValue } = useFormContext();
    const promoCode = useWatch({ name: 'validPromoCode' });

    const { data, remove } = useTonQuery({
        data: { promoCode },
        refetchInterval: 4.5 * 60 * 1000,
    });

    useEffect(() => remove, [remove]);

    const openTonkeeper = () => {
        window.open(
            `https://app.tonkeeper.com/transfer/${data.address}?amount=${data.amount}`,
            '_blank',
        );
    };

    const copyAddress = () => {
        copyText(data.address);
        toast('адрес кошелька скопирован');
    };

    useUserQuery({
        refetchInterval: 5 * 1000,
    });

    return (
        <>
            {data ? (
                <>
                    <FormHelper>
                        для оплаты отправь{' '}
                        <White>{data.amount / 1000000000} TON</White>
                        <p>купить TON можно в приложении</p>
                        <White>
                            <a
                                href="https://tonkeeper.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Tonkeeper
                            </a>
                        </White>{' '}
                        или Telegram боте{' '}
                        <White>
                            <a
                                href="https://t.me/wallet"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @wallet
                            </a>
                        </White>
                    </FormHelper>
                    <QR dangerouslySetInnerHTML={{ __html: data.qr }} />
                    <Button
                        view="red"
                        onClick={openTonkeeper}
                        style={{ textTransform: 'none' }}
                    >
                        открыть Tonkeeper
                    </Button>
                    <Button view="grey" onClick={copyAddress}>
                        скопировать адрес
                    </Button>
                </>
            ) : (
                <PreloaderWrapper>
                    <Preloader />
                </PreloaderWrapper>
            )}
            <FormError />
            <TextLink underline onClick={() => setValue('step', STEPS.choice)}>
                назад
            </TextLink>
        </>
    );
}
