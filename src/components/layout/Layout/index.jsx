import { useCallback, useState } from 'react';
import { matchRoutes, Outlet, useNavigate } from 'react-router-dom';

import { Container } from '../Container/index.jsx';
import { Toast } from '../Toast/index.jsx';
import { Cookies } from '../Cookies/index.jsx';
import { ROUTES } from '../../../constants/router.js';
import { Header } from './Header/index.jsx';
import { Footer } from './Footer/index.jsx';
import { Sidebar } from './Sidebar/index.jsx';
import { Noise } from './styles.js';

export function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const goToStandups = () => {
        const isPageWithStandups = matchRoutes(
            [{ path: '/' }, { path: `${ROUTES.standup}/*` }],
            location,
        );

        if (!isPageWithStandups) {
            navigate('/');
        }

        queueMicrotask(() => {
            document.getElementById('standups').scrollIntoView({
                behavior: isPageWithStandups ? 'smooth' : 'auto',
            });
        });
    };

    const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
    const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

    return (
        <Container as="main">
            <Header
                sidebarOpened={false}
                onHamburgerClick={openSidebar}
                onStandupsClick={goToStandups}
            />
            <Sidebar
                opened={isSidebarOpen}
                onClose={closeSidebar}
                onStandupsClick={goToStandups}
            />
            <Outlet />
            <Footer />
            <Toast />
            <Cookies />
            <Noise />
        </Container>
    );
}
