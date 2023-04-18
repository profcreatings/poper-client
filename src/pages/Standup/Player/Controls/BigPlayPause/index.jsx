import { forwardRef } from 'react';

import { useTogglePlay } from '../../hooks/useTogglePlay.js';
import { PlayBigIcon } from '../../../../../components/ui-kit/Icons/index.jsx';
import { StyledButton } from './styles.js';

export const BigPlayPause = forwardRef(_BigPlayPause);

// TODO: blink; loader overflow
function _BigPlayPause(props, ref) {
    const [isPlaying, togglePlay] = useTogglePlay();

    return (
        <StyledButton
            ref={ref}
            onClick={togglePlay}
            hidden={isPlaying}
            {...props}
        >
            <PlayBigIcon />
        </StyledButton>
    );
}
