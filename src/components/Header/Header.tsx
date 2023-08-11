import { FC, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.svg';
import like from '../../assets/icons/Heart.svg';
import cart from '../../assets/icons/Cart.svg';
import orders from '../../assets/icons/Orders.svg';
import menu from '../../assets/icons/Menu.svg';
import close from '../../assets/icons/Close.svg';
import user from '../../assets/icons/User.svg';
import success from '../../assets/icons/success.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NavigationLink } from '../NavigationLink';
import classNames from 'classnames/bind';
import { BurgerMenuOpened } from '../BurgerMenuOpened';
import { removeAllFromCart } from '../../actions/cartActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Product } from '../../types/product';
import { useDispatch } from 'react-redux';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';
import { SearchBar } from '../Search/components/SearchBar/SearchBar';
import { removeAllFromFavourites } from '../../actions/favouriteActions';

const cn = classNames.bind(styles);

export const Header: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedout, setIsLoggedOut] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.cart.cartItems as Product[],
  );

  const countCartItems: number = products.reduce((totalQuantity, product) => {
    return totalQuantity + (product.quantity || 0);
  }, 0);

  const likedProducts = useSelector(
    (state: RootState) => state.favorites.favoriteItems as Product[],
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(removeAllFromCart());
    setIsLoggedOut(true);
    setIsDropdownOpen(false);
    dispatch(removeAllFromFavourites());
    navigate('/');
  };

  const handleCloseLogOut = () => {
    setIsLoggedOut(false);
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
          <NavLink to="/" onClick={() => setIsDropdownOpen(false)}>
            <img
              src={logo}
              alt="Nice Gadgets logo"
              className={cn('header__logo')}
            />
          </NavLink>

          {!isMenuOpen && (
            <nav className={cn('nav')}>
              <NavigationLink
                to="/"
                linkText="Home"
                onClick={() => setIsDropdownOpen(false)}
              />
              <NavigationLink
                to="/phones"
                linkText="Phones"
                onClick={() => setIsDropdownOpen(false)}
              />
              <NavigationLink
                to="/tablets"
                linkText="Tablets"
                onClick={() => setIsDropdownOpen(false)}
              />
              <NavigationLink
                to="/accessories"
                linkText="Accessories"
                onClick={() => setIsDropdownOpen(false)}
              />
            </nav>
          )}
        </div>

        <div className={cn('header__service')}>
          <SearchBar />

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              cn('service_btn', {
                active: isActive,
              })
            }>
            <img
              src={orders}
              alt="orders button"
              className={cn('service_btn_img')}
            />
          </NavLink>

          <NavLink
            to="/favourites"
            onClick={() => setIsDropdownOpen(false)}
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
            onClick={() => setIsDropdownOpen(false)}
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
            to="#"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={cn('service_btn')}>
            <img
              src={user}
              alt="user button"
              className={cn('service_btn_img')}
            />
          </NavLink>

          {!isMenuOpen && (
            <NavLink
              to="#"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn('burger_btn')}>
              <img
                src={user}
                alt="like button"
                className={cn('burger_btn_img')}
              />
            </NavLink>
          )}

          {isDropdownOpen && (
            <div className={cn('dropdown-content')}>
              {token ? (
                <button
                  onClick={() => handleLogout()}
                  className={cn('dropdown-content--link')}>
                  Log Out
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={cn('dropdown-content--link')}
                    onClick={() => setIsDropdownOpen(false)}>
                    Log In
                  </Link>

                  <Link
                    to="/registration"
                    className={cn('dropdown-content--link')}
                    onClick={() => setIsDropdownOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}

          {isLoggedout && (
            <>
              <div className={styles.backdrop}></div>
              <div className={styles.errorModal}>
                <div
                  className={cn(styles.errorModalContent, {
                    [styles.errorModalContentActive]: isLoggedout,
                  })}>
                  <img
                    src={success}
                    className={styles.errorModalContentImage}
                  />
                  <h2 className={styles.errorModalContentText}>Success!</h2>
                  <p className={styles.errorModalContentError}>
                    You have successfully logged out
                  </p>
                  <button
                    onClick={handleCloseLogOut}
                    className={styles.errorModalContentButton}>
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}

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
