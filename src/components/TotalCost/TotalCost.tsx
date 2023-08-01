import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './TotalCost.module.scss';

interface TotalCostProps {
  totalItemAmount: number;
  totalCost: number;
}

export const TotalCost: FC<TotalCostProps> = ({
  totalItemAmount,
  totalCost,
}) => {
  const [isCheckoutDone, setCheckoutDone] = useState(false);
  const buttonTitle = isCheckoutDone ? 'Thanks for shopping' : 'Checkout';

  const handleCheckout = () => {
    if (isCheckoutDone) {
      window.location.href = '/';
    } else {
      setCheckoutDone(true);
    }
  };

  return (
    <div className={styles.total__container}>
      <div className={styles.total__container_cost}>${totalCost}</div>

      <div className={styles.total__container_items}>
        Total for {totalItemAmount} items
      </div>

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
