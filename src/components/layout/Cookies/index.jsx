import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

import { Button } from '../../ui-kit/Button/index.jsx';
import { LOCAL_STORAGE_KEYS } from '../../../constants/storage.js';
import { Wrapper } from './styles.js';

export function Cookies() {
    const isShownRef = useRef(
        localStorage.getItem(LOCAL_STORAGE_KEYS.cookiesAgree),
    );

    const handleAgree = () => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.cookiesAgree, 'true');
        toast.dismiss();
    };

    useEffect(() => {
        if (isShownRef.current) {
            return;
        }

        setTimeout(() => {
            toast(
                <Wrapper>
                    мы используем куки на нашем сайте
                    <Button view="red" onClick={handleAgree}>
                        ок, используйте
                    </Button>
                </Wrapper>,
                {
                    duration: Infinity,
                    position: 'bottom-center',
                },
            );
        }, 2000);

        isShownRef.current = true;
    }, []);

    return null;
}
