import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import style from './tags.module.scss';
import BASE_URL from '../../utils/baseUrl';

const onFilterTags = () => {};

const PopularTags: FC = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tags`);
        const result = await response.json();
        setTags(result.tags);
      } catch (e) {
        const errorMessage = 'Something went wrong';
        console.error(errorMessage);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classNames(style.container, style.tags)}>
      <h3 className={style.title}>Popular Tags</h3>
      {tags.map((tag, key) => (
        <button
          key={key}
          className={classNames(style.tagItem, style.bgColor)}
          onClick={onFilterTags}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default PopularTags;
