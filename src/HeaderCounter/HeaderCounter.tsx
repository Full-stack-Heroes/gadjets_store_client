import { FC, memo } from 'react';
import styles from './HeaderCounter.module.scss';
import classNames from 'classnames/bind';
import { Product } from '.././types/product';

interface Props {
  products: Product[]
}

export const HeaderCounter: FC <Props> = memo(({ products }) => {
  const cn = classNames.bind(styles);

  return (
    <div className={cn('countContainer')}>
      {products.length > 0 && (
        <div className={cn('numberOfItems', 'container')}>
          <div className="cart__products_counter">
            <span className="cart__products_counter-text">
              {products.length < 100 ? products.length : '99+'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
);

HeaderCounter.displayName = 'HeaderCounter';
