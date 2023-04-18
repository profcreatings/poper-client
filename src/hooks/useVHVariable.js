import { useLayoutEffect } from 'react';
import { throttle } from 'lodash';

export const useVHVariable = () => {
    useLayoutEffect(() => {
        const addVH = throttle(() => {
            const vh = window.innerHeight * 0.01;

            document.documentElement.style.setProperty('--vh', `${vh}px`);
            document.documentElement.style.setProperty(
                '--100vh',
                `${vh * 100}px`,
            );
        }, 100);

        window.addEventListener('resize', addVH);
        addVH();

        return () => window.removeEventListener('resize', addVH);
    }, []);
};
