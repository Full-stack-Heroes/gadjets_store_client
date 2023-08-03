import { FC, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';
import { Categories } from '../../../../components/Categories/Categories';
import { CartCarousel } from '../../../../components/CardCarousel/CardCarousel';
import { getProducts } from '../../../../api/products';
import { Product } from '../../../../types/product';

export const HomeContent: FC = () => {
  const cn = classNames.bind(styles);
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>();
  const [newProducts, setNewProducts] = useState<Product[]>();
  const locationToProduct = {
    discounted: 'products/discount',
    new: 'phones/new',
  };

  const fetchData = useCallback(async () => {
    try {
      const discProducts = await getProducts(locationToProduct.discounted);
      const nProducts = await getProducts(locationToProduct.new);

      setDiscountedProducts(discProducts);
      setNewProducts(nProducts);
    } catch (error) {
      console.log('Error while fetching');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={cn('home')}>
      <div className={cn('homeMainSliderWrapper')}>
        <h1 className={cn('homeTitle', 'homeTitleMain')}>
          Welcome to Nice Gadgets store!
        </h1>
        <div className={cn('homeMainSlider')}></div>
      </div>

      <div className={cn('container', 'ProductPage')}>
        {newProducts && (
          <CartCarousel
            products={newProducts}
            title="New models"
          />
        )}
      </div>
      {/* <div className={cn('homeNewModelsWrapper')}>
        <h2 className={cn('homeTitle', 'homeTitleSecondary')}>
          Brand new models
        </h2>
        <div className={cn('homeSliderWrapper')}>
          <div className={cn('homeNewModelsSlider')}></div>
        </div>
      </div> */}

      <Categories/>

      <div className={cn('container', 'ProductPage')}>
        {discountedProducts && (
          <CartCarousel
            products={discountedProducts}
            title="Hot prices"
          />
        )}
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
