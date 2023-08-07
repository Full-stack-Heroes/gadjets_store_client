import { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { Loader } from '../Loader';
import classNames from 'classnames/bind';
import { SortBy } from './components/SortBy';
import { ShowByPage } from './components/showByPage';

const cn = classNames.bind(styles);

interface Props {
  products: Product[];
  isLoading?: boolean;
  amount?: number;
}

export const Cards: FC<Props> = ({ products, isLoading, amount }) => {
  return (
    <>
      <h2 className={cn('CardsAmmount')}>Amount: {amount}</h2>

      <div className={cn('CardsSelects')}>
        <SortBy className={cn('CardsSelectsItem')}/>
        <ShowByPage className={cn('CardsSelectsItem')}/>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
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
