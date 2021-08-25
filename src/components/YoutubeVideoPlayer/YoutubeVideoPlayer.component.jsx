import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/ContextProvider';
import {
  StyledContainer,
  StyledVideoPlayer,
  StyledVideoDetails,
  StyledTitleFavBox,
  StyledButton,
  StyledFavorite,
  StyledVideoTitle,
} from './YoutubeVideoPlayer.styles';

function VideoPlayer(props) {
  const { theme, isAuthenticated } = useAppContext();
  const { id, title, description } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <StyledVideoPlayer
        src={`https://www.youtube.com/embed/${id.videoId}`}
        title={title}
        data-testid="video-player"
      />
      <StyledVideoDetails>
        <StyledTitleFavBox>
          {isAuthenticated && (
            <StyledButton>
              <StyledFavorite
                className={isFavorite ? 'fas fa-star' : 'far fa-star'}
                isLightTheme={theme}
              />
            </StyledButton>
          )}
          <StyledVideoTitle>{title}</StyledVideoTitle>
        </StyledTitleFavBox>
        <p>{description}</p>
      </StyledVideoDetails>
    </StyledContainer>
  );
}

export default VideoPlayer;
