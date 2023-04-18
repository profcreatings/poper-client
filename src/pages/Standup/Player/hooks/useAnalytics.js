import { useEffect } from 'react';
import shaka from 'shaka-player/dist/shaka-player.ui.js';
import { loadScript } from '../../../../utils/loadScript.js';
import { useUserQuery } from '../../../../queries/user/useUserQuery.js';

window.shaka = shaka; // used inside Gumlet analytics

let isAppended = false;

export const useAnalytics = ({ player, videoRef }) => {
    const { data: user } = useUserQuery();

    useEffect(() => {
        if (!player || isAppended) {
            return;
        }

        loadScript(
            'https://cdn.gumlytics.com/insights/1.1/gumlet-insights.min.js',
        ).then(() => {
            window.gumlet
                .insights({
                    property_id: 'GnN4d_NI',
                    userId: user.id,
                    userEmail: user.email, // TODO: check typo
                })
                .registerShakaPlayer(player, {
                    mediaElement: videoRef.current,
                });
        });

        isAppended = true;
    }, [player, videoRef, user.email, user.id]);
};
