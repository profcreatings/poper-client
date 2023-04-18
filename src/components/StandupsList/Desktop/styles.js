import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { MQ } from '../../../styles/media.js';
import { OLD_STANDUPS } from '../../../constants/standups.jsx';
import { CSSPolyfills } from '../../../styles/polyfills.js';

export const Wrapper = styled.div`
    --item-margin: 69px;

    display: grid;
    grid-auto-flow: column;
    margin-left: var(--item-margin);

    ${MQ.maxWidth[1750]} {
        --item-margin: 48px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;

    border-radius: inherit;

    transition: inherit;
`;

export const OverlapImage = styled(Image)`
    position: absolute;
    opacity: 0;
`;

export const StyledLink = styled(Link)`
    margin-left: calc(-1 * var(--item-margin));

    ${OLD_STANDUPS.map(
        (_, i) => css`
            &:nth-of-type(${i + 1}) {
                order: ${-i};

                ${OverlapImage} {
                    z-index: ${OLD_STANDUPS.length - i};
                }
            }
        `,
    )}
`;

export const Item = styled.div`
    width: 100%;
    ${CSSPolyfills.aspectRatio(3 / 4)};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: var(--border-radius);

    position: relative;
    bottom: 0;
    overflow: hidden;
    transition: all 0.2s ease;

    ::after {
        content: '';

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        background: rgba(17, 17, 17, 0.85);
        transition: inherit;
    }

    ${StyledLink}:hover & {
        bottom: 46px;

        ${OverlapImage} {
            opacity: 1;
        }
    }

    @media (hover: none) {
        ::before {
            display: none;
        }
    }
`;
