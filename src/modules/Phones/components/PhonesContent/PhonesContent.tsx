import { FC } from 'react';
import ProductsPage from '../../../../pages/ProductsPage/ProductsPage';

export const PhonesContent: FC = () => {
  return (
    <>
      <ProductsPage endpoint={'phones'}/>
    </>
  );
};
