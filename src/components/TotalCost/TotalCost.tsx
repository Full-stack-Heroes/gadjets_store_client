import React from 'react';
import styles from './TotalCost.module.scss';

export const TotalCost: React.FC = () => {
  return (
    <div className={styles.total__container}>
      <div className={styles.total__container_cost}>
        $2657
      </div>

      <div className={styles.total__container_items}>
        Total for X items
      </div>

      <button className={styles.total__container_button}>
        Checkout
      </button>
    </div>
  );
};
