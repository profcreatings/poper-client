import { Collapse as ReactCollapse } from 'react-collapse';
import { useToggle } from 'react-use';

import { StyledPlusIcon, Trigger, Wrapper } from './styles.js';

export function Collapse({ title, children }) {
    const [isOpen, toggleIsOpen] = useToggle(false);

    return (
        <Wrapper>
            <Trigger onClick={toggleIsOpen}>
                {title}
                <StyledPlusIcon opened={String(isOpen || '')} />
            </Trigger>
            <ReactCollapse isOpened={isOpen}>{children}</ReactCollapse>
        </Wrapper>
    );
}
