import React from 'react';
import Grid from '../../components/YoutubeGrid/YoutubeGrid.component';
import { StyledTitle } from './YoutubeHome.styles';

function Home() {
  return (
    <div>
      <section>
        <StyledTitle>WELCOME TO WIZETUBE</StyledTitle>
        <Grid />
      </section>
    </div>
  );
}

export default Home;
