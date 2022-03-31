import React, { FC } from 'react';
import Banner from '../../components/banner/Banner';
import style from '../../styles/main.module.scss';
import FeedList from '../../components/feeds/FeedList';
import PopularTags from '../../components/tags/PopularTags';

const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <main className={style.feedContainer}>
        <FeedList />
        <PopularTags />
      </main>
    </>
  );
};

export default HomePage;
