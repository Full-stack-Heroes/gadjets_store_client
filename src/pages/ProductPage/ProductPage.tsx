import { FC, useCallback, useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { ProductImageSelector } from '../../components/ProductImageSelector';
import { SelectPhoneParams } from '../../components/SelectPhoneParams';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { getProductData, getProducts } from '../../api/products';
import { ProductDetails } from '../../types/productDetails';
import { Loader } from '../../components/Loader';
import { getSpecsFromProductData } from '../../utils/helpers';
import { ProductTechSpecs } from '../../components/ProductTechSpecs/ProductTechSpecs';
import { BackLink } from '../../components/BackLink/BackLink';
import { CartCarousel } from '../../components/CartCarousel/CartCarousel';
import { Product } from '../../types/product';

export const ProductPage: FC = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState<ProductDetails | null>(null);
  const [testProducts, setTestProducts] = useState<Product[]>();
  const isLoading = !productInfo;

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await getProductData(location.pathname);
      const products = await getProducts('phones');

      setProductInfo(fetchedData);
      setTestProducts(products);
    } catch (error) {
      console.log('Error while fetching');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading
        ? (
          <Loader />
        ) : (
          <div className={cn(styles.container, styles.ProductPage)}>
            {/* TODO: Configure breadcrumb */}
            <BreadCrumbs className={styles.BreadCrumb} />
            <BackLink />

            <h1 className={styles.ProductPage__header}>
              {productInfo.name}
            </h1>

            <div className={cn(styles.SectionContainer, styles.PhoneDetails)}>
              <ProductImageSelector className={styles.SectionContainer__item} />

              <SelectPhoneParams className={styles.SectionContainer__item} />
            </div>

            <div className={cn(styles.SectionContainer, styles.PhoneParameters)}>
              <div className={styles.SectionContainer__item}>description</div>

              <div className={styles.SectionContainer__item}>
                <h2 className={styles.SectionContainer__header}>Tech specs</h2>
                <div className={styles.HeaderBreak}></div>

                <ProductTechSpecs
                  specs={getSpecsFromProductData(productInfo)}
                />
              </div>
            </div>

            <h1 className={styles.ProductPage__header}>You may also like</h1>
            {testProducts && <CartCarousel products={testProducts}/>}
          </div>
        )}
    </>
  );
};
