import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MQ } from '../../../styles/media.js';
import { Button } from '../../../components/ui-kit/Button/index.jsx';

export const Wrapper = styled.div`
    ${MQ.minWidth[640]} {
        && {
            max-width: 360px;
        }
    }
`;

export const Text = styled.div`
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.32;
    color: var(--grey);
`;

export const White = styled.p`
    color: var(--white);
`;

export const Scanner = styled.div(
    ({ opened }) => css`
        padding: var(--container-padding);

        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        background: var(--black);
        z-index: 4;

        ${!opened &&
        css`
            display: none;
        `}

        > div {
            width: 100%;
            flex-grow: 1;
            flex-basis: 100%;
        }
    `,
);

export const ScannerBackButton = styled(Button)`
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -100%);
`;
