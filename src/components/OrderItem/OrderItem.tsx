import { FC } from 'react';
import styles from './OrdersItem.module.scss';
import classNames from 'classnames/bind';
import { Arrow } from '../Arrow/Arrow';

const cn = classNames.bind(styles);

interface Props {
  Id: string;
  OrderDate: string;
  Status: string;
  Amount: number;
  Items: string[];
}

export const OrderItem: FC<Props> = ({ Id, OrderDate, Status, Amount, Items}) => {
  let additionalItemsCounter;

  if (Items.length > 3) {
    additionalItemsCounter = Items.length - 3;
    Items = Items.slice(0, 3);
  }

  return (
    <div className={cn('OrderContainer')}>
      <div className={cn('OrderData')}>
        <div className={cn('OrderServiceData')}>
            Id: {Id} Date: {OrderDate}
          <div className={cn('OrderArrowMobile')}>
            <Arrow/>
          </div>
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
        ))
        }
        {additionalItemsCounter
         && (
           <div className={cn('OrderProductsCounter')}>
             {('+' + String(additionalItemsCounter))}
           </div>
         )}

        <div className={cn('OrderArrowDesktop')}>
          <Arrow/>
        </div>
      </div>
    </div>
  );
};
