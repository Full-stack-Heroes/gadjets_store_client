import { FC, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';
import cn from 'classnames';

export interface NavigationLinkProps {
  to: string;
  linkText: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  to,
  linkText,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(`${styles.nav__link}`, {
          [styles.active]: isActive,
        })
      }
      onClick={onClick}>
      {linkText}
    </NavLink>
  );
};
