import styled from '@emotion/styled';
import { MQ } from '../../../../../styles/media.js';

export const SocialNav = styled.nav`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 48px;

    ${MQ.maxWidth[1750]} {
        grid-gap: 36px;
    }

    ${MQ.maxWidth[1300]} {
        grid-gap: 30px;
    }

    ${MQ.maxWidth[1100]} {
        grid-gap: 24px;
        margin-bottom: 30px;
    }

    ${MQ.maxWidth[640]} {
        display: none;
    }
`;

export const SocialLink = styled.a`
    height: 36px;
    display: flex; // align svg
    align-items: center;
    transition: color 0.15s ease;
    position: relative;
    color: var(--red);

    :hover {
        color: var(--white);
    }

    svg {
        height: 100%;
    }

    ${MQ.maxWidth[1750]} {
        height: 30px;
    }

    ${MQ.maxWidth[1300]} {
        height: 24px;
    }
`;
