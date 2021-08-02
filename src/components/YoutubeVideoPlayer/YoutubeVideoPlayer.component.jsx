import React from 'react';
import {
  StyledContainer,
  StyledVideoPlayer,
  StyledVideoDetails,
  StyledVideoTitle,
} from './YoutubeVideoPlayer.styles';

function VideoPlayer(props) {
  const { id, snippet } = props.videoInfo;
  const { title, description } = snippet;
  return (
    <StyledContainer>
      <StyledVideoPlayer
        src={`https://www.youtube.com/embed/${id.videoId}`}
        title={title}
        data-testid="video-player"
      />
      <StyledVideoDetails>
        <StyledVideoTitle>{title}</StyledVideoTitle>
        <p>{description}</p>
      </StyledVideoDetails>
    </StyledContainer>
  );
}

export default VideoPlayer;
