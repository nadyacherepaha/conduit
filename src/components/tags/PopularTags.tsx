import React, { FC } from 'react';
import classNames from 'classnames';
import style from './tags.module.scss';

const tagList: string[] = [
  'welcome',
  'implementations',
  'codebaseShow',
  'introduction',
];

const onFilterTags = () => {};

const PopularTags: FC = () => {
  return (
    <div className={classNames(style.container, style.tags)}>
      <h3 className={style.title}>Popular Tags</h3>
      {tagList.map((title) => (
        <button
          key={title}
          className={classNames(style.tagItem, style.bgColor)}
          onClick={onFilterTags}>
          {title}
        </button>
      ))}
    </div>
  );
};

export default PopularTags;
