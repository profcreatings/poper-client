import styled from '@emotion/styled';
import { CSSPolyfills } from '../../styles/polyfills.js';

export const PlayerWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    ${CSSPolyfills.aspectRatio(16 / 9)};

    display: flex;
`;
