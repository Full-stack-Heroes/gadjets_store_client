import { FC, useCallback, useEffect, useState } from 'react';
import styles from './Orders.module.scss';
import classNames from 'classnames/bind';
import { OrderItem } from '../../components/OrderItem';
import { BackLink } from '../../components/BackLink/BackLink';
import cart from '../../assets/icons/fastCart2.png';
import { Link } from 'react-router-dom';
import { Order } from '../../types/order';
import { getOrders } from '../../api/users';
import { Loader } from '../../components/Loader';

const cn = classNames.bind(styles);

export const Orders: FC = () => {
  const [userOrders, setUserOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const loadedOrders: Order[] = await getOrders();
      // const loadedOrders: Order[] = [
      //   {
      //     id: 1,
      //     createdAt: '2023-08-10T14:28:29.425Z',
      //     status: 'In Progress',
      //     productsWithQuantity: [
      //       {
      //         id: 85,
      //         category: 'phones',
      //         itemId: 'apple-iphone-12-64gb-purple',
      //         name: 'Apple iPhone 12 64GB Purple',
      //         fullPrice: 810,
      //         price: 740,
      //         screen: 6.1,
      //         capacity: '64GB',
      //         color: 'purple',
      //         ram: '4GB',
      //         year: 2020,
      //         image: 'img/phones/apple-iphone-12/purple/00.webp',
      //         quantity: 3,
      //       },
      //       {
      //         id: 87,
      //         category: 'phones',
      //         itemId: 'apple-iphone-12-64gb-purple',
      //         name: 'Apple iPhone 12 64GB Purple',
      //         fullPrice: 810,
      //         price: 740,
      //         screen: 6.1,
      //         capacity: '64GB',
      //         color: 'purple',
      //         ram: '4GB',
      //         year: 2020,
      //         image: 'img/phones/apple-iphone-12/purple/00.webp',
      //         quantity: 3,
      //       },
      //     ],
      //   },
      // ];

      setUserOrders(loadedOrders);
    } catch (error) {
      console.log('Error while fetching');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
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

        {/* <OrderItem
          Id="Id 1"
          OrderDate="09 08 2023"
          Status="Done✅"
          Amount={10000}
          Items={[
            {
              id: 23,
              category: 'phones',
              itemId: '2312',
              name: 'Iphone 14',
              fullPrice: 123,
              price: 100,
              screen: 65,
              capacity: '233',
              color: 'green',
              ram: '12',
              year: 1984,
              image:
                'https://content2.rozetka.com.ua/goods/images/big_tile/284913550.jpg',
              quantity: 1,
            },
          ]}
        />
        <OrderItem
          Id="Id 2"
          OrderDate="09 08 2023"
          Status="Done✅"
          Amount={10000}
          Items={[
            {
              id: 24,
              category: 'phones',
              itemId: '2314',
              name: 'Iphone 14',
              fullPrice: 123,
              price: 100,
              screen: 65,
              capacity: '233',
              color: 'green',
              ram: '12',
              year: 1984,
              image:
                'https://content2.rozetka.com.ua/goods/images/big_tile/284913568.jpg',
              quantity: 1,
            },
            {
              id: 25,
              category: 'phones',
              itemId: '2316',
              name: 'Iphone 14 Pro Max',
              fullPrice: 123,
              price: 100,
              screen: 65,
              capacity: '233',
              color: 'green',
              ram: '12',
              year: 1984,
              image:
                'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg',
              quantity: 1,
            },
          ]}
        />
        <OrderItem
          Id="Id 3"
          OrderDate="09 08 2023"
          Status="Canceled❌"
          Amount={10000}
          Items={[
            {
              id: 25,
              category: 'phones',
              itemId: '2315',
              name: 'Iphone 14',
              fullPrice: 123,
              price: 100,
              screen: 65,
              capacity: '233',
              color: 'green',
              ram: '12',
              year: 1984,
              image:
                'https://content2.rozetka.com.ua/goods/images/big_tile/284913560.jpg',
              quantity: 1,
            },
            {
              id: 26,
              category: 'phones',
              itemId: '2317',
              name: 'Iphone 14 Pro Max',
              fullPrice: 123,
              price: 100,
              screen: 65,
              capacity: '233',
              color: 'green',
              ram: '12',
              year: 1984,
              image:
                'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg',
              quantity: 1,
            },
          ]}
        /> */}
      </div>
    </section>
  );
};
