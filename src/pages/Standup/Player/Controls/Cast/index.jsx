import { useToggle } from 'react-use';
import { forwardRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    AirplayIcon,
    ChromecastIcon,
    WebcastIcon,
} from '../../../../../components/ui-kit/Icons/index.jsx';
import { Menu, MenuOption } from '../../Menu/index.jsx';
import { ROUTES } from '../../../../../constants/router.js';
import { StyledControlButton } from './styles.js';

export const Cast = forwardRef(_Cast);

function _Cast(props, ref) {
    const [isOpen, toggleIsOpen] = useToggle(null);
    const close = () => toggleIsOpen(false);
    const navigate = useNavigate();

    const goToWebCast = () => {
        const time = window.player.getMediaElement().currentTime;

        navigate(`${ROUTES.webCastResolve}?time=${time}`);
    };

    const airplay = async () => {
        try {
            await window.player.getMediaElement().webkitShowPlaybackTargetPicker();
        } catch (error) {
            console.error('Airplay error:', error);
        }
    };

    return (
        <>
            <StyledControlButton
                ref={ref}
                onClick={toggleIsOpen}
                desktop
                mobile
                mobileWidth={21}
                {...props}
            >
                <ChromecastIcon />
            </StyledControlButton>
            <Menu
                title="смотреть на другом устройстве"
                opened={isOpen}
                buttonRef={ref}
                onClose={close}
            >
                <MenuOption onClick={airplay}>
                    <AirplayIcon /> airplay
                </MenuOption>
                <MenuOption>
                    <ChromecastIcon />
                    chromecast
                </MenuOption>
                <MenuOption onClick={goToWebCast}>
                    <WebcastIcon />
                    смотреть на другом устройстве
                </MenuOption>
            </Menu>
        </>
    );
}