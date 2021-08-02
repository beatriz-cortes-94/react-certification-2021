import React from 'react';
import VideoPlayer from '../../components/YoutubeVideoPlayer/YoutubeVideoPlayer.component';
import RelatedVideos from '../../components/YoutubeRelatedVideos/YoutubeRelatedVideos.component';
import { StyledGrid } from './YoutubeVideoDetails.styles';

function VideoDetails(props) {
  const { videoInfo, relatedVideos, onVideoClick } = props;
  const { id } = videoInfo;

  return (
    <div>
      <section>
        <StyledGrid>
          <VideoPlayer videoInfo={videoInfo} />
          <RelatedVideos
            relatedVideos={relatedVideos}
            currentVideoId={id}
            onVideoClick={onVideoClick}
          />
        </StyledGrid>
      </section>
    </div>
  );
}

export default VideoDetails;
