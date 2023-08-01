import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './CartItem.module.scss';
import cross from '../../assets/icons/Close.svg';
import minus from '../../assets/icons/Minus.svg';
import plus from '../../assets/icons/Plus.svg';
import phone from '../../assets/6c05b192e9d229d5e415bad59e64ac49.png';

interface CartItemProps {
  itemPrice: number;
  calculateTotalCost: (amount: number, price: number) => void;
}

export const CartItem: FC<CartItemProps> = ({
  itemPrice,
  calculateTotalCost,
}) => {
  const [productAmount, setProductAmount] = useState(1);
  const isOneProduct = productAmount === 1;

  const addProduct = () => {
    setProductAmount((productAmount) => productAmount + 1);
    calculateTotalCost(1, itemPrice);
  };

  const deleteProduct = () => {
    if (productAmount > 1) {
      setProductAmount((productAmount) => productAmount - 1);
      calculateTotalCost(-1, itemPrice);
    }
  };

  return (
    <div className={styles.item__container}>
      <img src={cross} className={styles.item__container_close} />

      <img src={phone} className={styles.item__container_phone} />

      <p className={styles.item__container_model}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>

      <div className={styles.item__container_buttons}>
        <button
          className={cn(styles.item__container_minus, {
            [styles.item__container_minus_disabled]: isOneProduct,
          })}
          onClick={() => deleteProduct()}>
          <img src={minus} alt="" />
        </button>

        <span className={styles.item__container_number}>{productAmount}</span>

        <button
          className={styles.item__container_plus}
          onClick={() => addProduct()}>
          <img src={plus} alt="" />
        </button>
      </div>

      <span className={styles.item__container_price}>${itemPrice}</span>
    </div>
  );
};
