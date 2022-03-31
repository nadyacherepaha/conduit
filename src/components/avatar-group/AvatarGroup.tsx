import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './avatarGroup.module.scss';

const AvatarGroup: FC = () => {
  return (
    <>
      <Link to="/">
        <img
          className={style.avatar}
          src="https://api.realworld.io/images/demo-avatar.png"
          alt="Avatar"
        />
      </Link>
      <div className={style.info}>
        <Link data-testid="username" className={style.nickname} to="/">
          Gerome
        </Link>
        <br />
        <time data-testid="date" className={style.date}>
          November 24, 2021
        </time>
      </div>
    </>
  );
};

export default AvatarGroup;
