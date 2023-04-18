import styled from '@emotion/styled';
import { MQ } from '../../../styles/media.js';

export const FormHelper = styled.div`
    margin-top: -16px;
    margin-bottom: 20px;

    font-size: 14px;
    line-height: 1.285;
    color: var(--grey);

    ${MQ.maxWidth[1750]} {
        margin-top: -8px;
        margin-bottom: 16px;
    }
`;
