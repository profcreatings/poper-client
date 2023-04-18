import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MODAL_TRANSITION_DURATION = 200;

export const Overlay = styled.div(
    ({ opened }) => css`
        padding: var(--page-padding) var(--container-padding);

        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: rgba(0, 0, 0, 0.94);
        transition: opacity ${MODAL_TRANSITION_DURATION}ms ease;
        overflow-y: scroll;

        z-index: 10;

        ${!opened &&
        css`
            opacity: 0;
            pointer-events: none;
            overflow-y: initial;
        `}
    `,
);
