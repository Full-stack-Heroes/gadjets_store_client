import { FC } from 'react';
import { ProductsPage } from '../../../../pages/ProductsPage/ProductsPage';

export const PhonesContent: FC = () => {
  return (
    <>
      <ProductsPage
        title="Mobile Phones"
        endpoint={'phones'}
      />
    </>
  );
};
