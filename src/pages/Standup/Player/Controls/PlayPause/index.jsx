import { forwardRef } from 'react';

import { ControlButton } from '../../ControlButton/index.jsx';
import {
    PauseSmallIcon,
    PlaySmallIcon,
} from '../../../../../components/ui-kit/Icons/index.jsx';
import { useTogglePlay } from '../../hooks/useTogglePlay.js';

export const PlayPause = forwardRef(_PlayPause);

export function _PlayPause(props, ref) {
    const [isPlaying, togglePlay] = useTogglePlay();

    return (
        <ControlButton
            ref={ref}
            onClick={togglePlay}
            desktop
            mobile
            mobileWidth={13}
            {...props}
        >
            {isPlaying ? <PauseSmallIcon /> : <PlaySmallIcon />}
        </ControlButton>
    );
}
