import { forwardRef } from 'react';
import { BottomText, StyledInput, StyledLockIcon, Wrapper } from './styles.js';

export const Input = forwardRef(_Input);

/**
 * @param {InputHTMLAttributes} props
 */
function _Input(props, ref) {
    const { helper, error, className, ...inputProps } = props;
    const bottomText = error || helper;

    return (
        <Wrapper className={className} error={error}>
            <StyledInput ref={ref} {...inputProps} />
            <BottomText>{bottomText}</BottomText>
            {inputProps.disabled && <StyledLockIcon />}
        </Wrapper>
    );
}
