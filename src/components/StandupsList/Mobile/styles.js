import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import 'keen-slider/keen-slider.min.css';
import { CSSPolyfills } from '../../../styles/polyfills.js';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.div``;

export const StyledLink = styled(Link)`
    display: block;
`;

export const ImageWrapper = styled.div`
    margin-bottom: 16px;
    ${CSSPolyfills.aspectRatio(3 / 4)};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: var(--border-radius);
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;

    border-radius: inherit;
`;

export const Title = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 4px;

    ${MQ.maxWidth[1100]} {
        font-size: 16px;
    }
`;

export const Year = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: var(--grey);
`;
