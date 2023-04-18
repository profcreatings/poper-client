import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { PlusIcon } from '../Icons/index.jsx';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.div`
    border-bottom: 1px solid var(--red);

    .ReactCollapse--collapse {
        transition: height 500ms;
    }

    .ReactCollapse--content {
        padding: 10px 0 40px;
        line-height: 1.32;
    }

    ${MQ.maxWidth[900]} {
        .ReactCollapse--content {
            padding: 0 0 24px;
            font-weight: 400;
        }
    }
`;

export const Trigger = styled.button`
    width: 100%;
    padding: 20px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 600;
    text-align: left;

    ${MQ.maxWidth[900]} {
        padding: 19px 0;
    }
`;

export const StyledPlusIcon = styled(PlusIcon)(
    ({ opened }) =>
        css`
            width: 0.7rem;
            margin-left: 30px;

            flex: none;

            transition: all 0.5s ease;

            ${opened &&
            css`
                transform: rotate(135deg);
                color: var(--red);
            `}
        `,
);
