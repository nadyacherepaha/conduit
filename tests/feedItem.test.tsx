import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeedItem from '../src/components/feeds/FeedItem';
import { HashRouter } from 'react-router-dom';

describe('FeedItem component', () => {
  beforeEach(() => {
    render(<FeedItem />, { wrapper: HashRouter });
  });

  it('should have a title', () => {
    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
  });
  it('should have a description', () => {
    const description = screen.getByTestId('description');

    expect(description).toBeInTheDocument();
  });
  it('should have a likes button', () => {
    const likesButton = screen.getByRole('button');
    const likesIcon = screen.getByTestId('likes-icon');

    expect(likesButton).toBeInTheDocument();
    expect(likesButton).toBeEnabled();
    expect(likesIcon).toBeInTheDocument();
  });
});