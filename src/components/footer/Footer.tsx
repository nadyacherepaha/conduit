import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt';
import style from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a
        className={style.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/nadyacherepaha/conduit"
      >
        <FontAwesomeIcon data-testid="footer-icon" icon={faGithubAlt} />
        Fork on GitHub
      </a>
    </footer>
  );
};

export default Footer;
