import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import style from './tags.module.scss';

const PopularTags: FC = () => {
  return (
    <div className={classNames(style.container, style.tags)}>
      <h3 className={style.title}>Popular Tags</h3>
      <Link className={classNames(style.tagItem, style.bgColor)} to="/">
        welcome
      </Link>
      <Link className={classNames(style.tagItem, style.bgColor)} to="/">
        implementations
      </Link>
      <Link className={classNames(style.tagItem, style.bgColor)} to="/">
        codebaseShow
      </Link>
      <Link className={classNames(style.tagItem, style.bgColor)} to="/">
        introduction
      </Link>
    </div>
  );
};

export default PopularTags;
