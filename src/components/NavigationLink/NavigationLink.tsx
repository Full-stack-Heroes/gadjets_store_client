import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';
import cn from 'classnames';

interface Props {
  to: string;
  linkText: string;
}

export const NavigationLink: FC<Props> = ({ to, linkText }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(`${styles.nav__link}`, {
          [styles.active]: isActive,
        })
      }>
      {linkText}
    </NavLink>
  );
};
