import styled from '@emotion/styled';
import { MQ } from '../../../styles/media.js';
import { Button } from '../../ui-kit/Button/index.jsx';

export const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 40px;

    ${MQ.maxWidth[900]} {
        font-size: 16px;
        grid-gap: 32px;
    }

    ${MQ.maxWidth[640]} {
        grid-auto-flow: row;
        justify-items: center;
        grid-gap: 16px;
        font-size: 14px;

        ${Button} {
            height: 36px;
        }
    }
`;
