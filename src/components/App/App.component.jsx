import React, { useState, useEffect } from 'react';
import Nav from '../YoutubeNav/YoutubeNav.component';
import Home from '../../pages/YoutubeHome/YoutubeHome.page';
import VideoDetails from '../../pages/YoutubeVideoDetails/YoutubeVideoDetails.page';
import useYoutubeApi from '../../api/useYoutubeApi';

function YoutubeApp() {
  const { results, fetchData } = useYoutubeApi();
  const [isHomeView, setIsHomeView] = useState(true);
  const [videoInfo, setVideoInfo] = useState(null);

  const handleMenuClick = () => {
    if (!isHomeView) {
      setIsHomeView(true);
    }
  };

  const onSearchSubmit = (query) => {
    fetchData(query);
  };

  const onVideoClick = (clickedVideoId) => {
    window.scrollTo(0, 0);
    setIsHomeView(false);
    setVideoInfo(clickedVideoId);
  };

  const renderViews = () => {
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
    fetchData('wizeline');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsHomeView(true);
  }, [results]);

  return (
    <div>
      <header>
        <Nav handleMenuClick={handleMenuClick} onSearchSubmit={onSearchSubmit} />
      </header>
      <div>{renderViews()}</div>
    </div>
  );
}

export default YoutubeApp;
