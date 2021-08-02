import React from 'react';
import Card from '../YoutubeCard/YoutubeCard.component';
import { StyledGrid } from './YoutubeVideoGrid.styles';

function VideoGrid(props) {
  const { videoList, onVideoClick } = props;
  const videosGrid = videoList.items.slice(1).map((video) => {
    return (
      <Card key={video.snippet.title} videoInfo={video} onVideoClick={onVideoClick} />
    );
  });

  return <StyledGrid> {videosGrid} </StyledGrid>;
}

export default VideoGrid;
