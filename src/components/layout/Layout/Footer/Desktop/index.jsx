import styled from '@emotion/styled';

import { Nav } from '../../styles.js';
import { TextLink } from '../../../../ui-kit/TextLink/index.jsx';
import { ROUTES } from '../../../../../constants/router.js';
import { Social } from '../Social/index.jsx';
import { Wrapper } from './styles.js';

export const DesktopFooter = styled(_DesktopFooter)``;

function _DesktopFooter({ className }) {
    const currentYear = new Date().getFullYear();

    return (
        <Wrapper className={className}>
            <Nav>
                <span>{currentYear}</span>
                <TextLink href="/policy.pdf" target="_blank">
                    политика конфиденциальности
                </TextLink>
                <TextLink href="/offer.pdf" target="_blank">
                    оферта
                </TextLink>
                <TextLink to={ROUTES.support}>техподдержка</TextLink>
            </Nav>
            <Social />
        </Wrapper>
    );
}
