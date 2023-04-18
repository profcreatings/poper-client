import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../../styles/media.js';
import { Social } from '../Footer/Social/index.jsx';

export const Wrapper = styled.aside(
    ({ opened }) => css`
        width: 100vw;
        height: var(--100vh, 100vh);
        padding: 0 var(--container-padding);

        display: flex;
        flex-direction: column;

        background: var(--black);
        overflow: auto;

        position: fixed;
        top: 0;
        left: 100%;
        z-index: 3;

        transition: left 0.35s ease;

        ${opened &&
        css`
            left: 0;
        `}

        ${Social} {
            display: flex;
        }

        ${MQ.minWidth[1100]} {
            display: none;
        }
    `,
);

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`;

export const Nav = styled.nav`
    padding: 40px 0 100px;

    display: grid;
    justify-items: center;
    align-content: center;
    grid-gap: 25px;

    flex-grow: 1;

    font-weight: 500;
`;
