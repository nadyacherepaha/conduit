import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <NavLink className="header__logo" to="/">
        <img data-testid="header-logo" src="/" alt="" />
        icon
      </NavLink>
      <Navbar />
    </>
  );
};

export default Header;
