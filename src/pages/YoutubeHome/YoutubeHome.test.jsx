import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './YoutubeHome.page';
import data from '../../mock/youtube-videos-mock.json';

describe('home', () => {
  test('must display title', () => {
    render(<Home videoList={data} />);
    const titleElement = screen.queryByText(/home/i);
    expect(titleElement).toBeInTheDocument();
  });
});
