import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeedItem from '../src/components/feeds/FeedItem';
import { HashRouter } from 'react-router-dom';
import { FeedItemProps } from '../src/components/feeds/FeedItem';

describe('FeedItem component', () => {
  const props: FeedItemProps = {
    favorited: true,
    favoritesCount: 1,
    createdAt: '',
    author: {
      username: '',
      image: '',
    },
    description: '',
    title: '',
    tagList: [],
    slug: '',
  };

  beforeEach(() => {
    render(
      <FeedItem
        favorited={props.favorited}
        favoritesCount={props.favoritesCount}
        createdAt={props.createdAt}
        author={props.author}
        description={props.description}
        title={props.title}
        tagList={props.tagList}
        slug={props.slug}
      />,
      { wrapper: HashRouter }
    );
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
