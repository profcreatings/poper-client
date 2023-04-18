import { Inner, Loader, Wrapper } from './styles.js';

export function Skeleton({
    width,
    height,
    children,
    loading = true,
    className,
}) {
    return (
        <Wrapper style={{ width, height }} className={className}>
            <Inner loading={String(loading || '')}>{children}</Inner>
            {loading && <Loader />}
        </Wrapper>
    );
}
