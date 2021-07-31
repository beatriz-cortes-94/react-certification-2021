import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './YoutubeHome.page';

describe('home', () => {
  test('must display title', () => {
    render(<Home />);
    const titleElement = screen.queryByText(/home/i);
    expect(titleElement).toBeInTheDocument();
  });
});
