import styled from '@emotion/styled';
import { MQ } from '../../../../../styles/media.js';

export const Wrapper = styled.footer`
    width: 100%;
    padding: 32px 0;
    margin: auto auto 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    ${MQ.maxWidth[1750]} {
        padding: 28px 0;
        font-size: 18px;
    }

    ${MQ.maxWidth[1300]} {
        height: 90px;
    }
`;
