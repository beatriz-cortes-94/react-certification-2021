import React from 'react';
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
  const { theme, isAuthenticated, favorites, updateFavorites } = useAppContext();
  const { id, title, description } = props;

  const updateFavoritesList = () => {
    updateFavorites(id);
  };

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
            <StyledButton onClick={updateFavoritesList}>
              <StyledFavorite
                className={favorites.get(id) ? 'fas fa-star' : 'far fa-star'}
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
