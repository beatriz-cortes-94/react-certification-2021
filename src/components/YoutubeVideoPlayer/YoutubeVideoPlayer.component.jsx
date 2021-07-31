import React from 'react';
import {
  StyledContainer,
  StyledVideoPlayer,
  StyledVideoDetails,
  StyledVideoTitle,
} from './YoutubeVideoPlayer.styles';
import data from '../../mock/youtube-videos-mock.json';

function VideoPlayer() {
  const videoInfo = data.items[2];
  return (
    <StyledContainer>
      <StyledVideoPlayer
        src="https://www.youtube.com/embed/nmXMgqjQzls"
        title={videoInfo.snippet.title}
      />
      <StyledVideoDetails>
        <StyledVideoTitle>{videoInfo.snippet.title}</StyledVideoTitle>
        <p>{videoInfo.snippet.description}</p>
      </StyledVideoDetails>
    </StyledContainer>
  );
}

export default VideoPlayer;
