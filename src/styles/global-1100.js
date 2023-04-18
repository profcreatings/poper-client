import { css } from '@emotion/react';
import { MQ } from './media.js';

export const global1100Styles = css`
    ${MQ.maxWidth[1100]} {
        :root {
            --page-padding: 60px;
        }

        h1 {
            font-size: 48px;
            margin-bottom: 56px;
        }
    }
`;
