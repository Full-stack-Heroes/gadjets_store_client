import { FC } from 'react';
import styles from './HomeContent.module.scss';

export const HomeContent: FC = () => {
  return (
    <section className={styles.content}>
      <h2>I AM HOME CONTENT!</h2>
    </section>
  );
};
