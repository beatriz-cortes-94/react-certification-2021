import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './YoutubeCard.component';
import data from '../../mock/youtube-videos-mock.json';

const title = 'Video Tour | Welcome to Wizeline Guadalajara';
const description =
  'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...';

describe('card', () => {
  test('must display title', () => {
    render(<Card videoInfo={data.items[1]} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
  test('must display video information', () => {
    render(<Card videoInfo={data.items[1]} />);
    const infoElement = screen.getByText(description);
    expect(infoElement).toBeInTheDocument();
  });
});
