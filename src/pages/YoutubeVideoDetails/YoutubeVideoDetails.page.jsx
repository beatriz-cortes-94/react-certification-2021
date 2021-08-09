import React from 'react';
import VideoPlayer from '../../components/YoutubeVideoPlayer/YoutubeVideoPlayer.component';
import RelatedVideos from '../../components/YoutubeRelatedVideos/YoutubeRelatedVideos.component';
import { StyledGrid } from './YoutubeVideoDetails.styles';

function VideoDetails(props) {
  const { videoInfo, relatedVideos, onVideoClick } = props;
  const { id, snippet } = videoInfo;

  return (
    <div>
      <section>
        <StyledGrid>
          <VideoPlayer id={id} title={snippet.title} description={snippet.description} />
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
