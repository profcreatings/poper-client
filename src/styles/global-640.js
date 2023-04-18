import { css } from '@emotion/react';
import { MQ } from './media.js';

export const global640Styles = css`
    ${MQ.maxWidth[640]} {
        :root {
            font-size: 16px;

            --container-padding: 16px;
            --page-padding: 30px;
            --header-height: 56px;
        }

        h1 {
            margin-bottom: 0;

            font-size: 30px;
            line-height: 1;
        }

        h2 {
            font-size: 20px;
        }
    }
`;
