import React, { useEffect } from 'react';
import { useAppContext } from '../../context/ContextProvider';
import VideoPlayer from '../../components/YoutubeVideoPlayer/YoutubeVideoPlayer.component';
import RelatedVideos from '../../components/YoutubeRelatedVideos/YoutubeRelatedVideos.component';
import { StyledGrid } from './YoutubeVideoDetails.styles';

function VideoDetails() {
  const { results, clickedVideo } = useAppContext();
  const { id, snippet } = clickedVideo;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <section>
        <StyledGrid>
          <VideoPlayer id={id} title={snippet.title} description={snippet.description} />
          <RelatedVideos relatedVideos={results} currentVideoId={id} />
        </StyledGrid>
      </section>
    </div>
  );
}

export default VideoDetails;
