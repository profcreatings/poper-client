import { Suspense, useCallback, useState } from 'react';
import {
    matchRoutes,
    Navigate,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { lazily } from 'react-lazily';

import { StandupsList } from '../../components/StandupsList/index.jsx';
import { Hero } from '../../components/layout/Hero/index.jsx';
import { Modal } from '../../components/ui-kit/Modal/index.jsx';
import { ALL_STANDUPS } from '../../constants/standups.jsx';
import { ROUTES, ROUTES_PARAMS } from '../../constants/router.js';
import { useOrientation } from '../../hooks/useOrientation.js';
import { Preloader } from '../../components/ui-kit/Preloader';
import { Info } from './Info/index.jsx';
import { PlayerWrapper } from './styles.js';

const { Player } = lazily(() => import('./Player/index.jsx'));

export function StandupPage() {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const orientation = useOrientation();
    const [isModalOpen, setIsModalOpen] = useState(searchParams.get('play'));
    const [shouldRenderModal, setShouldRenderModal] = useState(false);
    const standup = ALL_STANDUPS.find(
        (standup) => standup.id === params[ROUTES_PARAMS.id],
    );

    const isAdaptiveTitle = matchRoutes(
        [
            { path: `${ROUTES.standup}/blagotvoritelnyi` },
            { path: `${ROUTES.standup}/nelicepriyatnyi` },
        ],
        location,
    );

    const handleHeroLoad = useCallback(() => setShouldRenderModal(true), []);
    const openModal = () => setIsModalOpen(true);
    const handleModalClose = () => {
        setIsModalOpen(false);
        navigate(location.pathname, { replace: true });
    };

    if (!standup) {
        return <Navigate to="/" replace />;
    }

    const { name, posterH, posterVHQ, special } = standup;
    // TODO:
    // const Wrapper = special ? AuthorizedContent : Fragment;

    return (
        <>
            <Modal
                opened={isModalOpen}
                onClose={handleModalClose}
                prerender={shouldRenderModal}
            >
                <PlayerWrapper>
                    {special ? (
                        <Suspense fallback={<Preloader />}>
                            <Player />
                        </Suspense>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${standup.youtubeId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    )}
                </PlayerWrapper>
            </Modal>
            <Hero
                title={name}
                adaptiveTitle={isAdaptiveTitle}
                image={orientation === 'landscape' ? posterH : posterVHQ}
                onPlay={openModal}
                onLoad={handleHeroLoad}
            />
            <Info standup={standup} />
            <StandupsList dashed />
        </>
    );
}
