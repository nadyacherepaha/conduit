import React, { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { routesForAuthUser, routesForGuest } from '../../constants/navbar';
import style from './navbar.module.scss';
import classNames from 'classnames';

const Navbar: FC = () => {
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const onToggleAuthFlag: () => void = () =>
    setIsAuthUser((prevStateAuth) => !prevStateAuth);
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  const onCloseBurger = () => {
    openBurger && setOpenBurger(false);
  };

  useEffect(() => {
    const bodyTagName = document.querySelector('body')?.classList;

    openBurger
      ? bodyTagName?.add(`${style.hiddenContent}`)
      : bodyTagName?.remove(`${style.hiddenContent}`);
  }, [openBurger]);

  return (
    <>
      <button type="button" onClick={onToggleAuthFlag}>
        Toggle the authorization flag
      </button>
      <nav data-testid="nav-menu">
        <div
          role="button"
          tabIndex={0}
          className={classNames(
            openBurger ? style.burgerMenuIsOpen : style.burgerMenuIsClose
          )}
          onClick={() => setOpenBurger(!openBurger)}>
          <span />
          <span />
          <span />
        </div>
        <ul
          className={classNames(
            style.list,
            openBurger ? style.openListBurger : style.closeListBurger
          )}>
          {isAuthUser ? (
            <>
              {routesForAuthUser.map(({ path, title, icon }) => (
                <Link
                  className={style.item}
                  key={path}
                  to={path}
                  onClick={onCloseBurger}>
                  <FontAwesomeIcon icon={icon} />
                  {title}
                </Link>
              ))}
            </>
          ) : (
            <>
              {routesForGuest.map(({ path, title }) => (
                <Link
                  className={style.item}
                  key={path}
                  to={path}
                  onClick={onCloseBurger}>
                  {title}
                </Link>
              ))}
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
