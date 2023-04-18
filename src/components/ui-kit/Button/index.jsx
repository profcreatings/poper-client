import styled from '@emotion/styled';
import { Preloader } from '../Preloader/index.jsx';
import { StyledButton } from './styles';

/**
 * @param {ButtonHTMLAttributes} props
 */
export const Button = styled(_Button)``;

function _Button(props) {
    const { children, loading, ...restProps } = props;

    return (
        <StyledButton loading={String(loading || '')} {...restProps}>
            {loading ? <Preloader /> : children}
        </StyledButton>
    );
}
