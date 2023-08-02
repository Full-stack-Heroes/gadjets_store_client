import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';

export const HomeContent: FC = () => {
  const cn = classNames.bind(styles);

  return (
    <div className={cn('home')}>
      <div className={cn('homeMainSliderWrapper')}>
        <h1 className={cn('homeTitle', 'homeTitleMain')}>
          Welcome to Nice Gadgets store!
        </h1>
        <div className={cn('homeMainSlider')}></div>
      </div>

      <div className={cn('homeNewModelsWrapper')}>
        <h2 className={cn('homeTitle', 'homeTitleSecondary')}>
          Brand new models
        </h2>
        <div className={cn('homeSliderWrapper')}>
          <div className={cn('homeNewModelsSlider')}></div>
        </div>
      </div>

      <div className={cn('homeCategoriesWrapper')}>
        <h2 className={cn('homeTitle', 'homeTitleSecondary')}>
          Shop by category
        </h2>

        <div className={cn('homeCategories')}>
          <div className={cn('homeCategoryItemWrapper')}>
            <div className={cn('homeCategoryItem')}></div>
            <h4 className={cn('homeCategoryItemTitle')}>Mobile phones</h4>
            <h4 className={cn('homeCategoryItemDescription')}>95 models</h4>
          </div>

          <div className={cn('homeCategoryItemWrapper')}>
            <div className={cn('homeCategoryItem')}></div>
            <h4 className={cn('homeCategoryItemTitle')}>Tablets</h4>
            <h4 className={cn('homeCategoryItemDescription')}>24 models</h4>
          </div>

          <div className={cn('homeCategoryItemWrapper')}>
            <div className={cn('homeCategoryItem')}></div>
            <h4 className={cn('homeCategoryItemTitle')}>Accessories</h4>
            <h4 className={cn('homeCategoryItemDescription')}>100 models</h4>
          </div>
        </div>
      </div>

      <div className={cn('homeHotPricesWrapper')}>
        <h2 className={cn('homeTitle', 'homeTitleSecondary')}>Hot prices</h2>
        <div className={cn('homeSliderWrapper')}>
          <div className={cn('homeHotPrices')}></div>
        </div>
      </div>
    </div>
  );
};
