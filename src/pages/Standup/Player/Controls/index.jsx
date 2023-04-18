import { RegisterControl } from '../RegisterControl/index.jsx';
import { PlayPause } from './PlayPause/index.jsx';
import { Volume } from './Volume/index.jsx';
import { Subtitles } from './Subtitles/index.jsx';
import { Cast } from './Cast/index.jsx';
import { Settings } from './Settings/index.jsx';
import { Fullscreen } from './Fullscreen/index.jsx';
import { BigPlayPause } from './BigPlayPause/index.jsx';

// TODO: range hitmap
export function Controls() {
    return (
        <>
            <RegisterControl name="play_pause">
                <PlayPause />
            </RegisterControl>
            <RegisterControl name="volume_button">
                <Volume />
            </RegisterControl>
            <RegisterControl name="captions">
                <Subtitles />
            </RegisterControl>
            <RegisterControl name="cast">
                <Cast />
            </RegisterControl>
            <RegisterControl name="settings">
                <Settings />
            </RegisterControl>
            <RegisterControl name="fullscreen">
                <Fullscreen />
            </RegisterControl>
            <RegisterControl name="big_play_pause">
                <BigPlayPause />
            </RegisterControl>
        </>
    );
}
