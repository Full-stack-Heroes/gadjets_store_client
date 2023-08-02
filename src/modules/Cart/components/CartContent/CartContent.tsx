import { FC } from 'react';
import styles from './CartContent.module.scss';
import { CartItem } from '../../../../components/CartItem/CartItem';
import { TotalCost } from '../../../../components/TotalCost/TotalCost';
import { BackLink } from '../../../../components/BackLink/BackLink';

export const CartContent: FC = () => {
  return (
    <section className={styles.content}>
      <div className={styles.cart}>
        <BackLink />

        <h1 className={styles.cart__title}>Cart</h1>

        <div className={styles.cart__container}>
          <div className={styles.cart__items}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className={styles.cart__checkout}>
            <TotalCost />
          </div>
        </div>
      </div>
    </section>
  );
};
