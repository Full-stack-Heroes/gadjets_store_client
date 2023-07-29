import { FC } from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/icons/Logo.svg'
import Up from '../../assets/icons/Arrow.svg'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.footer__container}>
        <div className={styles.footer__container__logo}>
          <img src={logo} alt="nice gadgets" />
        </div>

        <div className={styles.footer__container__links}>
          <a href="https://github.com/fe-apr23-full-stack-heroes" className={styles.link}>
            github
          </a>
          <a href="#contacts" className={styles.link}>
            contacts
          </a>
          <a href="#rights" className={styles.link}>
            rights
          </a>
        </div>

        <div className={styles.footer__container__up}>
          <span className={styles.up__text}>Back to top</span>
          <button className={styles.button__up}>
            <img src={Up} alt="go up button" />
          </button>
        </div>
       </div>
    </footer>
  );
};
