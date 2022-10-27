import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from './Map';

describe('Map', function () {
  it('Should render a div with map-container class', () => {
    render(<Map />);
    const mapElement = screen.getByRole('map-container');
    expect(mapElement).toBeInTheDocument();
  })
});
