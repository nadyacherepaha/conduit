import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AvatarGroup from '../src/components/avatar-group/AvatarGroup';
import { HashRouter } from 'react-router-dom';

describe('AvatarGroup component', () => {
  beforeEach(() => {
    render(<AvatarGroup />, { wrapper: HashRouter });
  });

  it('should have an avatar', () => {
    const avatar = screen.getByRole('img');

    expect(avatar).toBeInTheDocument();
  });
  it('should have a username', () => {
    const userName = screen.getByTestId('username');

    expect(userName).toBeInTheDocument();
  });
  it('should have a publication date', () => {
    const publicationDate = screen.getByTestId('date');

    expect(publicationDate).toBeInTheDocument();
  });
});