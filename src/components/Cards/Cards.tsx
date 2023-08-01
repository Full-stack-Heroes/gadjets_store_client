import { FC, useState } from 'react';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { Pagination } from '../Pagination';
import { Loader } from '../Loader';

interface Props {
  products: Product[];
  isLoading: boolean;
}

export const Cards: FC<Props> = ({ products, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastPhone = currentPage * itemsPerPage;
  const indexOfFirstPhone = indexOfLastPhone - itemsPerPage;
  const currentPhones = products.slice(indexOfFirstPhone, indexOfLastPhone);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.cards__container}>
            {currentPhones.map((phone) => (
              <Card product={phone} key={phone.id} />
            ))}
          </div>

          <Pagination
            phonesCount={products.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};
