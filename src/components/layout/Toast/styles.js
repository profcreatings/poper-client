import styled from '@emotion/styled';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.div`
    .toaster {
        top: 24px !important;
        bottom: 24px !important;
        right: 24px !important;
        left: 24px !important;
    }

    .toaster > div > div {
        max-width: none;
        padding: 8px 16px;

        background: var(--black);
        box-shadow: none;
        border: 2px solid rgba(255, 255, 255, 0.04);
        border-radius: 16px;

        font-size: 18px;
        color: var(--white);
        line-height: initial;
        text-align: center;

        animation-duration: 0.6s !important;
    }

    ${MQ.maxWidth[640]} {
        .toaster {
            top: var(--container-padding) !important;
            bottom: var(--container-padding) !important;
            right: var(--container-padding) !important;
            left: var(--container-padding) !important;
        }

        .toaster > div > div {
            padding: 16px;
        }
    }
`;
