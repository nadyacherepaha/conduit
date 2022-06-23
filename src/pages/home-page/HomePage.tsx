import React, { FC } from 'react';
import Banner from '../../components/banner/Banner';
import style from '../../styles/main.module.scss';
import FeedList from '../../components/feeds/FeedList';
import PopularTags from '../../components/tags/PopularTags';
import FilterTabs from '../../components/filter-tabs/FilterTabs';

const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <main className={style.feedContainer}>
        <FilterTabs />
        <FeedList />
        <PopularTags />
      </main>
    </>
  );
};

export default HomePage;
