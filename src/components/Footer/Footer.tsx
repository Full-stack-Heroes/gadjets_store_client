import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../assets/images/Logo.svg';
import Up from '../../assets/icons/Arrow.svg';
import { scrollToTop } from '../../utils/helpers';

export const Footer: FC = () => {
  const [isScrollPresent, setIsScrollPresent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollPresent(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__logo}>
          <Link to="/">
            <img src={logo} alt="nice gadgets" />
          </Link>
        </div>

        <div className={styles.footer__container__links}>
          <Link
            to="https://github.com/fe-apr23-full-stack-heroes"
            className={styles.link}>
            github
          </Link>
          <Link to="/contacts" className={styles.link}>
            contacts
          </Link>
          <Link
            to="https://creativecommons.org/licenses/by/4.0/"
            className={styles.link}>
            rights
          </Link>
        </div>

        <div
          className={`${styles.footer__container__up} ${
            !isScrollPresent ? styles.disabled : ''
          }`}
          onClick={() => scrollToTop()}>
          <span className={styles.up__text}>Back to top</span>
          <button className={styles.button__up}>
            <img src={Up} alt="go up button" />
          </button>
        </div>
      </div>
    </footer>
  );
};
