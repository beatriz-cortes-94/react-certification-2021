import React from 'react';
import {
  StyledVideosList,
  StyledVideoImg,
  StyledVideoTitle,
} from './YoutubeRelatedVideos.styles';
import data from '../../mock/youtube-videos-mock.json';

function RelatedVideos() {
  const videoInfo = data.items[2];
  return (
    <StyledVideosList>
      <StyledVideoImg src={videoInfo.snippet.thumbnails.high.url} alt="img" />
      <div>
        <StyledVideoTitle>{videoInfo.snippet.title}</StyledVideoTitle>
      </div>
    </StyledVideosList>
  );
}

export default RelatedVideos;
