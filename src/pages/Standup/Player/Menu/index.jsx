import { useClickAway } from 'react-use';
import { Children, cloneElement, useRef } from 'react';

import {
    BackIcon,
    CheckIcon,
    CrossIcon,
} from '../../../../components/ui-kit/Icons/index.jsx';
import {
    BackButton,
    CloseButton,
    Label,
    MenuHeader,
    Wrapper,
} from './styles.js';

export { MenuOption } from './styles.js';

export function Menu({
    opened,
    buttonRef,
    onClose,
    onBack,
    value,
    onSelect,
    title,
    nested,
    children,
    className,
}) {
    const ref = useRef(null);

    useClickAway(ref, (e) => {
        if (
            !opened ||
            e.target === buttonRef.current ||
            buttonRef.current.contains(e.target)
        ) {
            return;
        }

        onClose(false);
    });

    return (
        <Wrapper
            ref={ref}
            opened={opened}
            nested={nested}
            className={className}
        >
            <MenuHeader nested={nested}>
                <BackButton onClick={onBack}>
                    <BackIcon />
                </BackButton>
                {title}
                <CloseButton onClick={onClose}>
                    <CrossIcon />
                </CloseButton>
            </MenuHeader>

            {Children.map(children, (child) => {
                const isSelected =
                    value !== undefined && value === child.props.value;

                return cloneElement(child, {
                    onClick: (e) => {
                        onSelect?.(child.props.value);
                        child.props.onClick?.(e);
                    },
                    children: (
                        <>
                            {isSelected && <CheckIcon />}
                            {child.props.children}
                            <Label>{child.props.label}</Label>
                        </>
                    ),
                });
            })}
        </Wrapper>
    );
}
