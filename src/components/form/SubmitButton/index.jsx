import { useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';
import { Button } from '../../ui-kit/Button/index.jsx';

/**
 * @param {ButtonHTMLAttributes} props
 */
export const SubmitButton = styled(_SubmitButton)``;

export function _SubmitButton(props) {
    const { loading, ...restProps } = props;
    const {
        formState: { isSubmitting },
    } = useFormContext();

    return (
        <Button loading={loading ?? isSubmitting} view="red" {...restProps} />
    );
}
