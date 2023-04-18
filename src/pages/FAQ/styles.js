import styled from '@emotion/styled';
import { MQ } from '../../styles/media.js';

export const Wrapper = styled.section`
    width: 100%;
    max-width: 727px;
    margin: 0 auto;
    padding: var(--page-padding) 0 100px;

    ${MQ.maxWidth[640]} {
        h1 {
            margin-bottom: 16px;
        }
    }
`;
