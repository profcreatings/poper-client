import styled from '@emotion/styled';
import { ControlButton } from '../../ControlButton/index.jsx';
import { MQ } from '../../../../../styles/media.js';

export const StyledControlButton = styled(ControlButton)`
    ${MQ.maxWidth[900]} {
        position: absolute;
        top: 6px;
        right: 14px;
    }
`;
