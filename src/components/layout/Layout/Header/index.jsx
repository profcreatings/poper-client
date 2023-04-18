import { useRef } from 'react';
import { Link, matchRoutes } from 'react-router-dom';

import { CrossIcon, HamburgerIcon } from '../../../ui-kit/Icons/index.jsx';
import { Nav } from '../styles.js';
import { TextLink } from '../../../ui-kit/TextLink/index.jsx';
import { ROUTES } from '../../../../constants/router.js';
import { Button } from '../../../ui-kit/Button/index.jsx';
import { useUserQuery } from '../../../../queries/user/useUserQuery.js';
import { HamburgerButton, StyledLogoIcon, Wrapper } from './styles.js';

export function Header({ onHamburgerClick, sidebarOpened, onStandupsClick }) {
    const { data: user, isFetching } = useUserQuery();

    const shouldAnimate = useRef(
        matchRoutes([{ path: '/' }, { path: `${ROUTES.standup}/*` }], location),
    ).current;

    return (
        <Wrapper fade={shouldAnimate}>
            <Link to="/">
                <StyledLogoIcon />
            </Link>
            <Nav>
                <TextLink href="https://veshdok.com/">вещдок</TextLink>
                <TextLink onClick={onStandupsClick}>стендапы</TextLink>
                <TextLink to={ROUTES.faq}>faq</TextLink>
                {user || isFetching ? (
                    <TextLink to={ROUTES.profile}>профиль</TextLink>
                ) : (
                    <Button as={Link} to={ROUTES.login}>
                        вход
                    </Button>
                )}
            </Nav>
            <HamburgerButton onClick={onHamburgerClick}>
                {sidebarOpened ? <CrossIcon /> : <HamburgerIcon />}
            </HamburgerButton>
        </Wrapper>
    );
}
