import React, { useState, useEffect } from 'react';
import Nav from '../YoutubeNav/YoutubeNav.component';
import Home from '../../pages/YoutubeHome/YoutubeHome.page';
import VideoDetails from '../../pages/YoutubeVideoDetails/YoutubeVideoDetails.page';
import useYoutubeApi from '../../api/useYoutubeApi';
import ContextProvider, { useAppContext } from '../../context/ContextProvider';
import { StyledApp } from './App.styles';

function YoutubeApp() {
  const { theme } = useAppContext();
  const { error, loading, results, fetchData } = useYoutubeApi();
  const [isHomeView, setIsHomeView] = useState(true);
  const [videoInfo, setVideoInfo] = useState(null);

  const handleMenuClick = () => {
    if (!isHomeView) {
      setIsHomeView(true);
    }
  };

  const onSearchSubmit = () => {
    fetchData();
  };

  const onVideoClick = (clickedVideo) => {
    window.scrollTo(0, 0);
    setIsHomeView(false);
    setVideoInfo(clickedVideo);
  };

  const renderViews = () => {
    if (error !== '' && loading === false) {
      return <h1>Ups! Something went wrong</h1>;
    }
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (isHomeView && results) {
      return <Home videoList={results} onVideoClick={onVideoClick} />;
    }
    if (!isHomeView) {
      return (
        <VideoDetails
          videoInfo={videoInfo}
          relatedVideos={results}
          onVideoClick={onVideoClick}
        />
      );
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsHomeView(true);
  }, [results, setIsHomeView]);

  return (
    <StyledApp isLightTheme={theme}>
      <header>
        <Nav handleMenuClick={handleMenuClick} onSearchSubmit={onSearchSubmit} />
      </header>
      <div>{renderViews()}</div>
    </StyledApp>
  );
}

const YoutubeAppWrapper = () => (
  <ContextProvider>
    <YoutubeApp />
  </ContextProvider>
);

export default YoutubeAppWrapper;
