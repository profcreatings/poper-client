import styled from '@emotion/styled';
import { Checkbox } from '../../../components/ui-kit/Checkbox/index.jsx';
import { MQ } from '../../../styles/media.js';

export const StyledCheckbox = styled(Checkbox)`
    margin-top: 16px;

    ${MQ.maxWidth[640]} {
        margin-bottom: 4px;
    }
`;

export const Info = styled.p`
    margin: 14px 0 2px;

    font-size: 12px;
    color: var(--grey);
    line-height: 1.45;

    a {
        height: auto;
    }
`;
