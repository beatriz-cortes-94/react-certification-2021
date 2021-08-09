import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedVideos from './YoutubeRelatedVideos.component';
import data from '../../mock/youtube-videos-mock.json';

describe('Related Videos', () => {
  test('must display 23 elements', () => {
    const currentVideoId = data.items[1].id;
    render(<RelatedVideos relatedVideos={data} currentVideoId={currentVideoId} />);
    const totalElements = screen.getAllByRole('heading');
    expect(totalElements).toHaveLength(23);
  });
});
