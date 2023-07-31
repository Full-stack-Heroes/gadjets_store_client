import { FC } from 'react';
import styles from './CartContent.module.scss';
import { Arrow } from '../../../../components/Arrow/Arrow';

export const CartContent: FC = () => {
  return (
    <section className={styles.content}>
      <div className={styles.cart}>
        <div className={styles.cart__back_button}>
          <div className={styles.cart__arrow}>
            <Arrow/>
          </div>
          Back
        </div>

        <div className={styles.cart__title}>
           Cart
        </div>

        <div className={styles.cart__container}>
          <div className={styles.cart__items}>
            <div className={styles.cart__item}>content</div>
            <div className={styles.cart__item}>content</div>
            <div className={styles.cart__item}>content</div>
          </div>

          <div className={styles.cart__checkout}>checkout</div>
        </div>
      </div>
    </section>
  );
};
