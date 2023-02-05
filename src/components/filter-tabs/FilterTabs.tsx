import React from 'react';
import classNames from 'classnames';
import style from './filterTabs.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import getFilteredTags from '../../redux/selectors/filterTagsSelector';
import { deleteSelectedTag } from '../../redux/reducers/filterTagsReducer';

const FilterTabs = () => {
  const dispatch = useAppDispatch();
  const { tag } = useAppSelector(getFilteredTags);

  const onResetFilter = () => {
    dispatch(deleteSelectedTag());
  };

  return (
    <div className={style.feedToggle}>
      <button
        className={classNames(style.toggleButton, !tag && style.active)}
        onClick={onResetFilter}
      >
        Global Feed
      </button>
      {tag && (
        <button className={classNames(style.toggleButton, style.active)}>
          {tag}
        </button>
      )}
    </div>
  );
};

export default FilterTabs;
