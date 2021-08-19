import React from 'react';
import { useAppContext } from '../../context/ContextProvider';
import {
  StyledVideosList,
  RelatedVideosContainer,
  StyledVideoImg,
  StyledVideoTitle,
} from './YoutubeRelatedVideos.styles';

function RelatedVideos(props) {
  const { updateClickedVideo } = useAppContext();
  const { relatedVideos, currentVideoId } = props;
  const videoCard = relatedVideos.items.slice(1).map((video) => {
    const { thumbnails, title } = video.snippet;
    const { videoId } = video.id;
    if (currentVideoId.videoId === videoId) {
      return null;
    }

    return (
      <RelatedVideosContainer key={title}>
        <StyledVideoImg
          src={thumbnails.high.url}
          alt="img"
          href="/videoDetails"
          onClick={() => {
            updateClickedVideo(video);
          }}
        />
        <div>
          <StyledVideoTitle>{title}</StyledVideoTitle>
        </div>
      </RelatedVideosContainer>
    );
  });

  return <StyledVideosList>{videoCard}</StyledVideosList>;
}

export default RelatedVideos;
