import { Dash, Heading, Wrapper } from './styles.js';
import { DesktopStandups } from './Desktop';
import { MobileStandups } from './Mobile/index.jsx';

export function StandupsList({ dashed }) {
    return (
        <Wrapper dashed={dashed} id="standups">
            <Dash />
            <Heading>предыдущие стендапы</Heading>
            <DesktopStandups />
            <MobileStandups />
        </Wrapper>
    );
}
