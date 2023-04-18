import { forwardRef, useEffect } from 'react';

import { useToggle } from 'react-use';
import {
    VolumeIcon,
    VolumeMutedIcon,
} from '../../../../../components/ui-kit/Icons/index.jsx';
import { StyledControlButton } from './styles.js';

export const Volume = forwardRef(_VolumeButton);

function _VolumeButton(props, ref) {
    const [isMuted, toggleIsMuted] = useToggle(false);

    useEffect(() => {
        const video = window.player.getMediaElement();

        const listener = (e) => {
            toggleIsMuted(e.target.muted);
        };

        video?.addEventListener('mute', listener);
        return () => video?.removeEventListener('mute', listener);
    }, [toggleIsMuted]);

    useEffect(() => {
        const video = window.player.getMediaElement();

        if (video) {
            video.muted = isMuted;
        }
    }, [isMuted]);

    return (
        <StyledControlButton
            ref={ref}
            onClick={toggleIsMuted}
            desktop
            mobile
            mobileWidth={22}
            {...props}
        >
            {isMuted ? <VolumeMutedIcon /> : <VolumeIcon />}
        </StyledControlButton>
    );
}