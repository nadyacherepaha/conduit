import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/components/footer/Footer';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />, { wrapper: HashRouter });
  });
  it('should have a link', () => {
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
  it('should have an icon', () => {
    const icon = screen.getByTestId('footer-icon');

    expect(icon).toBeInTheDocument();
  });
});
