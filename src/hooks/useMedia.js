import { useLayoutEffect, useState } from 'react';
import { throttle } from 'lodash';

export const useMedia = (query) => {
    const [isMatches, setIsMatches] = useState(matchMedia(query).matches);

    useLayoutEffect(() => {
        const listener = throttle(() => {
            setIsMatches(matchMedia(query).matches);
        }, 100);

        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, [query]);

    return isMatches;
};
