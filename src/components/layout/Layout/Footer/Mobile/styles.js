import styled from '@emotion/styled';
import { TextLink } from '../../../../ui-kit/TextLink/index.jsx';
import { MQ } from '../../../../../styles/media.js';

export const Wrapper = styled.footer`
    padding-bottom: 32px;
    margin-top: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${MQ.maxWidth[640]} {
        padding-bottom: 16px;
    }
`;

export const Bottom = styled.div`
    font-size: 16px;
    line-height: 1.7;
    text-align: center;
    color: var(--grey);
`;

export const StyledTextLink = styled(TextLink)`
    display: block;
    margin-bottom: 6px;

    :last-of-type {
        margin-bottom: 10px;
    }
`;
