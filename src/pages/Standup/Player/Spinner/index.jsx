import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Preloader } from '../../../../components/ui-kit/Preloader';

export function Spinner() {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const container = document.querySelector('.shaka-spinner');

        container.innerHTML = '';
        setContainer(container);
    }, []);

    if (!container) {
        return null;
    }

    return createPortal(<Preloader />, container);
}
