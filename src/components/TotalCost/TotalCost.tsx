import { FC } from 'react';
import cn from 'classnames';
import styles from './TotalCost.module.scss';

type Props = {
  setCheckoutDone: (val: boolean) => void;
  setShowSuccess: (cal: boolean) => void;
  isCheckoutDone: boolean;
  totalCost: number;
}

export const TotalCost: FC<Props> = ({
  setCheckoutDone,
  setShowSuccess,
  isCheckoutDone,
  totalCost,
}) => {
  const buttonTitle = isCheckoutDone ? 'Thanks for shopping' : 'Checkout';

  const handleCheckout = () => {
    if (isCheckoutDone) {
      window.location.href = '/';
    } else {
      setCheckoutDone(true);
      setShowSuccess(true);
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
