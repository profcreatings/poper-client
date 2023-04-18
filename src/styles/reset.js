import { css } from '@emotion/react';

export const resetStyles = css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul,
    ol {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button,
    input,
    select,
    a {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;

        border: none;
        background: none;

        :focus-visible {
            outline: 2px solid white;
        }
    }

    input {
        :focus {
            outline: none;
        }
    }

    video {
        :focus-visible {
            outline: none;
        }
    }

    /* Hide input[type="number"] arrows: */

    // Chrome, Safari, Edge, Opera
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Firefox
    input[type='number'] {
        -moz-appearance: textfield;
    }
`;
