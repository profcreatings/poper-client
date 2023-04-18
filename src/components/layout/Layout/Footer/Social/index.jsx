import styled from '@emotion/styled';

import {
    InstagramIcon,
    TelegramIcon,
    TwitterIcon,
    YoutubeIcon,
} from '../../../../ui-kit/Icons/index.jsx';
import { SocialLink, SocialNav } from './styles.js';

export const Social = styled(_Social)``;

function _Social({ className }) {
    return (
        <SocialNav className={className}>
            <SocialLink
                href="https://www.youtube.com/@Spoontamer"
                target="_blank"
            >
                <YoutubeIcon />
            </SocialLink>
            <SocialLink
                href="https://www.instagram.com/spoontamer/"
                target="_blank"
            >
                <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://t.me/poperechnyi" target="_blank">
                <TelegramIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/Spoontamer" target="_blank">
                <TwitterIcon />
            </SocialLink>
        </SocialNav>
    );
}
