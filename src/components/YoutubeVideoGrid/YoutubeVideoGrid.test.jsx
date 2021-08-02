import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoGrid from './YoutubeVideoGrid.component';
import data from '../../mock/youtube-videos-mock.json';

describe('Grid', () => {
  test('must display 24 elements', () => {
    render(<VideoGrid videoList={data} />);
    const totalElements = screen.getAllByRole('heading');
    expect(totalElements).toHaveLength(24);
  });
});
