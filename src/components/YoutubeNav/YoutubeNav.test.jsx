import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './YoutubeNav.component';

describe('Nav elements', () => {
  test('must display navbar', () => {
    render(<Nav />);
    const icons = screen.getByRole('navigation');
    expect(icons).toBeInTheDocument();
  });
  test('must display hamburger menu', () => {
    render(<Nav />);
    const hamburgerMenu = screen.queryAllByRole('button');
    expect(hamburgerMenu).toHaveLength(1);
  });
  test('must display search bar', () => {
    render(<Nav />);
    const searchBar = screen.getByPlaceholderText('Search...');
    expect(searchBar).toBeInTheDocument();
  });
});
