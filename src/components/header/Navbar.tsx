import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routesForAuthUser, routesForGuest } from '../../constants/navbar';

const Navbar: FC = () => {
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const onToggleAuthFlag: () => void = () =>
    setIsAuthUser((prevStateAuth) => !prevStateAuth);

  return (
    <>
      <button onClick={onToggleAuthFlag}>Toggle the authorization flag</button>
      <nav data-testid="nav-menu">
        <ul>
          {isAuthUser ? (
            <div>
              {routesForAuthUser.map(({ path, title, icon }) => (
                <NavLink key={path} to={path}>
                  <img src={icon} alt="" />
                  {title}
                </NavLink>
              ))}
            </div>
          ) : (
            <>
              {routesForGuest.map(({ path, title, icon }) => (
                <NavLink key={path} to={path}>
                  <img src={icon} alt="" />
                  {title}
                </NavLink>
              ))}
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
