import React, { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { routesForAuthUser, routesForGuest } from '../../constants/navbar';
import style from './navbar.module.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signInUser } from '../../redux/reducers/authReducer';
import storage from '../../utils/storage';

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { user } = useAppSelector((state) => state.user);
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  if (Boolean(storage.getToken())) {
    dispatch(signInUser);
  }

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
      <nav data-testid="nav-menu">
        <div
          role="button"
          tabIndex={0}
          className={classNames(
            openBurger ? style.burgerMenuIsOpen : style.burgerMenuIsClose
          )}
          onClick={() => setOpenBurger(!openBurger)}
        >
          <span />
          <span />
          <span />
        </div>
        <ul
          className={classNames(
            style.list,
            openBurger ? style.openListBurger : style.closeListBurger
          )}
        >
          {user ? (
            <>
              {routesForAuthUser.map(({ path, title, icon }) => (
                <Link
                  className={style.item}
                  style={{
                    color:
                      pathname === path
                        ? 'rgba(0, 0, 0, 0.8)'
                        : 'rgba(0, 0, 0, 0.3)',
                  }}
                  key={path}
                  to={path}
                  onClick={onCloseBurger}
                >
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
                  style={{
                    color:
                      pathname === path
                        ? 'rgba(0, 0, 0, 0.8)'
                        : 'rgba(0, 0, 0, 0.3)',
                  }}
                  key={path}
                  to={path}
                  onClick={onCloseBurger}
                >
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
