import { Dot, Wrapper } from './styles.js';

export function Preloader(props) {
    return (
        <Wrapper {...props}>
            <Dot />
            <Dot />
            <Dot />
        </Wrapper>
    );
}
