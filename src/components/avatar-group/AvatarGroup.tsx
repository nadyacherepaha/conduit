import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import style from './avatarGroup.module.scss';
import { Profile } from '../../types/profile';

export interface AvatarGroupProps extends Profile {
  createdAt: string;
}

const AvatarGroup: FC<AvatarGroupProps> = (props) => {
  const { createdAt, username, image } = props;

  return (
    <>
      <Link to="/">
        <img className={style.avatar} src={image} alt="Avatar" />
      </Link>
      <div className={style.info}>
        <Link data-testid="username" className={style.nickname} to="/">
          {username}
        </Link>
        <br />
        <time data-testid="date" className={style.date}>
          {moment(createdAt).format('LL')}
        </time>
      </div>
    </>
  );
};

export default AvatarGroup;
