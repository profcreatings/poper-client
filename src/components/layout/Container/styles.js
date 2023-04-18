import styled from '@emotion/styled';
import { MQ } from '../../../styles/media.js';

export const Container = styled.div`
    width: 100%;
    max-width: 1440px; // 1356 + padding
    padding: 0 var(--container-padding);
    margin: 0 auto;

    position: relative;
    background: var(--black);
    border-radius: var(--border-radius);
    overflow: hidden;

    // stick footer to bottom:
    min-height: calc(var(--100vh, 100vh) - (var(--body-padding) * 2));
    display: flex;
    flex-direction: column;

    ${MQ.maxWidth[900]} {
        min-height: var(--100vh, 100vh);
        border-radius: 0;
        background: none;
    }
`;
