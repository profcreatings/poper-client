import styled from '@emotion/styled';
import { MQ } from '../../../styles/media.js';

export const Center = styled.div`
    padding: var(--page-padding) 0;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    text-align: center;

    > *:first-of-type {
        width: 100%;
        max-width: 360px;
        height: min-content;
        padding: 30px;

        display: inline-flex;
        flex-direction: column;
        justify-content: center;

        border: 1px solid var(--red);
        border-radius: var(--border-radius);

        overflow: hidden;

        > svg {
            width: 3rem;
            margin: 0 auto 40px;
        }

        > span:not(:last-child) {
            margin-bottom: 24px;
        }

        > a {
            font-size: 18px;
            margin: 4px auto 0;

            :first-of-type {
                margin-top: 16px;
            }
        }
    }

    h2 {
        margin: 0 auto 40px;
        text-transform: lowercase;

        :not(:last-of-type) {
            display: none;
        }
    }

    button {
        margin-top: 16px;
        text-transform: lowercase;
    }

    ${MQ.maxWidth[1750]} {
        > *:first-of-type {
            max-width: 320px;
            padding: 26px;

            > svg {
                margin-bottom: 30px;
            }

            > span:not(:last-child) {
                font-size: 16px;
                margin-bottom: 20px;
            }

            > a {
                font-size: 16px;
                margin-top: 2px;
            }
        }

        h2 {
            margin-bottom: 30px;
        }
    }

    ${MQ.maxWidth[1750]} {
        > *:first-of-type {
            margin-bottom: 40px;
        }
    }

    ${MQ.maxWidth[900]} {
        > *:first-of-type {
            background: var(--black);
        }
    }

    ${MQ.maxWidth[640]} {
        > *:first-of-type {
            padding: 30px 16px;

            > svg {
                width: 40px;
            }

            > a {
                margin-top: 8px;
            }
        }
    }
`;
