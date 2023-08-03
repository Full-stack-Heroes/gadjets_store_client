import { FC, useCallback, useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { ProductImageSelector } from '../../components/ProductImageSelector';
import { useLocation } from 'react-router-dom';
import { getProductData, getProducts } from '../../api/products';
import { ProductDetails } from '../../types/productDetails';
import { Loader } from '../../components/Loader';
import { getSpecsFromProductData } from '../../utils/helpers';
import { ProductTechSpecs } from '../../components/ProductTechSpecs/ProductTechSpecs';
import { BackLink } from '../../components/BackLink/BackLink';
import { CartCarousel } from '../../components/CartCarousel/CartCarousel';
import { Product } from '../../types/product';
import { Actions } from '../../components/Actions';
import { About } from '../../components/About';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export const ProductPage: FC = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState<ProductDetails | null>(null);
  const [testProducts, setTestProducts] = useState<Product[]>(); //Temporary before endpoing /recomendation/id
  const isLoading = !productInfo;
  const locationToProduct = location.pathname;

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await getProductData(locationToProduct);
      const products = await getProducts('phones');

      setProductInfo(fetchedData);
      setTestProducts(products);
    } catch (error) {
      console.log('Error while fetching');
    }
  }, [location.pathname]);

  useEffect(() => {
    setProductInfo(null);
    fetchData();
  }, [location.pathname]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cn('container', 'ProductPage')}>
          {/* TODO: Configure breadcrumb */}
          <BreadCrumbs className={cn('BreadCrumb')} />
          <BackLink />

          <h1 className={cn('ProductPage__header')}>{productInfo.name}</h1>

          <div className={cn('SectionContainer', 'PhoneDetails')}>
            <ProductImageSelector className={cn('SectionContainer__item')} />
            <Actions
              className={'SectionContainer__item'}
              product={productInfo}
            />
          </div>

          <div className={cn('SectionContainer', 'PhoneParameters')}>
            <div className={cn('SectionContainer__item')}>
              <h2 className={cn('SectionContainer__header')}>About</h2>
              <div className={cn('HeaderBreak')}></div>
              <About product={productInfo} />
            </div>

            <div className={cn('SectionContainer__item')}>
              <h2 className={cn('SectionContainer__header')}>Tech specs</h2>
              <div className={cn('HeaderBreak')}></div>

              <ProductTechSpecs specs={getSpecsFromProductData(productInfo)} />
            </div>
          </div>

          {testProducts && (
            <CartCarousel
              products={testProducts}
              title="You may also like"
            />
          )}
        </div>
      )}
    </>
  );
};
