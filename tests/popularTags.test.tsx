import React from 'react';
import 'regenerator-runtime/runtime';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopularTags from '../src/components/tags/PopularTags';
import { HashRouter } from 'react-router-dom';

const tagsData = ['welcome', 'implementations', 'codebaseShow', 'introduction'];

describe('PopularTags component', () => {
  let getTagsData = jest.fn();

  beforeEach(() => {
    render(<PopularTags />, { wrapper: HashRouter });

    getTagsData.mockImplementationOnce(() => {
      return Promise.resolve([...tagsData]);
    });
  });

  it('should have a title', () => {
    const title = screen.getByRole('heading');
    const titleText = /Popular Tags/i;

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(titleText);
  });
  it('should have buttons', async () => {
    const tagLinks = await getTagsData();

    expect(tagLinks).not.toBeNull();
    expect(tagLinks).not.toBeUndefined();
    expect(tagLinks).toBeInstanceOf(Array);
  });
});
