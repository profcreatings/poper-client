import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../../styles/media.js';

export const ControlButton = styled.button(
    ({ desktop, mobile, mobileWidth }) => css`
        padding: 0 5px;
        transition: color 0.1s ease;

        :not(:first-of-type) {
            margin-left: 24px;
        }

        // TODO-: move to MQ
        @media (hover: hover) and (pointer: fine) {
            :hover {
                color: var(--red);
            }
        }

        ${MQ.maxWidth[900]} {
            :not(:first-of-type) {
                margin-left: 16px;
            }
        }

        ${!desktop &&
        css`
            ${MQ.minWidth[900]} {
                display: none;
            }
        `}

        ${!mobile &&
        css`
            ${MQ.maxWidth[900]} {
                display: none;
            }
        `}
        
        ${mobile &&
        css`
            ${MQ.maxWidth[900]} {
                width: ${mobileWidth}px;
                box-sizing: content-box;

                svg {
                    width: 100%;
                }
            }
        `}
    `,
);
