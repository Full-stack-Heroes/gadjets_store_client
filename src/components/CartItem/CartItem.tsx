import React, { useState } from 'react';
import cn from 'classnames';
import styles from './CartItem.module.scss';
import plus from '../../assets/icons/Plus.svg';
import phone from '../../assets/6c05b192e9d229d5e415bad59e64ac49.png';
import { Cross } from '../Cross/Cross';
import { Minus } from '../Minus/Minus';

export const CartItem: React.FC = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const isOneProduct = productQuantity === 1;

  const increaseQuantity = () => {
    setProductQuantity((productNumber) => productNumber + 1);
  };

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((productNumber) => productNumber - 1);
    }
  };

  return (
    <div className={styles.item__container}>
      <div className={styles.item_phone_info}>
        <div className={styles.item__container_close}>
          <Cross />
        </div>

        <img src={phone} className={styles.item__container_phone} />

        <p className={styles.item__container_model}>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>

      <div className={styles.item_price_info}>
        <div className={styles.item__container_buttons}>
          <button
            className={cn(styles.item__container_minus, {
              [styles.item__container_minus_disabled]: isOneProduct,
            })}
            onClick={decreaseQuantity}>
            <Minus />
          </button>

          <span className={styles.item__container_number}>
            {productQuantity}
          </span>

          <button
            className={styles.item__container_plus}
            onClick={increaseQuantity}>
            <img src={plus} alt="Plus" />
          </button>
        </div>

        <span className={styles.item__container_price}>$999</span>
      </div>
    </div>
  );
};
