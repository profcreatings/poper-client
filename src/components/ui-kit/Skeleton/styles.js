import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    position: relative;
`;

export const Inner = styled.div(
    ({ loading }) =>
        loading &&
        css`
            visibility: hidden;
        `,
);

export const Loader = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 80%
        ),
        var(--grey);
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: -200% 0;

    border-radius: 8px;

    animation: shine 2s infinite;

    @keyframes shine {
        to {
            background-position: 300% 0, 0 0;
        }
    }
`;
