import { FC, useState } from 'react';
import like from '../../assets/icons/Heart.svg';
import cart from '../../assets/icons/Cart.svg';
import styles from './BurgerMenuOpened.module.scss';
import { BurgerMenuProps } from '../../types/BurgerMenuProps';
import { NavigationLink } from '../NavigationLink';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export const BurgerMenuOpened: FC<BurgerMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [isLikeActive, setIsLikeActive] = useState(false);

  const handleServiceButtonClick = (buttonType: 'cart' | 'like') => {
    setIsCartActive(buttonType === 'cart');
    setIsLikeActive(buttonType === 'like');
    setIsMenuOpen(false);
  };

  return (
    <div className={cn(isMenuOpen ? 'burger' : '')}>
      <div className={cn('burger__links')}>
        <nav className={cn(isMenuOpen ? 'burger__nav' : '')}>
          <NavigationLink to="/" linkText="Home" onClick={() => setIsMenuOpen(false)} />
          <NavigationLink to="/phones" linkText="Phones" onClick={() => setIsMenuOpen(false)} />
          <NavigationLink to="/tablets" linkText="Tablets" onClick={() => setIsMenuOpen(false)} />
          <NavigationLink to="/accessories" linkText="Accessories" onClick={() => setIsMenuOpen(false)} />
        </nav>
      </div>

      <div className={cn(isMenuOpen ? 'burger__service' : '')}>
        <button
          className={cn(
            'service__button',
            'service__like',
            { 'service__button-active': isLikeActive }
          )}
          onClick={() => handleServiceButtonClick('like')}
        >
          <img
            src={like}
            alt="like button"
            className={cn('like')}
          />
        </button>

        <button
          className={cn(
            'service__button',
            'service__cart',
            { 'service__button-active': isCartActive }
          )}
          onClick={() => handleServiceButtonClick('cart')}
        >
          <img
            src={cart}
            alt="cart button"
            className={cn('cart')}
          />
        </button>
      </div>
    </div>
  );
};
