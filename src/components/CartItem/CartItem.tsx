import React, { useState } from 'react';
import cn from 'classnames';
import styles from './CartItem.module.scss';
import plus from '../../assets/icons/Plus.svg';
import { Cross } from '../Cross/Cross';
import { Minus } from '../Minus/Minus';
import { Product } from '../../types/product';
import { normalizeImage } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../actions/cartActions';
interface Props {
  product: Product;
  handleRemoveFromCart: (itemId: number) => void;
}

export const CartItem: React.FC<Props> = ({ product, handleRemoveFromCart }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const isOneProduct = productQuantity === 1;

  const dispatch = useDispatch();

  const increaseQuantity = () => {
    setProductQuantity((productNumber) => productNumber + 1);
    dispatch(updateQuantity(product.id, productQuantity + 1));
  };

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((productNumber) => productNumber - 1);
      dispatch(updateQuantity(product.id, productQuantity - 1));
    }
  };

  const { image, name, price, id } = product;
  const totalProdactPrice = price * productQuantity;

  return (
    <div key={id} className={styles.item__container}>
      <div className={styles.item_phone_info}>
        <div className={styles.item__container_close}>
          <Cross itemId={id} handleRemoveFromCart={handleRemoveFromCart}/>
        </div>

        <img src={normalizeImage(image)} className={styles.item__container_phone} />

        <p className={styles.item__container_model}>
          {name}
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

        <span className={styles.item__container_price}>${totalProdactPrice}</span>
      </div>
    </div>
  );
};
