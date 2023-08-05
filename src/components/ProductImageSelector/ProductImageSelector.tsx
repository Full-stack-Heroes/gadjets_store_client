import { FC } from 'react';
import styles from './ProductImageSelector.module.scss';
import cn from 'classnames';
import { ProductDetails } from '../../types/productDetails';
import { normalizeImage } from '../../utils/helpers';

interface Props {
  className?: string;
  product: ProductDetails;
}

export const ProductImageSelector: FC<Props> = ({ className, product }) => {
  return (
    <div className={cn(styles.ProductImageSelector, className)}>
      <img src={normalizeImage(product.images[0])} style={{ height: '460px' }} alt="product img" />
    </div>
  );
};
