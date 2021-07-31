import React from 'react';
import Card from '../YoutubeCard/YoutubeCard.component';
import data from '../../mock/youtube-videos-mock.json';
import { StyledGrid } from './YoutubeGrid.styles';

function Grid() {
  const videosInfo = data.items;
  const videosGrid = videosInfo.slice(1).map((video) => {
    return <Card key={video.snippet.title} videoInfo={video.snippet} />;
  });

  return <StyledGrid> {videosGrid} </StyledGrid>;
}

export default Grid;
