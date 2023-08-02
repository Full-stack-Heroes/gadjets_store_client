import { FC } from 'react';
import styles from './ProductImageSelector.module.scss';
import cn from 'classnames';

interface Props {
  className?: string;
}

export const ProductImageSelector: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.ProductImageSelector, className)}>
      Product image selector
    </div>
  );
};
