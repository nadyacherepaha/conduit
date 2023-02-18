import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { loginPath } from '../../constants/navbar';
import { useAppSelector } from '../../hooks/redux';
import { postFavorite, deleteFavorite } from '../../services/api';
import AvatarGroup from '../avatar-group/AvatarGroup';
import style from './feedItem.module.scss';
import tagStyle from '../tags/tags.module.scss';
import { Article } from '../../types/article';

export interface FeedItemProps extends Article {}

const FeedItem: FC<FeedItemProps> = (props) => {
  const { favoritesCount, favorited, createdAt, author, description, title, tagList, slug } =
    props;

  const [favorite, setFavorite] = useState(favorited);
  const [favCount, setFavCount] = useState(favoritesCount);

  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const readMoreText = 'Read more...';
  const dateOfCreation = new Date(createdAt);

  const handleClickLike = async () => {
    if (user) {

      if (favorite) {
        const res = await deleteFavorite(slug);

        if (res) {
          setFavorite(res.data?.article?.favorited);
          setFavCount(res.data?.article?.favoritesCount);
        }
      } else {
        const res = await postFavorite(slug);

        if (res) {
          setFavorite(res.data?.article?.favorited);
          setFavCount(res.data?.article?.favoritesCount);
        }
      }

    } else {
      navigate(loginPath);
    }

  };

  return (
    <div className={style.feedItem}>
      <div className={style.flex}>
        <span>
          <AvatarGroup
            username={author.username}
            image={author.image}
            createdAt={dateOfCreation.toDateString()}
          />
        </span>
        <button
          className={classNames(style.btnLike, favorite ? style.greenButton : style.transparentButton)}
          type="button"
          onClick={handleClickLike}
        >
          <FontAwesomeIcon data-testid="likes-icon" icon={faHeart} />
          <span>{favCount}</span>
        </button>
      </div>
      <div className={classNames(style.flex, style.mobileBlock)}>
        <Link to="/" className={style.info}>
          <h2 className={style.title}>{title}</h2>
          <p data-testid="description" className={style.desc}>
            {description}
          </p>
          <small className={style.readMore}>{readMoreText}</small>
        </Link>
        <div className={classNames(style.tags, tagStyle.tags)}>
          {tagList.map((tag, key) => (
            <Link key={key} className={tagStyle.tagItem} to="/">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
