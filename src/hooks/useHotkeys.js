import { useEffect } from 'react';

export const useHotkeys = (videoRef) => {

    useEffect(() => {
        function handleKeyPress(e) {
            switch (e.code) {
                case 'KeyF':
                    videoRef.current?.requestFullscreen();
                    break;
                case 'KeyM':
                    videoRef.current.muted = !videoRef.current.muted;
                    break;
                case 'ArrowUp':
                    videoRef.current.volume = Math.min(videoRef.current.volume + 0.05, 1);
                    break;
                case 'ArrowDown':
                    videoRef.current.volume = Math.max(videoRef.current.volume - 0.05, 0);
                    break;
                case 'ArrowLeft':
                    videoRef.current.currentTime -= 5;
                    break;
                case 'ArrowRight':
                    videoRef.current.currentTime += 5;
                    break;
                default:
                    break;
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [videoRef]);
};