import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { MQ } from '../../../../styles/media.js';
import { Skeleton } from '../../../ui-kit/Skeleton/index.jsx';

export const StyledLink = styled(Link)(
    ({ subscribed }) => css`
        min-width: 295px;
        height: min-content;
        padding: 12px;

        background: var(--red);
        border-radius: var(--border-radius);

        color: var(--black);

        ${subscribed &&
        css`
            cursor: default;
            pointer-events: none;
        `}

        ${MQ.maxWidth[640]} {
            min-width: 186px;
            padding: 6px;
            border-radius: 12px;
        }
    `,
);

export const Inner = styled.div`
    width: 100%;
    display: flex;

    border: 2px dashed var(--black);
    border-radius: 12px;

    ${MQ.maxWidth[640]} {
        border-radius: 8px;
        border-color: rgba(17, 17, 17, 0.4);
    }
`;

export const Text = styled.div`
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

    border-right: inherit;

    font-weight: 500;
    line-height: 1.05;
    text-align: left;

    transition: all 0.15s ease-in-out;

    ::first-line {
        font-size: 36px;
    }

    ${StyledLink}:hover & {
        color: var(--white);
    }

    ${MQ.maxWidth[640]} {
        padding: 8px 13px;
    }
`;

export const StyledSkeleton = styled(Skeleton)`
    margin: 6px 0;

    ${MQ.maxWidth[640]} {
        margin: 3px 0;
    }
`;

export const BigWord = styled.p`
    font-size: 36px;

    ${MQ.maxWidth[640]} {
        font-size: 16px;
        font-weight: 700;
    }
`;

export const MidWord = styled.p`
    font-size: 25px;

    ${MQ.maxWidth[640]} {
        font-size: 16px;
        font-weight: 700;
    }
`;

export const Price = styled.div`
    margin-top: 16px;

    font-size: 20px;
    font-weight: 500;

    ${MQ.maxWidth[640]} {
        margin-top: 8px;
    }
`;

export const Barcode = styled.div`
    padding: 12px 5px 12px 22px;

    display: flex;
    align-items: center;

    svg {
        height: 107px;
    }

    ${MQ.maxWidth[640]} {
        padding: 8px 8px 8px 16px;
        color: rgba(17, 17, 17, 0.4);

        svg {
            height: 70px;
        }
    }
`;

export const CodeNumber = styled.span`
    margin-left: 7px;

    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0.4em;
    writing-mode: vertical-rl;

    transform: rotate(180deg);

    ${MQ.maxWidth[640]} {
        margin-left: 2px;
    }
`;
