import styled from '@emotion/styled';
import { ControlButton } from '../../ControlButton/index.jsx';
import { MQ } from '../../../../../styles/media.js';

// TODO: appear animation
export const StyledControlButton = styled(ControlButton)`
    && {
        margin-right: 0;
        padding-right: 24px;

        + .shaka-volume-bar-container {
            margin-right: 24px;
            display: none
        }

        :hover + .shaka-volume-bar-container,
        + .shaka-volume-bar-container:hover {
            display: block;
        }

        ${MQ.maxWidth[900]} {
            padding-right: 10px;
        }
    }
`;
