import { FC } from 'react';
import styles from './Header.module.scss';
// import logo from '../../assets/logo.png';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="header__row">
          <h2>I am header</h2>
        </div>
      </div>
    </header>
  );
};
