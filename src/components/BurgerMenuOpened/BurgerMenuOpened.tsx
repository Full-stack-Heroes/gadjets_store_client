import { FC } from 'react';
import like from '../../assets/icons/Heart.svg';
import cart from '../../assets/icons/Cart.svg';
import styles from './BurgerMenuOpened.module.scss';
import { Link } from 'react-router-dom';
import { NavigationLink } from '../NavigationLink';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const BurgerMenuOpened: FC<BurgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={cn('burger', { 'burger_opened': isMenuOpen })}>
      <div className={cn('burger__links')}>
        <nav className={cn(isMenuOpen ? 'burger__nav' : '')}>
          <NavigationLink
            to="/"
            linkText="Home"
            onClick={handleMenuClose}
          />
          <NavigationLink
            to="/phones"
            linkText="Phones"
            onClick={handleMenuClose}
          />
          <NavigationLink
            to="/tablets"
            linkText="Tablets"
            onClick={handleMenuClose}
          />
          <NavigationLink
            to="/accessories"
            linkText="Accessories"
            onClick={handleMenuClose}
          />
        </nav>
      </div>

      <div className={cn(isMenuOpen ? 'burger__service' : '')}>
        <Link
          to="/favourites"
          className={cn('service__button', 'service__like', {
            'service__button-active': isMenuOpen,
          })}
          onClick={handleMenuClose}
        >
          <img src={like} alt="like button" className={cn('like')} />
        </Link>

        <Link
          to="/cart"
          className={cn('service__button', 'service__cart', {
            'service__button-active': isMenuOpen,
          })}
          onClick={handleMenuClose}
        >
          <img src={cart} alt="cart button" className={cn('cart')} />
        </Link>
      </div>
    </div>
  );
};
