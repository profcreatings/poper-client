import { css, Global } from '@emotion/react';
import { resetStyles } from './reset.js';
import { fontsStyles } from './fonts.js';
import { global1750Styles } from './global-1750.js';
import { global900Styles } from './global-900.js';
import { global1100Styles } from './global-1100.js';
import { global640Styles } from './global-640.js';

export function GlobalStyles() {
    return (
        <Global
            styles={css`
                ${resetStyles};
                ${fontsStyles};

                :root {
                    font-family: var(--AvenirNext), system-ui, sans-serif;
                    font-size: 20px;
                    color: var(--white);
                }

                body {
                    max-width: 100vw;
                }

                #root {
                    padding: var(--body-padding);
                }

                a {
                    display: flex; // fix svg height
                    cursor: pointer;
                }

                button {
                    cursor: pointer;

                    :disabled {
                        cursor: default;
                    }
                }

                h1 {
                    margin-bottom: 90px;

                    font-size: 80px;
                    color: var(--red);
                    line-height: 0.77;
                }

                h2 {
                    font-size: 1.8rem;
                    font-weight: 600;
                    line-height: 1;
                }

                ${global1750Styles};
                ${global1100Styles};
                ${global900Styles};
                ${global640Styles};
            `}
        />
    );
}
