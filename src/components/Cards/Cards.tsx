import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import styles from './cards.module.scss';
import { Product } from '../../types/product';
import { fetchPhones } from '../../actions/phonesActions';
import { RootState } from '../../store';

interface Props {
  phones: Product[];
  fetchPhones: () => void;
}

const Cards: FC<Props> = ({ phones, fetchPhones }) => {
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  return (
    <div className={styles.cards__container}>
      {phones.slice(3, 19).map((phone) => (
        <Card product={phone} key={phone.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  phones: state.phones.phones,
});

const mapDispatchToProps = {
  fetchPhones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
