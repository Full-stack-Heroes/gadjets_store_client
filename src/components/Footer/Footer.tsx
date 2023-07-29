import { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="footer__row">
          <h2>THIS IS FOOTER</h2>
        </div>
      </div>
    </footer>
  );
};
