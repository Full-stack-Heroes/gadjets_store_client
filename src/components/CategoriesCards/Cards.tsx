import { FC, useState } from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { Loader } from '../Loader';
import { AddModal } from './AddModal/AddModal';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  products: Product[];
  isLoading?: boolean;
}

export const Cards: FC<Props> = ({ products, isLoading }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsLoggedIn(true);
    window.location.href = '/login';
  };

  return (
    <>
      {isLoading ? (
        <Loader className={cn('CardsLoader')} />
      ) : (
        <>
          <div className={styles.cards__container}>
            {products.map((phone) => (
              <Card
                product={phone}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                key={phone.id}
              />
            ))}
          </div>
          {isLoggedIn && (
            <AddModal
              isLoggedIn={isLoggedIn}
              handleModalClose={handleModalClose}
            />
          )}
        </>
      )}
    </>
  );
};
