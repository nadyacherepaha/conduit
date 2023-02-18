import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import style from './tags.module.scss';
import BASE_URL from '../../utils/baseUrl';
import { getData } from '../../services/getData';
import { useAppDispatch } from '../../hooks/redux';
import { addSelectedTag } from '../../redux/reducers/filterTagsReducer';
import ErrorPopUp from '../common/error-pop-up/ErrorPopUp';

const PopularTags: FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tab, setTab] = useState<string>('');
  const [error, setError] = useState<any>();

  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      const result = await getData(`${BASE_URL}/tags`);
      setTags(result.tags);
    } catch (e: any) {
      setError(e);
      console.error('message', e.message);
    }
  };

  useEffect(() => {
    fetchData();

    const onFilterTags = async () => {
      try {
        dispatch(addSelectedTag(tab));
      } catch (e: any) {
        setError(e);
        console.log(e);
      }
    };

    tab && onFilterTags();
  }, [tab]);

  return (
    <div className={classNames(style.container, style.tags)}>
      <h3 className={style.title}>Popular Tags</h3>
      {error && <ErrorPopUp />}
      {tags.map((tag, key) => (
        <button
          key={key}
          className={classNames(style.tagItem, style.bgColor)}
          onClick={() => setTab(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default PopularTags;
