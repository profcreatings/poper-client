import { forwardRef, useState } from 'react';
import { useToggle } from 'react-use';

import { SubtitlesIcon } from '../../../../../components/ui-kit/Icons/index.jsx';
import { StyledControlButton } from './styles.js';
import { SubtitlesMenu } from './SubtitlesMenu/index.jsx';

export const Subtitles = forwardRef(_Subtitles);

// TODO: double bug
export function _Subtitles(props, ref) {
    const [value, setValue] = useState('off');
    const [isOpen, toggleIsOpen] = useToggle(null);
    const close = () => toggleIsOpen(false);

    return (
        <>
            <StyledControlButton
                desktop
                ref={ref}
                onClick={toggleIsOpen}
                {...props}
            >
                <SubtitlesIcon />
            </StyledControlButton>
            <SubtitlesMenu
                opened={isOpen}
                buttonRef={ref}
                onClose={close}
                value={value}
                onSelect={setValue}
            />
        </>
    );
}
