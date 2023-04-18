import { useLayoutEffect, useRef, useState } from 'react';
import shaka from 'shaka-player/dist/shaka-player.ui.js';

import { CONTROL_PANEL_ELEMENTS } from '../Controls/constants.js';

export const usePlayer = ({ videoRef, wrapperRef }) => {
    const [player, setPlayer] = useState(null);
    const isCreatedRef = useRef(false);

    useLayoutEffect(() => {
        if (isCreatedRef.current) {
            return;
        }

        /* Player */
        const newPlayer = new shaka.Player(videoRef.current);

        newPlayer.configure({
            abr: { enabled: true },
        });

        window.player = newPlayer;
        setPlayer(newPlayer);
        isCreatedRef.current = true;

        /* Controls */
        const ui = new shaka.ui.Overlay(
            newPlayer,
            wrapperRef.current,
            videoRef.current,
        );

        ui.configure({
            fadeDelay: ui.isMobile() ? 5 : 1,
            controlPanelElements: CONTROL_PANEL_ELEMENTS,
            overflowMenuButtons: ['playback_rate', 'quality'],
            seekBarColors: {
                played: 'var(--red)',
            },
        });
    }, [player, videoRef, wrapperRef]);

    return player;
};
