import { FC } from 'react';
import styles from './CartContent.module.scss';
import { CartItem } from '../../../../components/CartItem/CartItem';
import { TotalCost } from '../../../../components/TotalCost/TotalCost';
import { BackLink } from '../../../../components/BackLink/BackLink';
import { Product } from '../../../../types/product';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { removeFromCart } from '../../../../actions/cartActions';

export const CartContent: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <section className={styles.content}>
      <div className={styles.cart}>
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
            <TotalCost totalCost={totalCost} />
          </div>
        </div>
      </div>
    </section>
  );
};
