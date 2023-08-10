import { FC, useState } from 'react';
import styles from './OrdersItem.module.scss';
import classNames from 'classnames/bind';
import { Arrow } from '../Arrow/Arrow';
import { Product } from '../../types/product';
import { normalizeImage } from '../../utils/helpers';

const cn = classNames.bind(styles);

interface Props {
  Id: string;
  OrderDate: string;
  Status: string;
  Amount: number;
  Items: Product[];
}

export const OrderItem: FC<Props> = ({
  Id,
  OrderDate,
  Status,
  Amount,
  Items,
}) => {
  let additionalItemsCounter;
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  function handleClick() {
    setIsArrowClicked((prevState) => !prevState);
  }

  if (Items.length > 3) {
    additionalItemsCounter = Items.length - 3;
    Items = Items.slice(0, 3);
  }

  return (
    <div className={cn('OrderContainer')}>
      <div className={cn('OrderData')}>
        <div className={cn('OrderServiceData')}>
          Id: {Id} Date: {OrderDate}
          <div
            className={cn('OrderArrowMobile', {
              OrderArrowMobileClicked: isArrowClicked,
            })}
            onClick={handleClick}>
            <Arrow />
          </div>
        </div>
        <div className={cn('OrderStatus')}>{Status}</div>
      </div>

      <div className={cn('OrderAmountInfo')}>
        <div className={cn('OrderAmountText')}>Amount:</div>
        <div className={cn('OrderAmountPrice')}>{Amount}</div>
      </div>
      <div className={cn('OrderProducts')} onClick={handleClick}>
        {!isArrowClicked &&
          Items.map((item) => (
            <img
              src={normalizeImage(item.image)}
              alt={item.name}
              key={item.id}
              className={cn('OrderImage')}
            />
          ))}

        {!isArrowClicked && additionalItemsCounter && (
          <div className={cn('OrderProductsCounter')}>
            {'+' + String(additionalItemsCounter)}
          </div>
        )}
        <div className={cn('OrderItemsFullInfo')}>
          {isArrowClicked &&
            Items.map((item) => (
              <div key={item.id} className={cn('OrderItemFullInfo')}>
                <img
                  src={normalizeImage(item.image)}
                  alt={item.name}
                  className={cn('OrderImage')}
                />
                <p>{item.name}</p>
                <div className={cn('OrderItemQuantity')}>
                  <p>Quantity: </p>
                  <p>{item.quantity}</p>
                </div>
                <div className={cn('OrderItemPrice')}>
                  <p>Price: </p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
        </div>

        <div
          className={cn('OrderArrowDesktop', {
            OrderArrowDesktopClicked: isArrowClicked,
          })}>
          <Arrow />
        </div>
      </div>
    </div>
  );
};
