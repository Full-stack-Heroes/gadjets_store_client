import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
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
import { getUserCart } from '../../../../api/users';

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

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleModalClose = () => {
    setModalActive(false);
    handleRemoveAllFromCart();
  };

  getUserCart().then(response => console.log(response));

  useEffect(() => {
    if (showSuccess) {
      setModalActive(true);
    }
  }, [showSuccess]);

  const cn = classNames.bind(styles);

  return cartItems.length ? (
    <section className={cn('content')}>
      <div
        className={cn('cart', {
          cartActive: modalActive,
        })}>
        <BackLink />

        <h1 className={cn('cart__title')}>Cart</h1>

        <div className={cn('cart__container')}>
          <div className={cn('cart__items')}>
            {cartItems.map((item: Product) => (
              <CartItem
                key={item.id}
                product={item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>

          <div className={cn('cart__checkout')}>
            <TotalCost
              setCheckoutDone={setCheckoutDone}
              setShowSuccess={setShowSuccess}
              isCheckoutDone={isCheckoutDone}
              totalCost={totalCost}
              items={totalItems}
            />
          </div>
        </div>
      </div>

      {showSuccess && (
        <div
          className={cn('PopupContainer', {
            PopupContainerActive: modalActive,
          })}>
          <img
            src={cross}
            className={cn('PopupContainerClose')}
            onClick={() => handleModalClose()}
          />
          <img src={popup} className={cn('PopupContainerImage')} />

          <h2 className={cn('PopupContainerThanks')}>Thank You!</h2>

          <p className={cn('PopupContainerMessage')}>
            Your order was successfully applied!
          </p>

          <Link
            to="/"
            className={cn('PopupContainerButton')}
            onClick={() => handleModalClose()}>
            Continue
          </Link>
        </div>
      )}
    </section>
  ) : (
    <div className={cn('emptyContainer')}>
      <img src={cart} alt="" />
      <h2 className={cn('emptyContainerText', 'title', 'titleH2')}>
        {'Noting here yet :('}
      </h2>
      <h2 className={cn('emptyContainerBottomText')}>
        Let&apos;s better look what we have
      </h2>
      <Link to="/" className={cn('emptyContainerButton')}>
        find something!
      </Link>
    </div>
  );
};
