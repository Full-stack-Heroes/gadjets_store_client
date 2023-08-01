import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { getPhones } from '../../utils/helpers';

export const Cards: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const fetchedPhones = await getPhones();

        setPhones(fetchedPhones);
      };

      fetchData();
    } catch {
      console.log('Error');
    }
  }, []);

  return (
    <div className={styles.cards__container}>
      {phones.slice(3, 19).map((phone) => (
        <Card product={phone} key={phone.id} />
      ))}
    </div>
  );
};
