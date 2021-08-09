import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPlayer from './YoutubeVideoPlayer.component';
import data from '../../mock/youtube-videos-mock.json';

describe('VideoPlayer', () => {
  test('must display player', () => {
    const videoInfo = data.items[1];
    render(
      <VideoPlayer
        id={videoInfo.id}
        title={videoInfo.snippet.title}
        description={videoInfo.snippet.description}
      />
    );
    const totalElements = screen.getByTestId('video-player');
    expect(totalElements).toBeInTheDocument();
  });
  test('must display title', () => {
    const videoInfo = data.items[1];
    const videoTitle = 'Video Tour | Welcome to Wizeline Guadalajara';
    render(
      <VideoPlayer
        id={videoInfo.id}
        title={videoInfo.snippet.title}
        description={videoInfo.snippet.description}
      />
    );
    const title = screen.getByText(videoTitle);
    expect(title).toBeInTheDocument();
  });
  test('must display title', () => {
    const videoInfo = data.items[1];
    const videoDetails =
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...';
    render(
      <VideoPlayer
        id={videoInfo.id}
        title={videoInfo.snippet.title}
        description={videoInfo.snippet.description}
      />
    );
    const details = screen.getByText(videoDetails);
    expect(details).toBeInTheDocument();
  });
});
