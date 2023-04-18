import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div(
    ({ lines = 1 }) => css`
        height: calc(18px * ${lines});
        margin-top: 16px;

        font-size: 14px;
        color: var(--red);
        text-align: center;

        transition: all 0.3s ease;

        :empty {
            height: 0;
            margin-top: 0;
        }
    `,
);
