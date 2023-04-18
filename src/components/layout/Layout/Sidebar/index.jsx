import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from '../Header/index.jsx';
import { TextLink } from '../../../ui-kit/TextLink';
import { useUserQuery } from '../../../../queries/user/useUserQuery.js';
import { ROUTES } from '../../../../constants/router.js';
import { Footer } from '../Footer/index.jsx';
import { useBodyScrollLock } from '../../../../hooks/useBodyScrollLock.js';
import { useMedia } from '../../../../hooks/useMedia.js';
import { Content, Nav, Wrapper } from './styles.js';

export function Sidebar({ opened, onClose, onStandupsClick }) {
    const { data: user } = useUserQuery();
    const ref = useRef(null);
    const isMatches = useMedia('(max-width: 1100px)');

    useBodyScrollLock(ref, opened && isMatches);

    const { pathname } = useLocation();

    useEffect(onClose, [pathname, onClose]);

    return (
        <Wrapper ref={ref} opened={opened}>
            <Header sidebarOpened onHamburgerClick={onClose} />
            <Content>
                <Nav>
                    {user ? (
                        <TextLink
                            mobilewhite
                            to={ROUTES.profile}
                            onClick={onClose}
                        >
                            профиль
                        </TextLink>
                    ) : (
                        <TextLink
                            mobilewhite
                            to={ROUTES.login}
                            onClick={onClose}
                        >
                            вход
                        </TextLink>
                    )}
                    <TextLink mobilewhite href="https://veshdok.com/">
                        вещдок
                    </TextLink>
                    <TextLink
                        mobilewhite
                        onClick={() => {
                            onClose();
                            onStandupsClick();
                        }}
                    >
                        стендапы
                    </TextLink>
                    <TextLink mobilewhite to={ROUTES.faq} onClick={onClose}>
                        faq
                    </TextLink>
                    <TextLink mobilewhite to={ROUTES.support} onClick={onClose}>
                        техподдержка
                    </TextLink>
                </Nav>
                <Footer />
            </Content>
        </Wrapper>
    );
}
