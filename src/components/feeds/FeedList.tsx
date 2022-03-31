import React, { FC } from 'react';
import FeedItem from './FeedItem';
import style from './feedList.module.scss';

const FeedList: FC = () => {
  return (
    <div className={style.feedList}>
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
};

export default FeedList;
