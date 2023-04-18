import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useInterval } from 'react-use';

import { socket } from '../../../socket.js';
import { useSocket } from '../../../hooks/useSocket.js';
import { Preloader } from '../../../components/ui-kit/Preloader';
import { LOCAL_STORAGE_KEYS } from '../../../constants/storage.js';
import { API } from '../../../api/index.js';
import { ROUTES } from '../../../constants/router.js';
import { queryClient } from '../../../queries/index.js';
import { SPECIAL_ID } from '../../../constants/special.js';
import { Code, QR, StyledKeyIcon, Wrapper } from './styles.js';

export function WebCastRequestPage() {
    const [code, setCode] = useState(null);
    const [qr, setQr] = useState(null);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const sendRequest = useCallback(
        () =>
            socket.emit('webcast.request', {
                time: searchParams.get('time'),
            }),
        [searchParams],
    );

    const handlers = useMemo(
        () => ({
            connect: sendRequest,

            'webcast.code': ({ code, qr }) => {
                setCode(code);
                setQr(qr);
            },

            'webcast.resolve': ({ jwt, user, time }) => {
                localStorage.setItem(LOCAL_STORAGE_KEYS.jwt, jwt);
                API.auth.setJwt(jwt);
                queryClient.setQueryData(['user'], user);

                navigate(
                    `${ROUTES.standup}/${SPECIAL_ID}?time=${time}&play=true`,
                );
            },
        }),
        [navigate, sendRequest],
    );

    useSocket({ handlers });

    useInterval(sendRequest, 5 * 60 * 1000);

    if (!code) {
        return <Preloader />;
    }

    return (
        <Wrapper>
            <Code>
                <StyledKeyIcon />
                {code}
            </Code>
            <QR dangerouslySetInnerHTML={{ __html: qr }} />
        </Wrapper>
    );
}
