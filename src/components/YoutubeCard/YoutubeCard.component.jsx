import React from 'react';
import {
  StyledVideoCard,
  CardInfo,
  CardImage,
  CardTitle,
  CardDescription,
} from './YoutubeCard.styles';

function Card(props) {
  const { thumbnails, title, description, videoInfo, onVideoClick } = props;
  return (
    <StyledVideoCard
      onClick={() => {
        onVideoClick(videoInfo);
      }}
    >
      <CardImage background={thumbnails.high.url} />
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInfo>
    </StyledVideoCard>
  );
}

export default Card;
