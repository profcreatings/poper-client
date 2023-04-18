import { css } from '@emotion/react';
import { MQ } from './media.js';

export const global900Styles = css`
    ${MQ.maxWidth[900]} {
        :root {
            --body-padding: 0px;
            --container-padding: 36px;
        }
    }
`;
