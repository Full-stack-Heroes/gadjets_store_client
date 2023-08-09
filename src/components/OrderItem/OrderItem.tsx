import { FC } from 'react';
import styles from './OrdersItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export const OrderItem: FC = () => {
  return (
    <div className={cn('OrderContainer')}>
      <div className={cn('OrderData')}>
        Time, Id
      </div>
      <div className={cn('OrderStatus')}>
        Done
      </div>

      <div className={cn('OrderAmountInfo')}>
        <div className={cn('OrderAmountText')}>Amount:</div>
        <div className={cn('OrderAmountPrice')}>1000</div>
      </div>
      <div className={cn('OrderProducts')}>
        Items
      </div>
    </div>
  );
};
