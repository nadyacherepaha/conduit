import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import style from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link className={style.link} to="/">
        <FontAwesomeIcon data-testid="footer-icon" icon={faGithubAlt} />
        Fork on GitHub
      </Link>
    </footer>
  );
};

export default Footer;
