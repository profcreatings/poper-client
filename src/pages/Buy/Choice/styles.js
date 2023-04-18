import styled from '@emotion/styled';
import { Button } from '../../../components/ui-kit/Button/index.jsx';

export const TonButton = styled(Button)`
    && {
        background: rgba(0, 136, 204);

        font-size: 14px;
        font-weight: 700;
        text-transform: none;

        @media (hover: hover) {
            :hover {
                background: #0097e2;
            }
        }

        span {
            margin-top: 2px;
        }
    }
`;
