import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/components/header/Header';
import { HashRouter } from 'react-router-dom';

describe('Header component', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: HashRouter });
  });
  it('should have a logo', () => {
    const logo = screen.getByTestId('header-logo');

    expect(logo).toBeInTheDocument();
  });
  it('should have a navbar', () => {
    const navbar = screen.getByTestId('nav-menu');

    expect(navbar).toBeInTheDocument();
  });
});
