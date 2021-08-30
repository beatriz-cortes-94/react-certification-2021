import React from 'react';
import VideoGrid from '../../components/YoutubeVideoGrid/YoutubeVideoGrid.component';
import { useAppContext } from '../../context/ContextProvider';
import { StyledTitle } from './YoutubeFavorites.styles';

function Favorites() {
  const { favorites } = useAppContext();

  const videoList = { items: Array.from(favorites.values()) };

  return (
    <div>
      <section>
        <StyledTitle>FAVORITES</StyledTitle>
        {favorites.size > 0 && <VideoGrid videoList={videoList} />}
      </section>
    </div>
  );
}

export default Favorites;
