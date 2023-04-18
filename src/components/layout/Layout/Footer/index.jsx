import { FooterGlobalStyles } from './styles.jsx';
import { DesktopFooter } from './Desktop/index.jsx';
import { MobileFooter } from './Mobile/index.jsx';

export function Footer() {
    return (
        <>
            <FooterGlobalStyles />
            <DesktopFooter />
            <MobileFooter />
        </>
    );
}
