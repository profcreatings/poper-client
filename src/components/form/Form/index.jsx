import { useFormContext } from 'react-hook-form';

/**
 * @param {FormHTMLAttributes} props
 */
export function Form(props) {
    const { handleSubmit } = useFormContext();

    const onSubmit = async (...args) => {
        try {
            return await props.onSubmit(...args);
        } catch {
            // catch error to reset isSubmitting to false
        }
    };

    return <form {...props} onSubmit={handleSubmit(onSubmit)} />;
}
