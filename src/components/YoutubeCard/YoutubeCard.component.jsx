import React from 'react';
import {
  StyledVideoCard,
  CardInfo,
  CardImage,
  CardTitle,
  CardDescription,
} from './YoutubeCard.styles';

function Card(video) {
  const { videoInfo } = video;
  return (
    <StyledVideoCard href="https://www.youtube.com/">
      <CardImage background={videoInfo.snippet.thumbnails.high.url} />
      <CardInfo>
        <CardTitle>{videoInfo.snippet.title}</CardTitle>
        <CardDescription>{videoInfo.snippet.description}</CardDescription>
      </CardInfo>
    </StyledVideoCard>
  );
}

export default Card;
