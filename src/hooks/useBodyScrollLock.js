import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const useBodyScrollLock = (ref, shouldLock) => {
    useEffect(() => {
        const root = document.getElementById('root');

        if (shouldLock) {
            disableBodyScroll(ref.current);
            root.style.overflow = 'scroll';
        } else {
            enableBodyScroll(ref.current);
            root.style.overflow = 'auto';
        }
    }, [ref, shouldLock]);
};
