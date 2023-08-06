import { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { Loader } from '../Loader';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  products: Product[];
  isLoading?: boolean;
  amount?: number;
}

export const Cards: FC<Props> = ({ products, isLoading, amount }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={cn('CardsAmmount')}>Amount: {amount}</h1>

          <div className={styles.cards__container}>
            {products.map((phone) => (
              <Card
                product={phone}
                key={phone.id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
