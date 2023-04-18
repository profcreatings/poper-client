import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { Controls } from './Controls/index.jsx';
import { PlayerGlobalStyles, Wrapper } from './styles.jsx';
import { usePlayer } from './hooks/usePlayer.js';
import { Spinner } from './Spinner/index.jsx';
import { useHotkeys } from '../../../hooks/useHotkeys';
// import { useDRM } from './hooks/useDRM.js';
// import { useAnalytics } from './hooks/useAnalytics.js';

// TODO: poster
export function Player() {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const player = usePlayer({ videoRef, wrapperRef });
    const [searchParams] = useSearchParams();
    const [hotkeysActive, setHotkeysActive] = useState(true);

    // TODO: refactor
    useEffect(() => {
        if (!player) {
            return;
        }
        player
            .load(
                'https://video.gumlet.io/6433e7e6fe5ed6d06aedc206/6436ccb50ff4c2da92de0424/main.m3u8',
                searchParams.get('time'),
            )
            .then(() => {
                player.addTextTrackAsync(
                    '/__mocks__/ru.vtt',
                    'ru',
                    'subtitles',
                );
                player.addTextTrackAsync(
                    '/__mocks__/en.vtt',
                    'en',
                    'subtitles',
                );
            });

    }, [player, searchParams, hotkeysActive]);

    useHotkeys(videoRef);


    // useAnalytics({ player, videoRef });

    return (
        <Wrapper ref={wrapperRef}>
            <PlayerGlobalStyles />
            <video ref={videoRef}/>
            <Controls hotkeysActive={hotkeysActive} setHotkeysActive={setHotkeysActive} />
            <Spinner />
        </Wrapper>
    );
}