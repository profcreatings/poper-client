import { css } from '@emotion/react';
import { MQ } from './media.js';

export const global1750Styles = css`
    ${MQ.maxWidth[1750]} {
        :root {
            font-size: 18px;

            --body-padding: 48px;
        }

        h1 {
            font-size: 60px;
            margin-bottom: 78px;
        }
    }
`;
