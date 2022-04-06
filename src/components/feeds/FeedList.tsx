import React, { FC, Fragment, useEffect, useState } from 'react';
import FeedItem from './FeedItem';
import style from './feedList.module.scss';
import BASE_URL from '../../utils/baseUrl';
import { Article } from '../../types/article';

const FeedList: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}articles`);
        const result = await response.json();
        setArticles(result.articles);
      } catch (e) {
        const errorMessage = 'Something went wrong';
        console.error(errorMessage);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={style.feedList}>
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
