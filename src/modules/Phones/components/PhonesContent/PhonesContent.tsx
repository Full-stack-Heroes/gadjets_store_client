import { FC } from 'react';
import styles from './PhonesContent.module.scss';
import { Pagination } from '../../../../components/Pagination/Pagination';

export const PhonesContent: FC = () => {
  return (
    <section className={styles.content}>
      <h2>I AM PHONES CONTENT!</h2>
      <Pagination />
    </section>
  );
};
