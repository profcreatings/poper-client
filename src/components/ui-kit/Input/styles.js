import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { LockIcon } from '../Icons/index.jsx';
import { MQ } from '../../../styles/media.js';

export const Wrapper = styled.div(
    ({ error }) =>
        css`
            position: relative;

            ${error &&
            css`
                ${StyledInput} {
                    color: var(--red);
                    border-color: var(--red);
                }

                ${BottomText} {
                    color: var(--red);
                }
            `}
        `,
);

export const StyledInput = styled.input`
    width: 100%;
    height: 50px;

    border-bottom: 1px solid var(--grey);

    text-align: center;

    :disabled {
        color: var(--grey);
    }

    ::placeholder {
        color: var(--grey);
        opacity: 1;
    }

    &:autofill,
    &:-webkit-autofill {
        color: var(--white);
        caret-color: var(--white);
        -webkit-text-fill-color: var(--white);

        background-color: var(--black) !important;
        background-clip: content-box !important; // safari fix
        -webkit-box-shadow: 0 0 0 1000px var(--black) inset !important; // background
    }

    ${MQ.maxWidth[640]} {
        height: 60px;
    }
`;

export const BottomText = styled.div`
    height: 32px;
    margin-top: 2px;

    font-size: 14px;
    line-height: 2.285;
    color: var(--grey);
    text-align: center;

    transition: height 0.3s ease;

    :empty {
        height: 0;
    }

    ${MQ.maxWidth[640]} {
        margin-top: 0;
        line-height: 2.4;
    }
`;

export const StyledLockIcon = styled(LockIcon)`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    ${StyledInput}:disabled ~ & {
        color: #707070; // grey
    }
`;
