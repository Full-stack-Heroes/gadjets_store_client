import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { FC, memo } from 'react';
import Phones from '../../assets/images/Categories/Phones.jpg';
import Tablets from '../../assets/images/Categories/Tablets.jpg';
import Accessories from '../../assets/images/Categories/Accessories.jpg';
import { CategoryCard } from '../CategoryCard';

export const Categories: FC= memo(() => {
  const cn = classNames.bind(styles);

  return (
    <div className={cn('Categories')}>
      <h2 className={cn('Title')}>
          Shop by category
      </h2>
      <div className={cn('CategoriesWrapper')}>
        <CategoryCard
          imageUrl={Phones}
          imageAlt ={'Phones'}
          categoryName = {'Phones'}
          categoryLink = {'/phones'}
          numberOfItems ={'100'}
        />

        <CategoryCard
          imageUrl={Tablets}
          imageAlt ={'Tablets'}
          categoryName = {'Tablets'}
          categoryLink = {'/tablets'}
          numberOfItems ={'100'}
        />

        <CategoryCard
          imageUrl={Accessories}
          imageAlt ={'Accessories'}
          categoryName = {'Accessories'}
          categoryLink = {'/accessories'}
          numberOfItems ={'100'}
        />
      </div>
    </div>);
});

Categories.displayName = 'Categories';
