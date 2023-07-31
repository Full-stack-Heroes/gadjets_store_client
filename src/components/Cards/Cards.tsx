import React from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';

export const Cards: React.FC = () => {
  return (
    <div className={styles.cards__container}>
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
      <Card className={styles.card} />
    </div>
  );
};
