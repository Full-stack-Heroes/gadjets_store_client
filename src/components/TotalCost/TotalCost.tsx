import React, { useState } from 'react';
import cn from 'classnames';
import styles from './TotalCost.module.scss';
import { useDispatch } from 'react-redux';
import { removeAllFromCart } from '../../actions/cartActions';

interface Props {
  totalCost: number;
}

export const TotalCost: React.FC<Props> = ({ totalCost }) => {
  const [isCheckoutDone, setCheckoutDone] = useState(false);
  const buttonTitle = isCheckoutDone ? 'Thanks for shopping' : 'Checkout';

  const dispatch = useDispatch();

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  const handleCheckout = () => {
    if (isCheckoutDone) {
      window.location.href = '/';
      handleRemoveAllFromCart();
    } else {
      setCheckoutDone(true);
    }
  };

  return (
    <div className={styles.total__container}>
      <div className={styles.total__container_cost}>${totalCost}</div>

      <div className={styles.total__container_items}>Total for X items</div>

      <button
        className={cn(styles.total__container_button, {
          [styles.total__container_button_active]: isCheckoutDone,
        })}
        onClick={() => handleCheckout()}>
        {buttonTitle}
      </button>
    </div>
  );
};
