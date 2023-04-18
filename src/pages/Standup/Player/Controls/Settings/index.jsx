import { forwardRef, useEffect, useState } from 'react';
import { uniqBy } from 'lodash';

import {
    ResolutionIcon,
    SettingsIcon,
    SpeedIcon,
    SubtitlesIcon,
} from '../../../../../components/ui-kit/Icons/index.jsx';
import { Menu, MenuOption } from '../../Menu/index.jsx';
import { ControlButton } from '../../ControlButton/index.jsx';
import { QUALITIES, RATES } from './constants.js';
import { StyledSubtitlesMenu, SubtitlesOption } from './styles.js';

export const Settings = forwardRef(_Settings);

function _Settings(props, ref) {
    const [openedMenu, setOpenedMenu] = useState(null);
    const close = () => setOpenedMenu(null);
    const toggle = () => setOpenedMenu((current) => (current ? null : 'main'));
    const goBack = () => setOpenedMenu('main');

    /* Rate */
    const [rate, setRate] = useState(1);
    const rateLabel = RATES.find(({ value }) => value === rate).label;

    const handleRateSelect = (rate) => {
        const video = window.player.getMediaElement();

        video.playbackRate = rate;
        video.defaultPlaybackRate = rate;
        setRate(rate);
    };

    useEffect(() => {
        const video = window.player.getMediaElement();

        const updateRate = (e) => {
            e.target.playbackRate = rate;
            e.target.defaultPlaybackRate = rate;
        };

        video?.addEventListener('play', updateRate);
        video?.addEventListener('seeked', updateRate);

        return () => {
            video?.removeEventListener('play', updateRate);
            video?.removeEventListener('seeked', updateRate);
        };
    }, [rate]);

    /* Quality */
    const [variantTracks, setVariantTracks] = useState([]);
    const [quality, setQuality] = useState('auto');
    const qualityLabel = QUALITIES.find(({ value }) => value === quality).label;

    useEffect(() => {
        const updateTracks = () => {
            const tracks = window.player.getVariantTracks();

            if (!tracks.length) return;

            const sorted = tracks.sort((a, b) => b.bandwidth - a.bandwidth);
            const filtered = sorted.filter(({ height }) =>
                QUALITIES.some(({ value }) => value === height),
            );
            const uniq = uniqBy(filtered, ({ height }) => height);

            setVariantTracks(uniq);
        };

        window.player.addEventListener('trackschanged', updateTracks);

        return () =>
            window.player.removeEventListener('trackschanged', updateTracks);
    }, []);

    const handleQualitySelect = (quality) => {
        setQuality(quality);

        window.player.configure({
            abr: {
                enabled: quality === 'auto',
            },
        });

        const track = variantTracks.find(({ height }) => height === quality);
        if (!track) return;
        window.player.selectVariantTrack(track, true);
    };

    /* Subtitles */
    const [subtitles, setSubtitles] = useState('off');
    const subtitlesLabel = {
        off: 'отключено',
        ru: 'русские',
        en: 'английские',
    }[subtitles];

    return (
        <>
            <ControlButton
                ref={ref}
                onClick={toggle}
                desktop
                mobile
                mobileWidth={21}
                {...props}
            >
                <SettingsIcon />
            </ControlButton>

            <Menu
                title="настройки"
                opened={openedMenu === 'main'}
                buttonRef={ref}
                onClose={close}
            >
                <MenuOption
                    onClick={() => setOpenedMenu('speed')}
                    label={rateLabel}
                >
                    <SpeedIcon /> скорость
                </MenuOption>
                <MenuOption
                    onClick={() => setOpenedMenu('quality')}
                    label={qualityLabel}
                >
                    <ResolutionIcon /> качество
                </MenuOption>
                <SubtitlesOption
                    onClick={() => setOpenedMenu('subtitles')}
                    label={subtitlesLabel}
                >
                    <SubtitlesIcon /> субтитры
                </SubtitlesOption>
            </Menu>

            <Menu
                nested
                title="скорость воспроизведения"
                opened={openedMenu === 'speed'}
                buttonRef={ref}
                onClose={close}
                onBack={goBack}
                value={rate}
                onSelect={handleRateSelect}
            >
                {RATES.map(({ value, label }) => (
                    <MenuOption key={value} value={value}>
                        {label}
                    </MenuOption>
                ))}
            </Menu>

            <Menu
                nested
                title="качество"
                opened={openedMenu === 'quality'}
                buttonRef={ref}
                onClose={close}
                onBack={goBack}
                value={quality}
                onSelect={handleQualitySelect}
            >
                {QUALITIES.map(({ value, label }) => (
                    <MenuOption key={value} value={value}>
                        {label}
                    </MenuOption>
                ))}
            </Menu>

            <StyledSubtitlesMenu
                nested
                title="субтитры"
                opened={openedMenu === 'subtitles'}
                buttonRef={ref}
                onClose={close}
                onBack={goBack}
                value={subtitles}
                onSelect={setSubtitles}
            />
        </>
    );
}
