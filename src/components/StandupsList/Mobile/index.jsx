import styled from '@emotion/styled';
import { useKeenSlider } from 'keen-slider/react';

import { ROUTES } from '../../../constants/router.js';
import { OLD_STANDUPS } from '../../../constants/standups.jsx';
import {
    Image,
    ImageWrapper,
    StyledLink,
    Title,
    Wrapper,
    Year,
} from './styles.js';

export const MobileStandups = styled(_MobileStandups)``;

function _MobileStandups({ className }) {
    const [sliderRef] = useKeenSlider({
        slides: {
            spacing: 16,
            perView: 3.3,
        },
        breakpoints: {
            '(max-width: 800px)': {
                slides: {
                    spacing: 16,
                    perView: 2.3,
                },
            },
            '(max-width: 500px)': {
                slides: {
                    spacing: 16,
                    perView: 1.3,
                },
            },
        },
    });

    return (
        <Wrapper className={className}>
            <div ref={sliderRef} className="keen-slider">
                {OLD_STANDUPS.map(({ id, posterV, name, date }) => (
                    <StyledLink
                        key={id}
                        to={`${ROUTES.standup}/${id}`}
                        className="keen-slider__slide"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <ImageWrapper>
                            <Image
                                src={posterV}
                                alt={`Стендап "${name}"`}
                                loading="lazy"
                            />
                        </ImageWrapper>
                        <Title>{name}</Title>
                        <Year>{date.slice(-4)}</Year>
                    </StyledLink>
                ))}
            </div>
        </Wrapper>
    );
}
