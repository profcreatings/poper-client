import { useFormContext } from 'react-hook-form';
import { Wrapper } from './styles.js';

export { useSetFormError } from './hooks/useSetFormError.js';

export function FormError() {
    const {
        formState: {
            errors: { formError: { message } = {} },
        },
    } = useFormContext();

    const errorMessage = Array.isArray(message)
        ? message?.map((line) => <p key={line}>{line}</p>)
        : message;

    const errorLines = Array.isArray(message) ? message.length : 1;

    return <Wrapper lines={errorLines}>{errorMessage}</Wrapper>;
}
