import { FC } from 'react';
import styles from './ProductPage.module.scss';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { ProductImageSelector } from '../../components/ProductImageSelector';
import { GoBack } from '../../components/GoBack/GoBack';
import { SelectPhoneParams } from '../../components/SelectPhoneParams';
import cn from 'classnames';
// import { useParams } from 'react-router-dom';

export const ProductPage: FC = () => {
  // const { productId } = useParams(); // id to fetch from products/id

  return (
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
        <div className={styles.SectionContainer__item}>table</div>
      </div>

      <h1 className={styles.ProductPage__header}>You may also like</h1>
      <div>Carousel</div>
    </div>
  );
};
