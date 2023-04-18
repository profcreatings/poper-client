import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../styles/media.js';

export const Line = styled.div(
    ({ overall }) => css`
        min-height: 32px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        ${overall &&
        css`
            margin-top: 12px;
        `}

        ${MQ.maxWidth[640]} {
            min-height: 41px;
            margin-top: 0;
        }
    `,
);

export const Price = styled.p(
    ({ big, discount }) => css`
        font-weight: 600;

        ${big &&
        css`
            line-height: 46px;
            font-size: 30px;

            ${MQ.maxWidth[1100]} {
                font-size: 24px;
            }

            ${MQ.maxWidth[640]} {
                font-size: 20px;
            }
        `}

        ${discount &&
        css`
            color: var(--red);
        `}
    `,
);
