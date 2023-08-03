import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';
import { Categories } from '../../../../components/Categories/Categories';

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

      <Categories/>

      <div className={cn('homeHotPricesWrapper')}>
        <h2 className={cn('homeTitle', 'homeTitleSecondary')}>Hot prices</h2>
        <div className={cn('homeSliderWrapper')}>
          <div className={cn('homeHotPrices')}></div>
        </div>
      </div>
    </div>
  );
};
