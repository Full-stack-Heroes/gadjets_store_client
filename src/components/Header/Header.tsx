import { FC, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.svg';
import like from '../../assets/icons/Heart.svg';
import cart from '../../assets/icons/Cart.svg';
import menu from '../../assets/icons/Menu.svg';
import close from '../../assets/icons/Close.svg';
import user from '../../assets/icons/User.svg';
import { NavLink } from 'react-router-dom';
import { NavigationLink } from '../NavigationLink';
import classNames from 'classnames/bind';
import { BurgerMenuOpened } from '../BurgerMenuOpened';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Product } from '../../types/product';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';
import { SearchBar } from '../Search/components/SearchBar/SearchBar';

const cn = classNames.bind(styles);

export const Header: FC = () => {
  const products = useSelector(
    (state: RootState) => state.cart.cartItems as Product[],
  );

  const countCartItems: number = products.reduce((totalQuantity, product) => {
    return totalQuantity + (product.quantity || 0);
  }, 0);

  const likedProducts = useSelector(
    (state: RootState) => state.favorites.favoriteItems as Product[],
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 640 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  return (
    <header className={cn('header')}>
      <div className={cn('container')}>
        <div className={cn('links')}>
          <NavLink to="/">
            <img
              src={logo}
              alt="Nice Gadgets logo"
              className={cn('header__logo')}
            />
          </NavLink>

          {!isMenuOpen && (
            <nav className={cn('nav')}>
              <NavigationLink to="/" linkText="Home" />
              <NavigationLink to="/phones" linkText="Phones" />
              <NavigationLink to="/tablets" linkText="Tablets" />
              <NavigationLink to="/accessories" linkText="Accessories" />
            </nav>
          )}
        </div>

        <div className={cn('header__service')}>
          <SearchBar />

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              cn('service_btn', {
                active: isActive,
              })
            }>
            <img
              src={like}
              alt="like button"
              className={cn('service_btn_img')}
            />

            <div className={cn('headerCounter')}>
              <HeaderCounter productsCount={likedProducts.length} />
            </div>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn('service_btn', {
                active: isActive,
              })
            }>
            <img
              src={cart}
              alt="like button"
              className={cn('service_btn_img')}
            />
            <div className={cn('headerCounter')}>
              <HeaderCounter productsCount={countCartItems} />
            </div>
          </NavLink>

          <NavLink
            to="/registration"
            // onClick={toggleDropdown}
            className={({ isActive }) =>
              cn('service_btn', {
                active: isActive,
              })
            }>
            <img
              src={user}
              alt="like button"
              className={cn('service_btn_img')}
            />
          </NavLink>

          <div className="dropdown-content">
            Sign-in and Registration options You can add your form components or
            links here
          </div>

          <button
            className={cn('burger_btn', { 'burger_btn-active': isMenuOpen })}
            onClick={handleMenuClick}>
            <img
              src={isMenuOpen ? close : menu}
              alt={isMenuOpen ? 'close button' : 'menu button'}
              className={cn('burger_btn_img')}
            />
          </button>
        </div>
      </div>

      <BurgerMenuOpened isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};
