import { Controller } from 'react-hook-form';

/**
 * @param {InputHTMLAttributes} props
 */
export function Field(props) {
    const { as: Component, name, defaultValue, rules, ...restProps } = props;

    return (
        <Controller
            name={name}
            defaultValue={defaultValue || ''}
            rules={rules}
            render={({ field, fieldState }) => (
                <Component
                    {...restProps}
                    {...field}
                    error={fieldState.error?.message}
                />
            )}
        />
    );
}
