import { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { Loader } from '../Loader';

interface Props {
  products: Product[];
  isLoading: boolean;
  ammount: number;
}

export const Cards: FC<Props> = ({ products, isLoading, ammount }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.page__container}>
          <h1>Ammount: {ammount}</h1>

          <div className={styles.cards__container}>
            {products.map((phone) => (
              <Card
                product={phone}
                key={phone.id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
