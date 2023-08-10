import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { FC } from 'react';
import { Product } from '../../types/product';
import { normalizeImage } from '../../utils/helpers';

const cn = classNames.bind(styles);

interface Props {
  product: Product,
  onSelected: (product: Product) => void,
}

export const SearchItem: FC<Props> = ({ product, onSelected }) => {
  const {
    image,
    name,
    price,
  } = product;

  return (
    <div
      className={cn('SearchItem')}
      onClick={() => onSelected(product)}
    >
      <div className={cn('SearchItem__content')}>
        <img
          src={normalizeImage(image)}
          className={cn('SearchItem__image')}
        />

        <p className={cn('SearchItem__name')}>{name}</p>
      </div>
      <span className={cn('SearchItem__price')}>
        ${price}
      </span>
    </div>
  );
};
