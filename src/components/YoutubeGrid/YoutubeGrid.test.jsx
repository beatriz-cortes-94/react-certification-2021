import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './YoutubeGrid.component';

describe('Grid', () => {
  test('must display 24 elements', () => {
    render(<Grid />);
    const totalElements = screen.getAllByRole('heading');
    expect(totalElements).toHaveLength(24);
  });
});
