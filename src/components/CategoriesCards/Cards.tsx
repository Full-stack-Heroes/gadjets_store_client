import { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { Loader } from '../Loader';
import classNames from 'classnames/bind';
import { SelectDropdown } from '../SelectDropdown/SelectDropdown';

const cn = classNames.bind(styles);

interface Props {
  products: Product[];
  isLoading?: boolean;
  amount?: number;
}

const sortByVariants = [
  {title: 'Hello?', value: 'Test'},
  {title: 'Hello?', value: 'Test'},
  {title: 'Hello?', value: 'Test'},
  {title: 'Hello?', value: 'Test'},
  {title: 'Hello?', value: 'Test'},
];

export const Cards: FC<Props> = ({ products, isLoading, amount }) => {
  return (
    <>
      <h1 className={cn('CardsAmmount')}>Amount: {amount}</h1>

      <div className={cn('CardsSelects')}>
        <SelectDropdown
          defaultValue={{title: 'test', value: 'test'}}
          options={sortByVariants}
          title="Sort by"
          onChange={() => console.log('click on change')}
        />
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
