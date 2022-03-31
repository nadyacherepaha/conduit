import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopularTags from '../src/components/tags/PopularTags';
import { HashRouter } from 'react-router-dom';

describe('PopularTags component', () => {
  beforeEach(() => {
    render(<PopularTags />, { wrapper: HashRouter });
  });

  it('should have a title', () => {
    const title = screen.getByRole('heading');
    const titleText = /Popular Tags/i;

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(titleText);
  });
  it('should have links', () => {
    const tagLinks = screen.getAllByRole('link');

    expect(tagLinks).not.toBeNull();
    expect(tagLinks).not.toBeUndefined();
  });
});
