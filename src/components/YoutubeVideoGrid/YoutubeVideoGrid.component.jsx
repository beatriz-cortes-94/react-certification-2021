import React from 'react';
import Card from '../YoutubeCard/YoutubeCard.component';
import { StyledGrid } from './YoutubeVideoGrid.styles';

function VideoGrid(props) {
  const { videoList, onVideoClick } = props;
  const videosGrid = videoList.items.slice(1).map((video) => {
    const { snippet } = video;
    return (
      <Card
        key={snippet.title}
        thumbnails={snippet.thumbnails}
        title={snippet.title}
        description={snippet.description}
        videoInfo={video}
        onVideoClick={onVideoClick}
      />
    );
  });

  return <StyledGrid> {videosGrid} </StyledGrid>;
}

export default VideoGrid;
