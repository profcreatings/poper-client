import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(
    ({ underline, mobilewhite }) => css`
        height: 26px;

        display: inline-flex;
        align-items: center;

        color: var(--grey);
        transition: color 0.1s ease;

        @media (hover: hover) {
            :hover {
                color: var(--white);
            }
        }

        ${underline &&
        css`
            span {
                line-height: 0.8;
                border-bottom: 1px solid;
            }
        `}

        ${mobilewhite &&
        css`
            @media (hover: none) {
                color: var(--white);
            }
        `}
    `,
);
