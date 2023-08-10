import { FC, memo } from 'react';
import styles from './HeaderCounter.module.scss';
import classNames from 'classnames/bind';

interface Props {
  productsCount: number;
}

export const HeaderCounter: FC<Props> = memo(({ productsCount }) => {
  const cn = classNames.bind(styles);

  return (
    <>
      {productsCount > 0 && (
        <div className={cn('countContainer')}>
          <div className={cn('numberOfItems', 'container')}>
            <div className="cart__products_counter">
              <span className="cart__products_counter-text">
                {productsCount < 100 ? productsCount : '99+'}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

HeaderCounter.displayName = 'HeaderCounter';
