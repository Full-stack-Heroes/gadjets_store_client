import { FC } from 'react';
import { Cards } from '../../components/CategoriesCards/Cards';
import { BackLink } from '../../components/BackLink/BackLink';
import styles from '../../modules/Cart/Cart.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Favourites: FC = () => {
  const favouritesItems = useSelector(
    (state: RootState) => state.favorites.favoriteItems,
  );

  return (
    <section className={styles.content}>
      <div
        className={styles.cart}>
        <BackLink />

        <h1 className={styles.cart__title}>Favourites</h1>

        <p>
          {favouritesItems.length > 1 ? `${favouritesItems.length} items` : `${favouritesItems.length} item`}
        </p>

        <Cards products={favouritesItems} />
      </div>
    </section>
  );
};
