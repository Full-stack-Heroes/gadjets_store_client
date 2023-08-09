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
          Status="Done"
          Amount={10000}
          Items={['https://content2.rozetka.com.ua/goods/images/big_tile/284913550.jpg',
            'https://content2.rozetka.com.ua/goods/images/big_tile/284913563.jpg']}
        />
        <OrderItem
          Id="Id 2"
          OrderDate="09 08 2023"
          Status="Done"
          Amount={10000}
          Items={['https://content2.rozetka.com.ua/goods/images/big_tile/284913568.jpg',
            'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg']}
        />
        <OrderItem
          Id="Id 3"
          OrderDate="09 08 2023"
          Status="Done"
          Amount={10000}
          Items={['https://content2.rozetka.com.ua/goods/images/big_tile/284913560.jpg',
            'https://content2.rozetka.com.ua/goods/images/big_tile/284913561.jpg']}
        />
      </div>
    </section>
  );
};
