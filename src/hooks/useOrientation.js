import { useLayoutEffect, useState } from 'react';
import { throttle } from 'lodash';

import { getOrientation } from '../utils/getOrientation.js';

export const useOrientation = () => {
    const [orientation, setOrientation] = useState(getOrientation());

    useLayoutEffect(() => {
        const listener = throttle(() => {
            setOrientation(getOrientation());
        }, 100);

        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, []);

    return orientation;
};
