import React from 'react';
import {
  StyledVideosList,
  RelatedVideosContainer,
  StyledVideoImg,
  StyledVideoTitle,
} from './YoutubeRelatedVideos.styles';

function RelatedVideos(props) {
  const { relatedVideos, currentVideoId, onVideoClick } = props;
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
          onClick={() => {
            onVideoClick(video);
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
