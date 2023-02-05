import React, { FC, Fragment, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import FeedItem from './FeedItem';
import style from './feedList.module.scss';
import { Article } from '../../types/article';
import { useAppSelector } from '../../hooks/redux';
import getFilteredTags from '../../redux/selectors/filterTagsSelector';
import ErrorPopUp from '../common/error-pop-up/ErrorPopUp';
import { getArticles } from '../../services/api';

const FeedList: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [limit,] = useState<number>(10);
  const [offset,] = useState<number>(0);

  const { entities, tag } = useAppSelector(getFilteredTags);

  const filteredArticles = entities.articles;

  const { data, isError } = useQuery(
    ['articles', tag, filteredArticles, limit, offset],
    () => (!tag ? getArticles(limit, offset) : null),
    {
      useErrorBoundary: (error: any) => error.response?.status >= 400,
    }
  );

  useEffect(() => {
    if (data) {
      filteredArticles ? setArticles(entities.articles) : setArticles(data?.data?.articles ?? []);
    }
  }, [data]);

  return (
    <div className={style.feedList}>
      {isError && <ErrorPopUp/>}
      {articles?.map(
        (
          {
            title,
            author,
            description,
            createdAt,
            tagList,
            favoritesCount,
            favorited,
          },
          index
        ) => (
          <Fragment key={index}>
            <FeedItem
              favorited={favorited}
              favoritesCount={favoritesCount}
              createdAt={createdAt}
              author={author}
              description={description}
              title={title}
              tagList={tagList}
            />
          </Fragment>
        )
      )}
    </div>
  );
};

export default FeedList;
