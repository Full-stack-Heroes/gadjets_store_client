import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './CartContent.module.scss';
import heart from '../../../../assets/icons/Heart.svg';
import { Arrow } from '../../../../components/Arrow/Arrow';
import { CartItem } from '../../../../components/CartItem/CartItem';
import { TotalCost } from '../../../../components/TotalCost/TotalCost';

export const CartContent: FC = () => {
  const [isCheckoutDone, setCheckoutDone] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const handleModalClose = () => {
    setModalActive(false);
  };

  useEffect(() => {
    if (showSuccess) {
      setModalActive(true);
    }
  }, [showSuccess]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section
      className={styles.content}
    >
      <div className={cn(styles.cart, {
        [styles.cartActive]: modalActive,
      })}>
        <div
          className={styles.cart__back_button}
          onClick={() => handleGoBack()}>
          <div className={styles.cart__arrow}>
            <Arrow />
          </div>
          Back
        </div>

        <h1 className={styles.cart__title}>
           Cart
        </h1>

        <div className={styles.cart__container}>
          <div className={styles.cart__items}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className={styles.cart__checkout}>
            <TotalCost
              setCheckoutDone={setCheckoutDone}
              setShowSuccess={setShowSuccess}
              isCheckoutDone={isCheckoutDone}
            />
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className={cn(styles.PopupContainer, {
          [styles.PopupContainer_Active]: modalActive,
        })}>

          <img src={heart} className={styles.PopupContainerImage} />

          <h2 className={styles.PopupContainerThanks}>Thank You!</h2>

          <p
            className={styles.PopupContainerMessage}
          >
            Your order was successfully applied!
          </p>

          <button
            className={styles.PopupContainerButton}
            onClick={() => handleModalClose()}
          >
            Continue
          </button>
        </div>
      )}
    </section>
  );
};
