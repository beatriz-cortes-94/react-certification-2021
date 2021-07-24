import React from 'react';
import Nav from '../../components/YoutubeNav/YoutubeNav.component';
import Grid from '../../components/YoutubeGrid/YoutubeGrid.component';
import { StyledTitle } from './YoutubeHome.styles';

function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <section>
        <StyledTitle>WELCOME TO WIZETUBE</StyledTitle>
        <Grid />
      </section>
    </div>
  );
}

export default Home;
