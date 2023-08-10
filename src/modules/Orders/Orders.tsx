import { FC } from 'react';
import styles from './Orders.module.scss';
import classNames from 'classnames/bind';
import { OrderItem } from '../../components/OrderItem';
import { BackLink } from '../../components/BackLink/BackLink';

const cn = classNames.bind(styles);

export const Orders: FC = () => {
  return (
    <section className={cn('content')}>
      <div className={cn('orders')}>
        <div className={cn('navigation')}>
          <BackLink />
          <h1 className={cn('title')}>Orders</h1>
        </div>

        <div className={cn('ordersContainer')}> </div>
        <OrderItem
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
          // Items={['',
          // 'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg',

          // 'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg',
          // 'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg',
          // 'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg']}
        />
      </div>
    </section>
  );
};
