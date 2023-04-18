import { useNavigate } from 'react-router-dom';

import { Center } from '../../components/layout/Center';
import { CheckCircleIcon } from '../../components/ui-kit/Icons/index.jsx';
import { Button } from '../../components/ui-kit/Button';

export function PaymentSuccessPage() {
    const navigate = useNavigate();

    return (
        <Center>
            <div>
                <h2>Покупка спешла</h2>
                <CheckCircleIcon />
                <span>поздравляем! ты приобрёл доступ к просмотру спешла</span>
                <Button view="red" onClick={() => navigate('/')}>
                    На главную
                </Button>
            </div>
        </Center>
    );
}
