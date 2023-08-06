import { FC } from 'react';
import styles from './WelcomeTitle.module.scss';

export const WelcomeTitle: FC = () => {
  return (
    <div className={styles.welcome__container}>
      <h1 className={styles.welcome__article}>
        Welcome to Nice Gadgets store!
      </h1>
    </div>
  );
};
