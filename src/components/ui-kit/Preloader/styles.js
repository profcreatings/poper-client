import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const pulse = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

export const Wrapper = styled.div(
    ({ dotWidth = 8, color = 'white' }) => css`
        flex-grow: 1;

        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        align-items: center;
        grid-gap: ${dotWidth + 1}px;

        ${Dot} {
            width: ${dotWidth}px;
            height: ${dotWidth}px;
            background: var(--${color});
        }
    `,
);

export const Dot = styled.div`
    border-radius: 50%;

    animation: ${pulse} 510ms infinite alternate ease-in-out;
    transform: scale(0);

    :nth-of-type(2) {
        animation-delay: 170ms;
    }
    :nth-of-type(3) {
        animation-delay: 340ms;
    }
`;
