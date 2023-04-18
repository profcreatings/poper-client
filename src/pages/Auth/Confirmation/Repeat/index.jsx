import { useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import { useInterval } from 'react-use';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

import { useCheckConfirmationQuery } from '../../../../queries/user/useCheckConfirmationQuery.js';
import { useSendConfirmationMutation } from '../../../../queries/user/useSendConfirmationMutation.js';
import { Preloader } from '../../../../components/ui-kit/Preloader';
import { TextLink } from '../../../../components/ui-kit/TextLink/index.jsx';
import { Wrapper } from './styles.js';

export function Repeat() {
    const { onError } = useOutletContext();
    const email = useWatch({ name: 'email' });

    const query = useCheckConfirmationQuery({
        data: { email },
        onSuccess: async (data) => {
            // fake delay to show preloader
            await new Promise((rs) => setTimeout(rs, 1000));
            updateTimeout(data);
        },
        onError,
    });
    const mutation = useSendConfirmationMutation({
        onError,
    });

    const [msRemains, setMsRemains] = useState(0);
    const timeRemains = format(new Date(msRemains), 'm:ss');

    const isAvailable = msRemains < 0;
    const isLoading = query.isFetching || mutation.isLoading;
    const isIntervalEnabled = query.data && !isLoading;

    useInterval(
        () => updateTimeout(query.data),
        isIntervalEnabled ? 1000 : null,
    );

    function updateTimeout({ nextConfirmationAt }) {
        setMsRemains(new Date(nextConfirmationAt) - new Date() + 2000);
    }

    async function resend() {
        setMsRemains(0);
        await mutation.mutateAsync({ email });
        const { data } = await query.refetch();
        updateTimeout(data);
        toast('код отправлен');
    }

    return (
        <>
            {isAvailable ? (
                <TextLink onClick={resend} underline>
                    отправить код ещё раз
                </TextLink>
            ) : (
                <Wrapper>
                    {msRemains ? (
                        `отправить ещё раз через ${timeRemains}`
                    ) : (
                        <Preloader dotWidth={4} color="grey" />
                    )}
                </Wrapper>
            )}
        </>
    );
}
