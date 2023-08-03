import { FC } from 'react';
import { ProductsPage } from '../ProductsPage/ProductsPage';

export const AccessoriesPage: FC = () => {
  return <ProductsPage endpoint={'accessories'} />;
};
