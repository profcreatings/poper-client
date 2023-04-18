import { css } from '@emotion/react';

export const CSSPolyfills = {
    aspectRatio: (ratio) => css`
        aspect-ratio: ${ratio};

        @supports not (aspect-ratio: 16 / 9) {
            position: relative;

            > * {
                width: 100%;
                height: 100%;

                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            ::before {
                content: '';
                display: block;
                padding-top: ${(1 / ratio) * 100}%;
            }
        }
    `,
};
