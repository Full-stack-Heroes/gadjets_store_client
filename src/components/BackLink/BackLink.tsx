import { FC } from 'react';
import { Arrow } from '../Arrow/Arrow';
import styles from './BackLink.module.scss';

export const BackLink: FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <span className={styles.back_button} onClick={() => handleGoBack()}>
      <div className={styles.arrow}>
        <Arrow />
      </div>
      Back
    </span>
  );
};
