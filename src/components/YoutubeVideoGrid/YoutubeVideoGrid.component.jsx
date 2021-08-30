import React from 'react';
import Card from '../YoutubeCard/YoutubeCard.component';
import { StyledGrid } from './YoutubeVideoGrid.styles';

function VideoGrid(props) {
  const { videoList } = props;
  console.log(videoList);
  const videosGrid = videoList.items.map((video) => {
    const { snippet } = video;
    if (video.id.kind !== 'youtube#video') {
      return null;
    }
    return (
      <Card
        key={snippet.title}
        thumbnails={snippet.thumbnails}
        title={snippet.title}
        description={snippet.description}
        videoInfo={video}
      />
    );
  });

  return <StyledGrid> {videosGrid} </StyledGrid>;
}

export default VideoGrid;
