import { useLayoutEffect, useState } from 'react';
import { Gradient, StyledVideo, Wrapper } from './styles.js';

export function Background({ video, image }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoRendered, setIsVideoRendered] = useState(false);
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    useLayoutEffect(() => {
        const bgImg = new Image();

        bgImg.onload = function () {
            setIsVisible(true);
        };

        bgImg.src = image;
    }, [image]);

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1500);
    }, []);

    const handleTransitionEnd = () => {
        setTimeout(() => {
            setIsVideoRendered(true);
        }, 200);
    };

    const handlePlay = () => {
        setIsVideoVisible(true);
    };

    return (
        <Wrapper
            visible={isVisible}
            image={image}
            onTransitionEnd={handleTransitionEnd}
        >
            {video && isVideoRendered && (
                <StyledVideo
                    onPlay={handlePlay}
                    src={video}
                    visible={isVideoVisible}
                    autoPlay
                    playsInline
                    muted
                    loop
                />
            )}
            <Gradient />
        </Wrapper>
    );
}
