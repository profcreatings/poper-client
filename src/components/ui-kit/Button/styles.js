import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../styles/media.js';

export const StyledButton = styled.button(
    ({ view = 'black', loading }) => css`
        height: 36px;
        padding: 0 20px 1px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        background: var(--${view});
        border-radius: 8px;

        color: var(--white);
        font-weight: 600;

        transition: background 0.1s ease;

        @media (hover: hover) {
            :hover {
                background: #282828;
            }
        }

        :disabled,
        :disabled:hover {
            background: #1e1e1e;
        }

        svg {
            margin-right: 7px;
        }

        ${loading &&
        css`
            pointer-events: none;
        `}

        ${view === 'red' &&
        css`
            font-weight: 400;

            @media (hover: hover) {
                :hover {
                    background: #961a21;
                }
            }
        `}

        ${view === 'grey' &&
        css`
            font-weight: 400;
            background: #1e1e1e;

            @media (hover: hover) {
                :hover {
                    background: #404040;
                }
            }
        `}

        ${MQ.maxWidth[640]} {
            height: 44px;
        }
    `,
);
