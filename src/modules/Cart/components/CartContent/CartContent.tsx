import { FC } from 'react';
import styles from './CartContent.module.scss';
import { Arrow } from '../../../../components/Arrow/Arrow';
import { CartItem } from '../../../../components/CartItem/CartItem';
import { TotalCost } from '../../../../components/TotalCost/TotalCost';

export const CartContent: FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className={styles.content}>
      <div className={styles.cart}>
        <span
          className={styles.cart__back_button}
          onClick={() => handleGoBack()}>
          <div className={styles.cart__arrow}>
            <Arrow />
          </div>
          Back
        </span>

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
