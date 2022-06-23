import React from 'react';
import classNames from 'classnames';
import style from './filterTabs.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import getFilteredTags from '../../redux/selectors/filterTagsSelector';
import { filterTagsSlice } from '../../redux/reducers/filterTagsReducer';

const FilterTabs = () => {
  const dispatch = useAppDispatch();
  const { tag } = useAppSelector(getFilteredTags);
  const { deleteSelectedTag } = filterTagsSlice.actions;

  const onResetFilter = () => {
    dispatch(deleteSelectedTag());
  };

  console.log(tag);

  return (
    <div className={style.feedToggle}>
      <button
        className={classNames(style.toggleButton, !tag && style.active)}
        onClick={onResetFilter}>
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
