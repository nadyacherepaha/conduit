import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Link className={style.logo} to="/">
        <img
          className={style.icon}
          data-testid="header-logo"
          src="./assets/favicon.svg"
          alt="header-logo"
        />
        Conduit
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
