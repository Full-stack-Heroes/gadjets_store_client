import { FC } from 'react';
import menu from '../../assets/icons/Menu.svg';
import close from '../../assets/icons/Close.svg';
import classNames from 'classnames/bind';
import styles from './BurgerMenuButton.module.scss';
import { BurgerMenuProps } from '../../types/BurgerMenuProps';

const cn = classNames.bind(styles);

export const BurgerMenuButton: FC<BurgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      className={cn('service_btn', { 'service_btn-active': isMenuOpen })}
      onClick={handleMenuClick}>
      <img
        src={isMenuOpen ? close : menu}
        alt={isMenuOpen ? 'close button' : 'menu button'}
        className={cn('service_btn_img')}
      />
    </button>
  );
};
