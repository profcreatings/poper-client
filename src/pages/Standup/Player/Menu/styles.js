import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../../styles/media.js';

export const Wrapper = styled.div(
    ({ opened, nested }) => css`
        height: auto;
        min-width: 328px;
        padding: 20px 0;
        margin-bottom: 20px;

        display: flex;
        flex-direction: column;

        position: absolute;
        bottom: 120px;

        background: var(--black);
        border: 1px solid var(--red);
        border-radius: var(--border-radius);

        cursor: default;

        > * {
            font-size: 16px;
            padding: 0 20px 0 54px;
        }

        ${!opened &&
        css`
            display: none;
        `}

        ${nested &&
        css`
            padding-top: 0;
        `}

        ${MQ.maxWidth[900]} {
            max-height: 100vh;
            padding-top: 0;
            margin-bottom: 0;

            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;

            border: none;
            border-radius: var(--border-radius) var(--border-radius) 0 0;

            transition: transform 0.3s ease;
            transform: translateY(0);
            overflow: auto;
            z-index: 3;

            ${!opened &&
            css`
                display: flex;
                transform: translateY(110%);
                transition: transform 0.3s ease;
            `}
        }
    `,
);

export const MenuOption = styled.button`
    height: 44px;
    position: relative;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
        background: var(--red);
    }

    > svg {
        width: 20px;

        position: absolute;
        left: 30px;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ${MQ.maxWidth[900]} {
        height: 56px;
        margin: 0 16px;

        && {
            padding: 0;
            padding-left: 34px;
        }

        :not(:last-of-type) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        :hover {
            background: none;
        }

        > svg {
            left: 0;
            transform: translate(0, -50%);
        }
    }
`;

export const Label = styled.span`
    font-weight: 600;
    font-size: inherit;

    :empty {
        display: none;
    }
`;

export const MenuHeader = styled.header(
    ({ nested }) => css`
        height: 64px;
        margin-bottom: 20px;

        display: flex;
        align-items: center;

        position: relative;
        border-bottom: 1px solid var(--grey);

        ${MQ.maxWidth[900]} {
            padding: 0 40px !important;
            margin-bottom: 2px;
            justify-content: center;
        }

        ${!nested &&
        css`
            ${BackButton} {
                display: none;
            }

            ${MQ.minWidth[900]} {
                display: none;
            }
        `}

        ${nested &&
        css`
            ${CloseButton} {
                display: none;
            }
        `}
    `,
);

export const BackButton = styled.button`
    padding: 10px;
    margin: -10px;

    position: absolute;
    left: 34px;
    transform: translate(-50%, 1%);

    display: flex;

    :hover {
        color: var(--red);
    }
`;

export const CloseButton = styled.button`
    padding: 10px;
    margin: -10px;

    position: absolute;
    right: 0;
    transform: translate(-50%, 1%);

    display: flex;

    :hover {
        color: var(--red);
    }

    svg {
        width: 12px;
    }
`;
