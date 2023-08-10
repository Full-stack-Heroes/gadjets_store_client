import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { FC, memo, useState, useEffect } from 'react';
import Phones from '../../assets/images/Categories/Phones.jpg';
import Tablets from '../../assets/images/Categories/Tablets.jpg';
import Accessories from '../../assets/images/Categories/Accessories.jpg';
import { CategoryCard } from '../CategoryCard';
import { getProductsWithCounter } from '../../api/products';
import { productWithCounter } from '../../types/productWithCounter';

export const Categories: FC = memo(() => {
  const [phonesCount, setPhonesCount] = useState(0);
  const [tabletsCount, setTabletsCount] = useState(0);
  const [accessoriesCount, setAccessoriesCount] = useState(0);

  const cn = classNames.bind(styles);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const phonesCount: productWithCounter = await getProductsWithCounter(
          'phones?page=1&limit=1',
        );
        console.log(phonesCount);
        const tabletsCount: productWithCounter = await getProductsWithCounter(
          'tablets?page=1&limit=1',
        );
        const accessoriesCount: productWithCounter =
          await getProductsWithCounter('accessories?page=1&limit=1');

        setPhonesCount(phonesCount.count);
        setTabletsCount(tabletsCount.count);
        setAccessoriesCount(accessoriesCount.count);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className={cn('Categories')}>
      <h2 className={cn('Title')}>Shop by category</h2>
      <div className={cn('CategoriesWrapper')}>
        <CategoryCard
          imageUrl={Phones}
          imageAlt={'Phones'}
          categoryName={'Phones'}
          categoryLink={'/phones'}
          numberOfItems={phonesCount}
        />

        <CategoryCard
          imageUrl={Tablets}
          imageAlt={'Tablets'}
          categoryName={'Tablets'}
          categoryLink={'/tablets'}
          numberOfItems={tabletsCount}
        />

        <CategoryCard
          imageUrl={Accessories}
          imageAlt={'Accessories'}
          categoryName={'Accessories'}
          categoryLink={'/accessories'}
          numberOfItems={accessoriesCount}
        />
      </div>
    </div>
  );
});

Categories.displayName = 'Categories';
