import React, { FC, Fragment } from 'react';
import FeedItem from './FeedItem';
import style from './feedList.module.scss';
import { Article } from '../../types/article';

const articles: Article[] = [
  {
    slug: 'Create-a-new-implementation-1',
    title: 'Create a new implementation',
    description: 'join the community by creating a new implementation',
    body: 'Share your knowledge and enpower the community by creating a new implementation',
    tagList: ['implementations'],
    createdAt: '2021-11-24T12:11:08.212Z',
    updatedAt: '2021-11-24T12:11:08.212Z',
    favorited: false,
    favoritesCount: 1736,
    author: {
      username: 'Gerome',
      bio: null,
      image: 'https://api.realworld.io/images/demo-avatar.png',
      following: false,
    },
  },
  {
    slug: 'Explore-implementations-1',
    title: 'Explore implementations',
    description:
      'discover the implementations created by the RealWorld community',
    body: 'Over 100 implementations have been created using various languages, libraries, and frameworks.\n\nExplore them on CodebaseShow.',
    tagList: ['codebaseShow', 'implementations'],
    createdAt: '2021-11-24T12:11:07.952Z',
    updatedAt: '2021-11-24T12:11:07.952Z',
    favorited: false,
    favoritesCount: 1081,
    author: {
      username: 'Gerome',
      bio: null,
      image: 'https://api.realworld.io/images/demo-avatar.png',
      following: false,
    },
  },
];

const FeedList: FC = () => {
  return (
    <div className={style.feedList}>
      {articles.map((article, index) => (
        <Fragment key={index}>
          <FeedItem {...article} />
        </Fragment>
      ))}
    </div>
  );
};

export default FeedList;
