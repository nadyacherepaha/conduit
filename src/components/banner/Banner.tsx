import React from 'react';
import style from './banner.module.scss';

const Banner = () => {
  return (
    <section className={style.banner}>
      <h1 className={style.title}>Conduit</h1>
      <p className={style.description}>A place to share your knowledge.</p>
    </section>
  );
};

export default Banner;
