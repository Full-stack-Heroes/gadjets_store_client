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
import { CardCarousel } from '../../components/CardCarousel/CardCarousel';
import { Product } from '../../types/product';
import { Actions } from '../../components/Actions';
import { About } from '../../components/About';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export const ProductPage: FC = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState<ProductDetails | null>(null);
  const [productImages, setProductImages] = useState<string[] | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>();
  const isLoading = !productInfo;
  const locationToProduct = location.pathname.slice(1);
  const isUpdating = Boolean(!productImages);
  console.log(productImages);

  const fetchData = useCallback(async (path: string) => {
    try {
      const fetchedData = await getProductData(path);
      const products = await getProducts(`${path}/recommended`);

      setProductInfo(fetchedData);
      setRecommendedProducts(products);
      setProductImages(fetchedData.images);
    } catch (error) {
      console.log('Error while fetching');
    }
  }, []);

  const fetchOnActionsChange = useCallback(async(path: string) => {
    setProductImages(null);

    try {
      const fetchedData = await getProductData(path);
      const products = await getProducts(`${path}/recommended`);

      setProductInfo(fetchedData);
      setRecommendedProducts(products);
      setProductImages(fetchedData.images);
    } catch (error) {
      console.log('Error while fetching');
    }
  }, []);

  useEffect(() => {
    setProductInfo(null);
    fetchData(locationToProduct);
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
            <ProductImageSelector images={productImages} className={cn('SectionContainer__item')} />
            <Actions
              className={'SectionContainer__item'}
              product={productInfo}
              onActionsChange={fetchOnActionsChange}
              isChanging={isUpdating}
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

          {recommendedProducts && (
            <CardCarousel
              products={recommendedProducts}
              title="You may also like"
            />
          )}
        </div>
      )}
    </>
  );
};
