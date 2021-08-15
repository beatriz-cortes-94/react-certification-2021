import React from 'react';
import { useAppContext } from '../../context/ContextProvider';

import {
  StyledVideoCard,
  CardInfo,
  CardImage,
  CardTitle,
  CardDescription,
} from './YoutubeCard.styles';

function Card(props) {
  const { theme } = useAppContext();
  const { thumbnails, title, description, videoInfo, onVideoClick } = props;
  return (
    <StyledVideoCard
      isLightTheme={theme}
      onClick={() => {
        onVideoClick(videoInfo);
      }}
    >
      <CardImage background={thumbnails.high.url} />
      <CardInfo isLightTheme={theme}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInfo>
    </StyledVideoCard>
  );
}

export default Card;
