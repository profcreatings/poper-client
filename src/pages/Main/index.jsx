import { StandupsList } from '../../components/StandupsList/index.jsx';
import { Hero } from '../../components/layout/Hero/index.jsx';
import { Info } from './Info/index.jsx';

export function MainPage() {
    return (
        <>
            <Hero image="/images/poster.jpg" video="/trailer.mp4" main />
            <Info />
            <StandupsList />
        </>
    );
}
