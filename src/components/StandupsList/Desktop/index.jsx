import styled from '@emotion/styled';

import { ROUTES } from '../../../constants/router.js';
import { OLD_STANDUPS } from '../../../constants/standups.jsx';
import { Image, Item, Wrapper, OverlapImage, StyledLink } from './styles.js';

export const DesktopStandups = styled(_DesktopStandups)``;

function _DesktopStandups({ className }) {
    return (
        <Wrapper className={className}>
            {[...OLD_STANDUPS].reverse().map(({ id, posterV, name }) => (
                <StyledLink
                    key={id}
                    to={`${ROUTES.standup}/${id}`}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <Item>
                        <Image
                            src={posterV}
                            alt={`Стендап "${name}"`}
                            loading="lazy"
                        />
                        <OverlapImage
                            src={posterV}
                            alt={`Стендап "${name}"`}
                            loading="lazy"
                        />
                    </Item>
                </StyledLink>
            ))}
        </Wrapper>
    );
}
