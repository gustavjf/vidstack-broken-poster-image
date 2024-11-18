import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react"
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';

export function VideoPlayer() {
    return (
        <MediaPlayer
            src='https://files.vidstack.io/sprite-fight/720p.mp4'
            viewType='video'
            streamType='on-demand'
            logLevel='warn'
            crossOrigin
            playsInline
            title='Sprite Fight'
            poster='https://files.vidstack.io/sprite-fight/poster.webp'
        >
            <MediaProvider>
                <Poster className="vds-poster" alt="sprite fight video poster image" />
            </MediaProvider>
            <DefaultVideoLayout
                thumbnails='https://files.vidstack.io/sprite-fight/thumbnails.vtt'
                icons={defaultLayoutIcons}
            />
        </MediaPlayer>   
    )
}