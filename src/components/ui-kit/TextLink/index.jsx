import styled from '@emotion/styled';
import { useLinkClickHandler } from 'react-router-dom';

import { StyledLink } from './styles.js';

export const TextLink = styled(_TextLink)``;

function _TextLink({
    children,
    underline,
    mobilewhite,
    href,
    to,
    onClick,
    replace,
    state,
    target,
    ...restProps
}) {
    const linkClickHandler = useLinkClickHandler(to, {
        replace,
        state,
        target,
    });

    const handleClick = (e) => {
        e.preventDefault();

        if (href) {
            window.open(href, restProps.target, 'noopener,noreferrer');
        } else {
            linkClickHandler(e);
            onClick?.(e);
        }
    };

    return (
        <StyledLink
            underline={String(underline || '')}
            mobilewhite={String(mobilewhite || '')}
            onClick={handleClick}
            {...restProps}
        >
            <span>{children}</span>
        </StyledLink>
    );
}
