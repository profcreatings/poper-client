import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.div`
    height: 100%;

    border-radius: var(--border-radius);
    background: var(--black);
    overflow: hidden;

    ${MQ.maxWidth[900]} {
        border-radius: 12px;
    }
`;

export function PlayerGlobalStyles() {
    return (
        <Global
            styles={css`
                ${Wrapper} {
                    * {
                        margin: 0;
                        padding: 0;

                        font-size: 1rem;
                        font-family: var(--AvenirNext);
                        // TODO: add font
                        font-weight: 300;
                    }

                    .shaka-video {
                        width: 100%;
                        height: 100%;
                    }

                    .shaka-scrim-container {
                        background: none;
                    }

                    .shaka-text-container {
                        bottom: 5%;
                    }
                    .shaka-controls-container[shown='true']
                        ~ .shaka-text-container {
                        bottom: 160px;
                    }

                    .shaka-bottom-controls {
                        width: 100%;
                        padding: 0 42px;

                        display: flex;
                        flex-direction: column-reverse;
                    }

                    *::-webkit-slider-thumb {
                        width: 16px;
                        height: 16px;
                        margin-top: -2px;
                    }

                    .shaka-seek-bar {
                        &::-webkit-slider-thumb {
                            background: var(--red);
                        }
                    }

                    .shaka-range-container {
                        margin: 5px 0;
                    }

                    .shaka-controls-button-panel {
                        height: 42px;
                        margin: 30px 0 42px;
                    }

                    .material-icons-round {
                        padding: 0;
                        margin-right: 0;
                    }

                    .shaka-current-time {
                        margin-left: 18px;
                        padding: 0;
                    }

                    ${MQ.maxWidth[900]} {
                        *::-webkit-slider-thumb {
                            width: 12px;
                            height: 12px;
                            margin-top: 0;
                        }

                        .shaka-text-container {
                            bottom: 7%;
                        }
                        .shaka-controls-container[shown='true']
                            ~ .shaka-text-container {
                            bottom: 75px;
                        }

                        .shaka-bottom-controls {
                            padding: 0 18px;
                        }

                        .shaka-controls-button-panel {
                            height: 24px;
                            margin: 8px 0 10px;
                        }

                        .shaka-volume-bar-container {
                            display: none !important;
                        }

                        .shaka-current-time {
                            padding-top: 2px;
                            font-size: 12px;
                        }
                    }
                }
            `}
        />
    );
}
