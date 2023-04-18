import { forwardRef, useEffect } from 'react';
import shaka from 'shaka-player/dist/shaka-player.ui.js';

import { FullscreenIcon } from '../../../../../components/ui-kit/Icons/index.jsx';
import { ControlButton } from '../../ControlButton/index.jsx';

export const Fullscreen = forwardRef(_Fullscreen);

export function _Fullscreen(props, ref) {
    const open = () =>
        window.player.getMediaElement().parentNode.requestFullscreen();
    const close = () => document.exitFullscreen();
    const toggle = () => {
        document.fullscreenElement ? close() : open();
    };

    useEffect(() => {
        shaka.polyfill.Fullscreen.install();
    }, []);

    return (
        <ControlButton
            ref={ref}
            onClick={toggle}
            desktop
            mobile
            mobileWidth={15}
            {...props}
        >
            <FullscreenIcon />
        </ControlButton>
    );
}
