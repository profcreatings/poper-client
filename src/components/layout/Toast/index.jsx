import { Toaster } from 'react-hot-toast';
import { Wrapper } from './styles.js';

export function Toast() {
    return (
        <Wrapper>
            <Toaster
                position="top-center"
                containerClassName="toaster"
                gutter={16}
                toastOptions={{
                    duration: 2500,
                }}
            />
        </Wrapper>
    );
}
