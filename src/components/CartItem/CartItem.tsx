import React, { useState } from 'react';
import cn from 'classnames';
import styles from './CartItem.module.scss';
import plus from '../../assets/icons/Plus.svg';
import phone from '../../assets/6c05b192e9d229d5e415bad59e64ac49.png';
import { Cross } from '../Cross/Cross';
import { Minus } from '../Minus/Minus';

export const CartItem: React.FC = () => {
  const [productNumber, setProductNumber] = useState(1);
  const isOneProduct = productNumber === 1;

  const addProduct = () => {
    setProductNumber((productNumber) => productNumber + 1);
  };

  const deleteProduct = () => {
    if (productNumber > 1) {
      setProductNumber((productNumber) => productNumber - 1);
    }
  };

  return (
    <div className={styles.item__container}>
      <div className={styles.item_phone_info}>
        <div className={styles.item__container_close} >
          <Cross/>
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
            onClick={() => deleteProduct()}>
            <Minus/>
          </button>

          <span className={styles.item__container_number}>{productNumber}</span>

          <button
            className={styles.item__container_plus}
            onClick={() => addProduct()}>
            <img src={plus} alt="" />
          </button>
        </div>

        <span className={styles.item__container_price}>$999</span>
      </div>
    </div>
  );
};
