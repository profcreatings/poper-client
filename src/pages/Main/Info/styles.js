import styled from '@emotion/styled';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.section`
    display: grid;
    grid-auto-flow: column;
    align-items: start;
    justify-content: space-between;
    grid-gap: 60px;

    ${MQ.maxWidth[1100]} {
        grid-auto-flow: row;
    }

    ${MQ.maxWidth[900]} {
        grid-gap: 30px;
    }

    ${MQ.maxWidth[640]} {
        grid-gap: 16px;
    }
`;

export const Message = styled.div`
    max-width: 824px;

    display: grid;
    grid-auto-flow: column;
    grid-gap: 30px;
    flex-grow: 1;

    color: var(--red);
    font-weight: 500;
    line-height: 1.4;

    ${MQ.maxWidth[1100]} {
        width: 100%;
        grid-auto-flow: row;
    }

    ${MQ.maxWidth[900]} {
        padding: 30px;
        margin-top: 15px;
        background: var(--black);
        border-radius: var(--border-radius);
    }

    ${MQ.maxWidth[640]} {
        padding: 16px;
        padding-bottom: 30px;
        background: var(--black);
        border-radius: var(--border-radius);
    }
`;

export const Big = styled.p`
    margin-bottom: 14px;
    font-size: 1.6rem;
    white-space: nowrap;

    ${MQ.maxWidth[1300]} {
        font-size: 1em;
    }
`;

export const Photo = styled.img`
    width: 60px;
    height: 60px;

    flex: none;

    border-radius: 50%;

    ${MQ.maxWidth[1100]} {
        margin: auto;
    }
`;

export const Characteristics = styled.div`
    padding: 43px 29px;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    border: 1px solid var(--grey);
    border-radius: var(--border-radius);
    background: var(--black);

    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;

    ${MQ.maxWidth[1100]} {
        width: 100%;
        padding: 30px;
        grid-template-columns: repeat(auto-fill, 156px);
    }

    ${MQ.maxWidth[640]} {
        padding: 30px 16px;
    }
`;

export const Char = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    grid-gap: 30px;

    ${MQ.maxWidth[1100]} {
        grid-auto-flow: row;
        grid-gap: 8px;
    }
`;

export const Title = styled.p`
    width: 156px;
    color: var(--grey);

    ${MQ.maxWidth[1100]} {
        width: auto;
    }
`;
