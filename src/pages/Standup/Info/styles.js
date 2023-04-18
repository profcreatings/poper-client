import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MQ } from '../../../styles/media.js';
import { CSSPolyfills } from '../../../styles/polyfills.js';

export const Wrapper = styled.section`
    padding: 107px;

    display: grid;
    grid-auto-flow: column;
    align-items: flex-start;
    grid-gap: 106px;

    border: 1px solid var(--grey);
    border-radius: var(--border-radius);

    ${MQ.maxWidth[1600]} {
        padding: 55px;
        font-size: 18px;
        grid-gap: 55px;
    }

    ${MQ.maxWidth[1100]} {
        padding: 36px;
    }

    ${MQ.maxWidth[900]} {
        padding: 30px 24px;
    }

    ${MQ.maxWidth[640]} {
        padding: 30px 16px;
        font-size: 1rem;
    }
`;

export const Poster = styled.div(
    ({ url }) => css`
        width: 215px;
        ${CSSPolyfills.aspectRatio(3 / 4)};

        flex: none;

        background: url(${url}) no-repeat center;
        background-size: cover;

        border-radius: var(--border-radius);

        box-shadow: 0 4px 32px 0 #0a0a0a;

        ${MQ.maxWidth[1600]} {
            width: 200px;
        }

        ${MQ.maxWidth[1300]} {
            display: none;
        }
    `,
);

export const Text = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-areas: 'title1 title2 title3 title4';
    column-gap: 50px;

    line-height: 1.05;
    white-space: nowrap;

    ${MQ.maxWidth[1100]} {
        grid-template-columns: min-content 1fr;
        grid-template-areas: none;
        grid-gap: 20px 36px;
    }

    ${MQ.maxWidth[900]} {
        grid-template-columns: 1fr;
        grid-gap: 0;
    }
`;

export const Title = styled.h3(
    ({ description }) => css`
        margin-bottom: 10px;

        font-size: inherit;
        font-weight: 500;
        color: var(--grey);

        ${MQ.minWidth[1100]} {
            ${Array.from({ length: 4 }).map(
                (_, i) => css`
                    :nth-of-type(${i + 1}) {
                        grid-area: ${`title${i + 1}`};
                    }
                `,
            )}
        }

        ${MQ.maxWidth[900]} {
            // last because description order is changed
            :not(:last-of-type) {
                margin-top: 30px;
            }
        }

        ${MQ.maxWidth[640]} {
            margin-bottom: 12px;
        }

        ${description &&
        css`
            ${MQ.minWidth[1100]} {
                margin-top: 40px;
            }

            ${MQ.maxWidth[900]} {
                order: -2;
            }
        `}
    `,
);

export const Description = styled.p`
    grid-column: span 4;

    line-height: 1.4;
    white-space: initial;

    // emoji
    img {
        height: 1.2rem;
        margin-bottom: -0.27rem;
    }

    ${MQ.maxWidth[1100]} {
        grid-column: initial;
    }

    ${MQ.maxWidth[900]} {
        order: -1;
    }

    ${MQ.maxWidth[640]} {
        line-height: 1.32;
    }
`;
