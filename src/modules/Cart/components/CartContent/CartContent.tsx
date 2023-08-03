import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './CartContent.module.scss';
import heart from '../../../../assets/icons/Heart.svg';
import { CartItem } from '../../../../components/CartItem/CartItem';
import { TotalCost } from '../../../../components/TotalCost/TotalCost';
import { BackLink } from '../../../../components/BackLink/BackLink';
import { Product } from '../../../../types/product';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { removeFromCart } from '../../../../actions/cartActions';

export const CartContent: FC = () => {
  const [isCheckoutDone, setCheckoutDone] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const order = JSON.parse(localStorage.getItem('order') as string);
  console.log(order);

  const handleModalClose = () => {
    setModalActive(false);
  };

  useEffect(() => {
    if (showSuccess) {
      setModalActive(true);
    }
  }, [showSuccess]);

  return (
    <section
      className={styles.content}
    >
      <div className={cn(styles.cart, {
        [styles.cartActive]: modalActive,
      })}>
        <BackLink />

        <h1 className={styles.cart__title}>Cart</h1>

        <div className={styles.cart__container}>
          <div className={styles.cart__items}>
            {cartItems.map((item: Product) => (
              <CartItem
                key={item.id}
                product={item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>

          <div className={styles.cart__checkout}>
            <TotalCost
              setCheckoutDone={setCheckoutDone}
              setShowSuccess={setShowSuccess}
              isCheckoutDone={isCheckoutDone}
              totalCost={totalCost}
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
