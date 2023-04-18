import styled from '@emotion/styled';

import { Social } from '../Social/index.jsx';
import { Bottom, StyledTextLink, Wrapper } from './styles.js';

export const MobileFooter = styled(_MobileFooter)``;

function _MobileFooter({ className }) {
    return (
        <Wrapper className={className}>
            <Social />
            <Bottom>
                <StyledTextLink href="/offer.pdf" target="_blank" underline>
                    оферта
                </StyledTextLink>
                <StyledTextLink href="/policy.pdf" target="_blank" underline>
                    политика конфиденциальности
                </StyledTextLink>
                <p>© 2023 все права защищены</p>
            </Bottom>
        </Wrapper>
    );
}
