import { FC } from 'react';
import { ProductsPage } from '../ProductsPage/ProductsPage';

export const PhonesPage: FC = () => {
  return <ProductsPage endpoint={'phones'} title="Mobile phones" />;
};
