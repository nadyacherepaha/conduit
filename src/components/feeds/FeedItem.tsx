import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import AvatarGroup from '../avatar-group/AvatarGroup';
import style from './feedItem.module.scss';
import tagStyle from '../tags/tags.module.scss';

const FeedItem: FC = () => {
  return (
    <div className={style.feedItem}>
      <div className={style.flex}>
        <span>
          <AvatarGroup />
        </span>
        <button className={style.btnLike} type="button">
          <FontAwesomeIcon data-testid="likes-icon" icon={faHeart} />
          <span>1615</span>
        </button>
      </div>
      <div className={style.flex}>
        <Link to="/" className={style.info}>
          <h2 className={style.title}>Create a new implementation</h2>
          <p data-testid="description" className={style.desc}>
            join the community by creating a new implementation
          </p>
          <small>Read more...</small>
        </Link>
        <div className={tagStyle.tags}>
          <Link className={tagStyle.tagItem} to="/">
            implementations
          </Link>
          <Link className={tagStyle.tagItem} to="/">
            implementations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
