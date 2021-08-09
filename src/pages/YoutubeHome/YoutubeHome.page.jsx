import React from 'react';
import VideoGrid from '../../components/YoutubeVideoGrid/YoutubeVideoGrid.component';
import { StyledTitle } from './YoutubeHome.styles';

function Home(props) {
  const { videoList, onVideoClick } = props;
  return (
    <div>
      <section>
        <StyledTitle>WELCOME TO WIZETUBE</StyledTitle>
        <VideoGrid videoList={videoList} onVideoClick={onVideoClick} />
      </section>
    </div>
  );
}

export default Home;
