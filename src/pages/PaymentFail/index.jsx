import { Navigate, useNavigate } from 'react-router-dom';

import { Center } from '../../components/layout/Center';
import { SadIcon } from '../../components/ui-kit/Icons/index.jsx';
import { Button } from '../../components/ui-kit/Button';
import { ROUTES } from '../../constants/router.js';
import { TextLink } from '../../components/ui-kit/TextLink/index.jsx';
import { useUserQuery } from '../../queries/user/useUserQuery.js';

export function PaymentFailPage() {
    const navigate = useNavigate();
    const { data: user } = useUserQuery();

    if (user?.subscribed) {
        return <Navigate to={ROUTES.paymentSuccess} replace />;
    }

    return (
        <Center>
            <div>
                <h2>Покупка спешла</h2>
                <SadIcon />
                <span>что-то пошло не так и оплата не прошла</span>
                <Button view="red" onClick={() => navigate(ROUTES.buy)}>
                    Попробовать снова
                </Button>
                <TextLink to={ROUTES.support} underline>
                    связаться с поддержкой
                </TextLink>
            </div>
        </Center>
    );
}
