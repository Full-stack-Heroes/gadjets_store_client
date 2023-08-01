import { FC, useState } from 'react';
import styles from './CartContent.module.scss';
import { Arrow } from '../../../../components/Arrow/Arrow';
import { CartItem } from '../../../../components/CartItem/CartItem';
import { TotalCost } from '../../../../components/TotalCost/TotalCost';

export const CartContent: FC = () => {
  const [totalItemAmount, setTotalItemAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotalCost = (amount: number, price: number) => {
    setTotalItemAmount((prevTotalItemAmount) => prevTotalItemAmount + amount);
    setTotalCost((prevTotalCost) => prevTotalCost + amount * price);
  };

  return (
    <section className={styles.content}>
      <div className={styles.cart}>
        <div className={styles.cart__back_button}>
          <div className={styles.cart__arrow}>
            <Arrow />
          </div>
          Back
        </div>

        <div className={styles.cart__title}>Cart</div>

        <div className={styles.cart__container}>
          <div className={styles.cart__items}>
            <CartItem itemPrice={999} calculateTotalCost={calculateTotalCost} />
            <CartItem itemPrice={228} calculateTotalCost={calculateTotalCost} />
          </div>

          <div className={styles.cart__checkout}>
            <TotalCost
              totalItemAmount={totalItemAmount}
              totalCost={totalCost}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
