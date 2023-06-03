import React, { FC } from 'react';
import Banner from '../../components/Banner';
import style from '../../styles/main.module.scss';
import FeedList from '../../components/Feeds/FeedList';
import PopularTags from '../../components/Tags/PopularTags';
import FilterTabs from '../../components/FilterTabs';

const Home: FC = () => (
    <>
        <Banner />
        <main className={style.feedContainer}>
            <FilterTabs />
            <FeedList />
            <PopularTags />
        </main>
    </>
);

export default Home;
