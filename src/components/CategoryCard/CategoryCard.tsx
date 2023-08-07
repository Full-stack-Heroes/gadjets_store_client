import { FC, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './CategoryCard.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  imageUrl: string;
  imageAlt: string;
  categoryName: string;
  categoryLink: string;
  numberOfItems: number;
}

export const CategoryCard: FC<Props> = memo(
  ({
    imageUrl,
    imageAlt,
    categoryName,
    categoryLink,
    numberOfItems
  }) => {
    const cn = classNames.bind(styles);

    return (
      <div className={cn('card')}>
        <Link className={cn('cardLink')}to={categoryLink}>
          <img src={imageUrl} alt={imageAlt} className={cn('cardImage')} />

          <h4 className={cn('cardTitle')}>{categoryName}</h4>
        </Link>
        <h4 className={cn('cardItemsCount')}>
          {`${numberOfItems} models`}
        </h4>

      </div>
    );
  }
);

CategoryCard.displayName = 'CategoryCard';
