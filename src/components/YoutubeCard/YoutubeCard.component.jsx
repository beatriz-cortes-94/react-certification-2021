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
  const { theme, updateClickedVideo } = useAppContext();
  const { thumbnails, title, description, videoInfo } = props;
  return (
    <StyledVideoCard
      isLightTheme={theme}
      onClick={() => {
        updateClickedVideo(videoInfo);
      }}
      to="/videoDetails"
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
