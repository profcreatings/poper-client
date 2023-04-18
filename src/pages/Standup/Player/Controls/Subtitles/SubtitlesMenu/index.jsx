import { Menu, MenuOption } from '../../../Menu/index.jsx';

export function SubtitlesMenu(props) {
    const handleSelect = (value) => {
        const tracks = window.player.getTextTracks();
        const track = tracks.find(({ language }) => language === value);

        props.onSelect(value);
        window.player.setTextTrackVisibility(value !== 'off');

        if (track) {
            window.player.selectTextTrack(track);
        }
    };

    return (
        <Menu {...props} onSelect={handleSelect}>
            <MenuOption value="off">отключить</MenuOption>
            <MenuOption value="ru">русские</MenuOption>
            <MenuOption value="en">английские</MenuOption>
        </Menu>
    );
}
