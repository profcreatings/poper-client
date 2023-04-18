import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.section`
    height: calc(100vh - var(--body-padding));
    margin: calc(-1 * var(--header-height)) // move under header
        calc(-1 * var(--container-padding)) // expand background
        0;

    display: flex;
    flex-direction: column;

    position: relative;
    border-radius: var(--border-radius) var(--border-radius) 0 0; // safari fix
    overflow: hidden;

    @keyframes fade-in-mobile {
        from {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    ${MQ.maxWidth[900]} {
        border-radius: 0;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: calc(var(--100vh, 100vh) - var(--body-padding));
    max-height: 100vh;
    padding: clamp(20px, 6vh, 43px) var(--container-padding);

    @supports not (padding: clamp(1vh, 1vh, 1vh)) {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    display: grid;
    grid-auto-flow: column;
    align-items: flex-end;
    justify-content: space-between;
    grid-gap: 60px;

    position: absolute;
    top: 0;
    bottom: auto;
    right: 0;
    left: 0;

    animation: appear 0.85s ease-out;
    transition: height 0.3s ease;

    @keyframes appear {
        from {
            top: 400px;
            opacity: 0;
        }
        45% {
            opacity: 0;
        }
        to {
            top: 0;
            opacity: 1;
        }
    }

    ${MQ.maxWidth[1300]} {
        grid-auto-flow: row;
        align-content: end;
        justify-content: center;
        justify-items: center;
        grid-gap: 0;

        text-align: center;
    }

    ${MQ.maxWidth[900]} {
        animation-name: fade-in-mobile;
        animation-timing-function: ease-in;
    }
`;

export const Text = styled.span`
    display: flex;
    flex-direction: column;

    ${MQ.maxWidth[1300]} {
        flex-direction: column-reverse;
    }
`;

export const Age = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: var(--grey);

    ${MQ.maxWidth[1300]} {
        margin: 8px 0 12px;

        font-size: 18px;
        color: var(--white);
        font-weight: 400;
    }

    ${MQ.maxWidth[640]} {
        font-size: 16px;
        margin-bottom: 8px;
    }
`;

export const Heading = styled.h1(
    ({ adaptive }) => css`
        margin: 16px 0 0;

        font-size: 96px;
        line-height: 1.05;
        color: #d6d4c9;

        ${MQ.maxWidth[1300]} {
            margin: 0;
            font-size: 64px;
        }

        ${MQ.maxWidth[640]} {
            font-size: 48px;
            line-height: 0.9;
        }

        ${adaptive &&
        css`
            ${MQ.maxWidth[1300]} {
                font-size: 48px; // fallback
                font-size: min(7vw, 64px);
            }

            ${MQ.maxWidth[640]} {
                font-size: min(7vw, 48px);
            }
        `}
    `,
);

export const SubHeading = styled.p`
    font-size: 0.665em;

    ${MQ.maxWidth[1300]} {
        margin-bottom: 8px;
    }

    ${MQ.maxWidth[640]} {
        font-size: 20px;
    }
`;

export const Red = styled.span`
    display: inline-block; // fix for wrap on iphone
    color: var(--red);
`;

export const PlayButtonWrapper = styled.div`
    height: var(--100vh, 100vh);
    transition: height 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`;

export const PlayButton = styled.button`
    width: 12vh;

    position: relative;

    animation: fade-in 1.05s ease;
    transition: opacity 0.1s ease;

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        30% {
            margin-top: -10px;
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    :hover {
        opacity: 0.6;
    }

    svg {
        width: 100%;
    }

    ${MQ.maxWidth[1300]} {
        width: 10vh;
    }

    ${MQ.maxWidth[900]} {
        animation-name: fade-in-mobile;
        animation-timing-function: ease-in;
    }
`;

export const BuyLinkWrapper = styled.div`
    text-align: center;

    ${MQ.minWidth[1300]} {
        margin-bottom: 18px;
    }
`;

export const Date = styled.span`
    display: block;
    margin-bottom: 12px;
    font-weight: 500;

    ${MQ.maxWidth[1300]} {
        font-weight: 400;
    }

    ${MQ.maxWidth[640]} {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;
