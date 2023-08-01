import { FC, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.svg';
import like from '../../assets/icons/Heart.svg';
import cart from '../../assets/icons/Cart.svg';
import { NavigationLink } from '../NavigationLink';
import { BurgerMenuButton } from '../BurgerMenuButton';
import classNames from 'classnames/bind';
import { BurgerMenuOpened } from '../BurgerMenuOpened';

const cn = classNames.bind(styles);

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Opened burger and increasing width 640+ not hidding header elems
  const handleWindowResize = () => {
    if (window.innerWidth > 640 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isMenuOpen]);

  // Remove scrollbar when burger opened.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className={cn('header')}>
      <div className={cn('container')}>
        <div className={cn('links')}>
          <img
            src={logo}
            alt="Nice Gadgets logo"
            className={cn('header__logo')}
          />

          {!isMenuOpen && <nav className={cn('nav')}>
            <NavigationLink to="/" linkText="Home" />
            <NavigationLink to="/phones" linkText="Phones" />
            <NavigationLink to="/tablets" linkText="Tablets" />
            <NavigationLink to="/accessories" linkText="Accessories" />
          </nav>}
        </div>

        <div className={cn('header__service')}>
          <button className={cn('service_btn')}>
            <img
              src={like}
              alt="like button"
              className={cn('service_btn_img')}
            />
          </button>

          <button className={cn('service_btn')}>
            <img
              src={cart}
              alt="like button"
              className={cn('service_btn_img')}
            />
          </button>
        </div>

        <BurgerMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </div>

      {isMenuOpen && (
        <BurgerMenuOpened
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </header>
  );
};
