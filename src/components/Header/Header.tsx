import { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.svg';
import like from '../../assets/icons/Heart.svg';
import cart from '../../assets/icons/Cart.svg';
import { NavigationLink } from '../NavigationLink';
import { BurgerMenu } from '../BurgerMenu';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.links}>
          <img
            src={logo}
            alt="Nice Gadgets logo"
            className={styles.header__logo}
          />

          <nav className={styles.nav}>
            <NavigationLink to="/" linkText="Home" />
            <NavigationLink to="/phones" linkText="Phones" />
            <NavigationLink to="/tablets" linkText="Tablets" />
            <NavigationLink to="/accessories" linkText="Accessories" />
          </nav>
        </div>

        <div className={styles.header__service}>
          <button className={styles.service_btn}>
            <img
              src={like}
              alt="like button"
              className={styles.service_btn_img}
            />
          </button>

          <button className={styles.service_btn}>
            <img
              src={cart}
              alt="like button"
              className={styles.service_btn_img}
            />
          </button>

          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
