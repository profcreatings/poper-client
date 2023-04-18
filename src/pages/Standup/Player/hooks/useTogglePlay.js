import { useToggle } from 'react-use';
import { useCallback, useEffect } from 'react';

export const useTogglePlay = () => {
    const [isPlaying, toggleIsPlaying] = useToggle(false);

    useEffect(() => {
        const listener = () => {
            const video = window.player.getMediaElement();

            video.addEventListener('pause', toggleIsPlaying);
            video.addEventListener('play', toggleIsPlaying);
        };

        window.player.addEventListener('loaded', listener);

        return () => window.player.removeEventListener('loaded', listener);
    }, [toggleIsPlaying]);

    const toggle = useCallback(() => {
        const video = window.player.getMediaElement();
        const isPlaying =
            video.currentTime > 0 &&
            !video.paused &&
            !video.ended &&
            video.readyState > 2;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
    }, []);

    return [isPlaying, toggle];
};
