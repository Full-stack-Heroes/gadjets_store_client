import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './CartContent.module.scss';
import cart from '../../../../assets/icons/fastCart2.png';
import popup from '../../../../assets/icons/Buy.png';
import cross from '../../../../assets/icons/Close.svg';
import { CartItem } from '../../../../components/CartItem/CartItem';
import { TotalCost } from '../../../../components/TotalCost/TotalCost';
import { BackLink } from '../../../../components/BackLink/BackLink';
import { Product } from '../../../../types/product';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import {
  removeFromCart,
  removeAllFromCart,
} from '../../../../actions/cartActions';

export const CartContent: FC = () => {
  const [isCheckoutDone, setCheckoutDone] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const handleModalClose = () => {
    setModalActive(false);
    handleRemoveAllFromCart();
  };

  useEffect(() => {
    if (showSuccess) {
      setModalActive(true);
    }
  }, [showSuccess]);

  return cartItems.length ? (
    <section className={styles.content}>
      <div
        className={cn(styles.cart, {
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
              items={cartItems.length}
            />
          </div>
        </div>
      </div>

      {showSuccess && (
        <div
          className={cn(styles.PopupContainer, {
            [styles.PopupContainer_Active]: modalActive,
          })}>
          <img
            src={cross}
            className={styles.PopupContainerClose}
            onClick={() => handleModalClose()}
          />
          <img src={popup} className={styles.PopupContainerImage} />

          <h2 className={styles.PopupContainerThanks}>Thank You!</h2>

          <p className={styles.PopupContainerMessage}>
            Your order was successfully applied!
          </p>

          <Link
            to="/"
            className={styles.PopupContainerButton}
            onClick={() => handleModalClose()}
          >
            Continue
          </Link>
        </div>
      )}
    </section>
  ) : (
    <div className={styles.emptyContainer}>
      <img src={cart} alt="" />
      <h2
        className={styles.emptyContainerText}
      >
        Noting here yet :(
      </h2>
      <h2
        className={styles.emptyContainerBottomText}
      >
        Let&apos;s better watch what we have
      </h2>
      <Link
        to="/"
        className={styles.emptyContainerButton}
      >
        Go to find something!
      </Link>
    </div>
  );
};
