import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { fetchPhones } from '../../actions/phonesActions';
import { RootState } from '../../store';
import { Pagination } from '../Pagination';
import { Loader } from '../Loader';

interface Props {
  phones: Product[];
  isLoading: boolean;
  fetchPhones: () => void;
}

const Cards: FC<Props> = ({ phones, isLoading, fetchPhones }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastPhone = currentPage * itemsPerPage;
  const indexOfFirstPhone = indexOfLastPhone - itemsPerPage;
  const currentPhones = phones.slice(indexOfFirstPhone, indexOfLastPhone);

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
            phonesCount={phones.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  phones: state.phones.phones,
  isLoading: state.phones.isLoading,
});

const mapDispatchToProps = {
  fetchPhones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
