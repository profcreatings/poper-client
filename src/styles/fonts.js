import { css } from '@emotion/react';

import AvenirNextRegular from '../assets/fonts/AvenirNext-Regular.woff2';
import AvenirNextMedium from '../assets/fonts/AvenirNext-Medium.woff2';
import AvenirNextDemiBold from '../assets/fonts/AvenirNext-DemiBold.woff2';
import AvenirNextBold from '../assets/fonts/AvenirNext-Bold.woff2';

export const fontsStyles = css`
    @font-face {
        font-family: 'AvenirNext';
        src: url(${AvenirNextRegular}) format('woff2');
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'AvenirNext';
        src: url(${AvenirNextMedium}) format('woff2');
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: 'AvenirNext';
        src: url(${AvenirNextDemiBold}) format('woff2');
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: 'AvenirNext';
        src: url(${AvenirNextBold}) format('woff2');
        font-weight: 700;
        font-display: swap;
    }
`;
