import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Nav from '../YoutubeNav/YoutubeNav.component';
import Home from '../../pages/YoutubeHome/YoutubeHome.page';
import Favorites from '../../pages/YoutubeFavorites/YoutubeFavorites.page';
import VideoDetails from '../../pages/YoutubeVideoDetails/YoutubeVideoDetails.page';
import useYoutubeApi from '../../api/useYoutubeApi';
import ContextProvider, { useAppContext } from '../../context/ContextProvider';
import { StyledApp } from './App.styles';

function YoutubeApp() {
  const { results, theme } = useAppContext();
  const { error, loading, fetchData } = useYoutubeApi();

  const renderHome = () => {
    if (error !== '' && loading === false) {
      return <h1>Ups! Something went wrong</h1>;
    }
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (results) {
      return <Home videoList={results} />;
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledApp isLightTheme={theme}>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/">
          {renderHome()}
        </Route>
        <Route exact path="/videoDetails">
          <VideoDetails />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </StyledApp>
  );
}

const YoutubeAppWrapper = () => (
  <HashRouter>
    <ContextProvider>
      <YoutubeApp />
    </ContextProvider>
  </HashRouter>
);

export default YoutubeAppWrapper;
