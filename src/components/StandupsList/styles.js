import styled from '@emotion/styled';
import { MQ } from '../../styles/media.js';
import { MobileStandups } from './Mobile/index.jsx';
import { DesktopStandups } from './Desktop/index.jsx';

export const Wrapper = styled.section`
    margin-bottom: 100px;

    ${MobileStandups} {
        display: none;
    }

    ${MQ.maxWidth[1100]} {
        ${DesktopStandups} {
            display: none;
        }
        ${MobileStandups} {
            display: block;
        }
    }

    ${MQ.maxWidth[900]} {
        padding-top: 60px;
    }

    ${MQ.maxWidth[640]} {
        margin-bottom: 70px;
    }
`;

export const Dash = styled.div`
    height: 2px;
    margin-top: 100px;
    margin-bottom: 60px;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='rgba(128, 18, 25, 0.5)' stroke-width='4' stroke-dasharray='7%2c 19' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

    ${MQ.maxWidth[900]} {
        display: none;
    }
`;

export const Heading = styled.h2`
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    color: var(--red);
    line-height: 1.28;

    ${MQ.maxWidth[1300]} {
        font-size: 42px;
    }

    ${MQ.maxWidth[900]} {
        font-size: 36px;
        margin-bottom: 30px;
    }

    ${MQ.maxWidth[640]} {
        font-size: 30px;
        line-height: 1.05;
    }
`;
