import { css, Global } from '@emotion/react';

import { MQ } from '../../../../styles/media.js';
import { DesktopFooter } from './Desktop/index.jsx';
import { MobileFooter } from './Mobile/index.jsx';

export function FooterGlobalStyles() {
    return (
        <Global
            styles={css`
                body {
                    ${MobileFooter} {
                        display: none;
                    }

                    ${MQ.maxWidth[1100]} {
                        ${DesktopFooter} {
                            display: none;
                        }
                        ${MobileFooter} {
                            display: flex;
                        }
                    }
                }
            `}
        />
    );
}
