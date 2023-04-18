import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../../styles/media.js';

export const Wrapper = styled.div(
    ({ visible, image }) => css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        overflow: hidden;

        transform: scale(1.2);
        transition: all 0.9s ease;

        ${visible &&
        css`
            transform: scale(1);
            opacity: 1;
        `}

        ${image &&
        css`
            background: url(${image}) no-repeat center;
            background-size: cover;
        `}
    `,
);

export const StyledVideo = styled.video(
    ({ visible }) => css`
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;

        ${!visible &&
        css`
            opacity: 0;
        `}
    `,
);

export const Gradient = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: linear-gradient(180deg, transparent 50%, var(--black) 100%);

    pointer-events: none;

    ${MQ.maxWidth[900]} {
        background: linear-gradient(180deg, transparent 50%, var(--body) 100%);
    }
`;
