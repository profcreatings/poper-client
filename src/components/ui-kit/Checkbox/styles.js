import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.label(
    ({ error }) => css`
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 12px;
        line-height: 1.285;
        color: var(--grey);

        cursor: pointer;

        input {
            width: 0;
            height: 0;
            opacity: 0;
            pointer-events: none;
        }

        ${error &&
        css`
            color: var(--red);
        `}
    `,
);

export const StyledCheckbox = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;

    background: var(--white);
    border-radius: 4px;
    color: var(--white);

    svg {
        visibility: hidden;
    }

    input:checked + & {
        background: #3d64ed;

        svg {
            visibility: visible;
        }
    }

    input:focus-visible + & {
        outline: 2px solid white;
    }
`;
