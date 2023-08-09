import { FC } from 'react';
import styles from './OrdersItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  Id: string;
  OrderDate: string;
  Status: string;
  Amount: number;
  Items: string[];
}

export const OrderItem: FC<Props> = ({ Id, OrderDate, Status, Amount, Items}) => {
  return (
    <div className={cn('OrderContainer')}>
      <div className={cn('OrderData')}>
        <div className={cn('OrderServiceData')}>
          Id: {Id} Date: {OrderDate}
        </div>

        <div className={cn('OrderStatus')}>
          {Status}
        </div>
      </div>

      <div className={cn('OrderAmountInfo')}>
        <div className={cn('OrderAmountText')}>Amount:</div>
        <div className={cn('OrderAmountPrice')}>{Amount}</div>
      </div>
      <div className={cn('OrderProducts')}>
        {Items.map(item => (
          //TODO change key after tests
          <img src={item} alt="phone" key={item} className={cn('OrderImage')}/>
        ))}
      </div>
    </div>
  );
};
