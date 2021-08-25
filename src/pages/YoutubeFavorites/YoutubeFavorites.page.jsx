import React from 'react';
import VideoGrid from '../../components/YoutubeVideoGrid/YoutubeVideoGrid.component';
import { useAppContext } from '../../context/ContextProvider';
import { StyledTitle } from './YoutubeFavorites.styles';

function Favorites() {
  const { favorites } = useAppContext();
  return (
    <div>
      <section>
        <StyledTitle>FAVORITES</StyledTitle>
        {favorites.lenght > 0 && <VideoGrid videoList={favorites} />}
      </section>
    </div>
  );
}

export default Favorites;
