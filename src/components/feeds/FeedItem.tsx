import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import AvatarGroup from '../avatar-group/AvatarGroup';
import style from './feedItem.module.scss';
import tagStyle from '../tags/tags.module.scss';
import { Article } from '../../types/article';

export interface FeedItemProps extends Article {}

const FeedItem: FC<FeedItemProps> = (props) => {
  const { favoritesCount, createdAt, author, description, title, tagList } =
    props;
  const readMoreText = 'Read more...';

  return (
    <div className={style.feedItem}>
      <div className={style.flex}>
        <span>
          <AvatarGroup
            username={author.username}
            image={author.image}
            createdAt={createdAt}
          />
        </span>
        <button className={style.btnLike} type="button">
          <FontAwesomeIcon data-testid="likes-icon" icon={faHeart} />
          <span>{favoritesCount}</span>
        </button>
      </div>
      <div className={style.flex}>
        <Link to="/" className={style.info}>
          <h2 className={style.title}>{title}</h2>
          <p data-testid="description" className={style.desc}>
            {description}
          </p>
          <small>{readMoreText}</small>
        </Link>
        <div className={tagStyle.tags}>
          {tagList.map((key, tagList) => {
            <Link key={key} className={tagStyle.tagItem} to="/">
              {tagList}
            </Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
