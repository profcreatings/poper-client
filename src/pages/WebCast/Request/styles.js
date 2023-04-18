import styled from '@emotion/styled';
import { KeyIcon } from '../../../components/ui-kit/Icons/index.jsx';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.section`
    height: 100%;
    margin-top: -40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    ${MQ.maxWidth[1100]} {
        padding: var(--page-padding) 0;
    }
`;

export const Code = styled.span`
    margin-bottom: 40px;

    display: flex;
    align-items: center;

    position: relative;

    font-size: 48px;
    font-weight: 600;

    ${MQ.maxWidth[640]} {
        margin-bottom: 30px;
        font-size: 48px;
    }
`;

export const CodeLeft = styled.span`
    margin-right: 0.25em;
`;

export const StyledKeyIcon = styled(KeyIcon)`
    width: 32px;

    position: absolute;
    right: calc(100% + 16px);

    color: var(--red);

    ${MQ.maxWidth[640]} {
        width: 28px;
        right: calc(100% + 12px);
    }
`;

export const QR = styled.div`
    max-width: 360px;
    display: flex;

    svg {
        width: 100%;
    }
`;
