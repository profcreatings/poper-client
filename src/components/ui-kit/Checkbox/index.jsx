import { forwardRef } from 'react';

import { CheckIcon } from '../Icons';
import { StyledCheckbox, Wrapper } from './styles.js';

export const Checkbox = forwardRef(_Checkbox);

/**
 * @param {InputHTMLAttributes} props
 */
function _Checkbox(props, ref) {
    const { className, children, value, error, ...restProps } = props;

    return (
        <Wrapper className={className} error={error}>
            <input type="checkbox" checked={!!value} ref={ref} {...restProps} />

            <StyledCheckbox>
                <CheckIcon />
            </StyledCheckbox>
            {children}
        </Wrapper>
    );
}
