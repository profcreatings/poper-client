import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../../styles/media.js';
import { LogoIcon } from '../../../ui-kit/Icons/index.jsx';
import { Nav } from '../styles.js';

export const Wrapper = styled.header(
    ({ fade }) => css`
        height: var(--header-height);
        margin: 0 -14px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;

        position: relative;
        z-index: 1;

        font-weight: 500;

        ${fade &&
        css`
            animation: fade-in 1.2s ease;

            @keyframes fade-in {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `}

        ${MQ.maxWidth[1750]} {
            ${Nav} {
                grid-gap: 48px;
            }
        }

        ${MQ.maxWidth[900]} {
            margin: 0 -14px;
        }

        ${MQ.maxWidth[640]} {
            margin: 0;
        }
    `,
);

export const StyledLogoIcon = styled(LogoIcon)`
    width: 30px;

    ${MQ.maxWidth[1750]} {
        width: 26px;
    }

    ${MQ.maxWidth[1100]} {
        width: 24px;
    }

    ${MQ.maxWidth[640]} {
        width: 20px;
    }
`;

export const HamburgerButton = styled.button`
    padding: 5px;
    margin: -5px;

    display: none;

    ${MQ.maxWidth[1100]} {
        display: block;
    }
`;
