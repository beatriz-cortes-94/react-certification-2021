import React from 'react';
// import React, { useState } from 'react';
import Nav from '../YoutubeNav/YoutubeNav.component';
// import Home from '../../pages/YoutubeHome/YoutubeHome.page';
// import VideoDetails from '../../pages/YoutubeVideoDetails/YoutubeVideoDetails.page';

function YoutubeApp() {
  // const [isVideoDetailsView, setIsVideoDetailsView] = useState(false);
  return (
    <div>
      <header>
        <Nav />
      </header>
      {/* <div>{!isVideoDetailsView ? <Home /> : <VideoDetails />}</div> */}
    </div>
  );
}

export default YoutubeApp;
