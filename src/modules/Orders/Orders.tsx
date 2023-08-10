import { FC, useCallback, useEffect, useState } from 'react';
import styles from './Orders.module.scss';
import classNames from 'classnames/bind';
import { OrderItem } from '../../components/OrderItem';
import { BackLink } from '../../components/BackLink/BackLink';
import cart from '../../assets/icons/fastCart2.png';
import { Link, useNavigate } from 'react-router-dom';
import { Order } from '../../types/order';
import { getOrders } from '../../api/users';
import { Loader } from '../../components/Loader';

const cn = classNames.bind(styles);

export const Orders: FC = () => {
  const [userOrders, setUserOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const loadedOrders: Order[] = await getOrders();
      setUserOrders(loadedOrders);
    } catch (error) {
      console.log('Error while fetching');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    } else {
      fetchData();
    }
  }, []);

  return (
    <section className={cn('content')}>
      <div className={cn('orders')}>
        <div className={cn('navigation')}>
          <BackLink />
          <h1 className={cn('title')}>Orders</h1>
        </div>

        {isLoading && <Loader />}

        {userOrders ? (
          userOrders.map((order) => (
            <OrderItem
              key={order.id}
              Id={String(order.id)}
              OrderDate={order.createdAt
                .split('T')[0]
                .split('-')
                .reverse()
                .join(' ')}
              Status={order.status}
              Amount={order.productsWithQuantity.reduce(
                (accumulator: number, product) =>
                  accumulator + Number(product.price) * product.quantity,
                0,
              )}
              Items={order.productsWithQuantity}
            />
          ))
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
        )}
      </div>
    </section>
  );
};
