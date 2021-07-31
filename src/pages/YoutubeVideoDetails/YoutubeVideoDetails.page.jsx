import React from 'react';
import VideoDetails from '../../components/YoutubeVideoPlayer/YoutubeVideoPlayer.component';
import RelatedVideos from '../../components/YoutubeRelatedVideos/YoutubeRelatedVideos.component';
import { StyledGrid } from './YoutubeVideoDetails.styles';

function VideoPlayer() {
  return (
    <div>
      <section>
        <StyledGrid>
          <VideoDetails />
          <RelatedVideos />
        </StyledGrid>
      </section>
    </div>
  );
}

export default VideoPlayer;
