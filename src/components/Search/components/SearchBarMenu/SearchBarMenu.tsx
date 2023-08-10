import { FC } from 'react';
import { Product } from '../../../../types/product';
import styles from './SearchBarMenu.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { SearchItem } from '../../../SearchItem/SearchItem';

const cn = classNames.bind(styles);

interface Props {
  products: Product[];
  onSelected: (product: Product) => void;
}

export const SearchBarMenu: FC<Props> = ({
  products,
  onSelected,
}) => {
  return (
    <div className={cn('SearchBarMenu')}>
      <div className={cn('SearchBarMenu__content')}>
        {products.length > 0 ? (
          products.map((product) => (
            <div className={cn('SearchBarMenu__item')} key={product.id}>
              <Link
                to={`../${product.category}/${product.itemId}`}
                className={cn('SearchBarMenu__itemLink')}
              >
                <SearchItem product={product} onSelected={onSelected} />
              </Link>
            </div>
          ))
        ) : (
          <p className={cn('SearchBarMenu__item')}>No matching suggestions</p>
        )}
      </div>
    </div>
  );
};
