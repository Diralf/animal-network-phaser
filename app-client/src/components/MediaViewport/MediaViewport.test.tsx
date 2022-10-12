import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MediaViewport from './MediaViewport';

describe('<MediaViewport />', () => {
  test('it should mount', () => {
    render(<MediaViewport />);
    
    const mediaViewport = screen.getByTestId('MediaViewport');

    expect(mediaViewport).toBeInTheDocument();
  });
});