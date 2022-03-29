import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { routesForAuthUser, routesForGuest } from '../../constants/navbar';
import style from './navbar.module.scss';

const Navbar: FC = () => {
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const onToggleAuthFlag: () => void = () =>
    setIsAuthUser((prevStateAuth) => !prevStateAuth);

  return (
    <>
      <button type="button" onClick={onToggleAuthFlag}>
        Toggle the authorization flag
      </button>
      <nav data-testid="nav-menu">
        <ul className={style.list}>
          {isAuthUser ? (
            <>
              {routesForAuthUser.map(({ path, title, icon }) => (
                <Link className={style.item} key={path} to={path}>
                  <FontAwesomeIcon icon={icon} />
                  {title}
                </Link>
              ))}
            </>
          ) : (
            <>
              {routesForGuest.map(({ path, title }) => (
                <Link className={style.item} key={path} to={path}>
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
