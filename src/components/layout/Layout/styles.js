import styled from '@emotion/styled';
import { MQ } from '../../../styles/media.js';

export const Nav = styled.nav`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 2.6rem;

    color: var(--grey);

    ${MQ.maxWidth[1100]} {
        display: none;
    }
`;

export const Noise = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: url(/images/noise.jpg) repeat;
    opacity: 0.01;

    pointer-events: none;
`;
