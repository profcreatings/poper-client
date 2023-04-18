import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PlayBigIcon } from '../../ui-kit/Icons';
import { SPECIAL_RELEASE_DATE } from '../../../constants/special.js';
import { BuyLink } from './BuyLink/index.jsx';
import {
    Age,
    Heading,
    SubHeading,
    Content,
    Wrapper,
    Red,
    PlayButton,
    PlayButtonWrapper,
    Text,
    BuyLinkWrapper,
    Date,
} from './styles.js';
import { Background } from './Background/index.jsx';

export function Hero({
    title,
    adaptiveTitle,
    image,
    video,
    main,
    onPlay,
    onLoad,
}) {
    const { pathname } = useLocation();

    useEffect(() => {
        const img = new Image();

        img.addEventListener('load', onLoad);
        img.src = image;

        return () => img.removeEventListener('load', onLoad);
    }, [image, onLoad]);

    return (
        <Wrapper key={pathname}>
            <Background image={image} video={video} />

            <Content>
                <Text>
                    <Age>18+</Age>
                    <Heading adaptive={adaptiveTitle}>
                        <SubHeading>СТЕНДАП {main && 'СПЕШЛ'}</SubHeading>
                        {main ? (
                            <>
                                ВЕСЕЛАЯ<Red>/</Red>ЖИЗНЬ
                            </>
                        ) : (
                            <Red>{title}</Red>
                        )}
                    </Heading>
                </Text>

                {main && (
                    <BuyLinkWrapper>
                        <Date>
                            дата выхода:{' '}
                            {SPECIAL_RELEASE_DATE.toLocaleDateString('ru')}
                        </Date>
                        <BuyLink />
                    </BuyLinkWrapper>
                )}
            </Content>

            {onPlay && (
                <PlayButtonWrapper>
                    <PlayButton onClick={onPlay}>
                        <PlayBigIcon />
                    </PlayButton>
                </PlayButtonWrapper>
            )}
        </Wrapper>
    );
}
