import React, { FC } from 'react';
import Banner from '../../components/banner/Banner';
import style from '../../styles/main.module.scss';

const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <div className={style.container}>
        <h1>Test page</h1>
      </div>
    </>
  );
};

export default HomePage;
