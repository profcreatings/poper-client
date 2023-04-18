import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledButton = styled.button(
    ({ hidden }) => css`
        width: 7vw;
        max-width: 84px;
        min-width: 30px;

        display: flex;
        align-items: center;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        transition: opacity 0.1s ease;
        z-index: 2;

        :hover {
            opacity: 0.6;
        }

        svg {
            width: 100%;
        }

        ${hidden &&
        css`
            display: none;
        `}
    `,
);
