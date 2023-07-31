import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import styles from './Cards.module.scss';
import { Phone } from '../../types/phone';
import { getPhones } from '../../utils/helpers';

export const Cards: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

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
        <Card phone={phone} key={phone.id} />
      ))}
    </div>
  );
};
