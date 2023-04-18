import styled from '@emotion/styled';
import { MenuOption } from '../../Menu/index.jsx';
import { MQ } from '../../../../../styles/media.js';
import { SubtitlesMenu } from '../Subtitles/SubtitlesMenu/index.jsx';

export const SubtitlesOption = styled(MenuOption)`
    ${MQ.minWidth[900]} {
        display: none;
    }
`;

export const StyledSubtitlesMenu = styled(SubtitlesMenu)`
    ${MQ.minWidth[900]} {
        display: none;
    }
`;
