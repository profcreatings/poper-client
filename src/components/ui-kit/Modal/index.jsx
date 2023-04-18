import { useRef, useState } from 'react';
import { useEvent } from 'react-use';

import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock.js';
import { MODAL_TRANSITION_DURATION, Overlay } from './styles.js';

export function Modal({ opened, prerender, children, onClose }) {
    const [key, setKey] = useState(0);
    const ref = useRef(null);

    useBodyScrollLock(ref, opened);

    const handleClose = (e) => {
        if (!e || e.target === e.currentTarget) {
            onClose();
            setTimeout(() => {
                setKey((key) => key + 1);
            }, MODAL_TRANSITION_DURATION + 10);
        }
    };

    useEvent('keydown', (e) => {
        if (opened && e.key === 'Escape') {
            handleClose();
        }
    });

    return (
        <Overlay ref={ref} key={key} opened={opened} onClick={handleClose}>
            {(opened || prerender) && children}
        </Overlay>
    );
}
