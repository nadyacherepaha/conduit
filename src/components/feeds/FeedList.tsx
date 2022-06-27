import React, { FC, Fragment, useEffect, useState } from 'react';
import FeedItem from './FeedItem';
import style from './feedList.module.scss';
import BASE_URL from '../../utils/baseUrl';
import { Article } from '../../types/article';
import { useAppSelector } from '../../hooks/redux';
import getFilteredTags from '../../redux/selectors/filterTagsSelector';
import ErrorPopUp from '../common/error-pop-up/ErrorPopUp';

const FeedList: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<any>();

  const { entities, tag } = useAppSelector(getFilteredTags);

  const filteredArticles = entities.articles;

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/articles`);
      const result = await response.json();
      setArticles(result.articles);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
  };

  useEffect(() => {
    filteredArticles ? setArticles(entities.articles) : fetchData();
    !tag && fetchData();
  }, [filteredArticles, tag]);

  return (
    <div className={style.feedList}>
      {error && <ErrorPopUp />}
      {articles.map(
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
