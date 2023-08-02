import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import styles from './ProductPage.module.scss';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { ProductImageSelector } from '../../components/ProductImageSelector';
import { GoBack } from '../../components/GoBack/GoBack';
import { SelectPhoneParams } from '../../components/SelectPhoneParams';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { getProductData } from '../../api/products';
import { ProductDetails } from '../../types/productDetails';
import { Loader } from '../../components/Loader';
import { getSpecsFromProductData } from '../../utils/helpers';
import { ProductTechSpecs } from '../../components/ProductTechSpecs/ProductTechSpecs';

export const ProductPage: FC = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState<ProductDetails | null>(null);
  const isLoading = !productInfo;

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await getProductData(location.pathname);

      setProductInfo(fetchedData);
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
            <GoBack className={styles.GoBack} />

            <h1 className={styles.ProductPage__header}>
              Apple iPhone 11 Pro Max 64GB Gold
            </h1>

            <div className={cn(styles.SectionContainer, styles.PhoneDetails)}>
              <ProductImageSelector className={styles.SectionContainer__item} />

              <SelectPhoneParams className={styles.SectionContainer__item} />
            </div>

            <div className={cn(styles.SectionContainer, styles.PhoneParameters)}>
              <div className={styles.SectionContainer__item}>description</div>
              <ProductTechSpecs
                specs={getSpecsFromProductData(productInfo)}
              />
            </div>

            <h1 className={styles.ProductPage__header}>You may also like</h1>
            <div>Carousel</div>
          </div>
        )}
    </>
  );
};
