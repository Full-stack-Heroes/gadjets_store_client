import { FC } from 'react';
import ProductsPage from '../ProductsPage/ProductsPage';

export const TabletsPage: FC = () => {
  return (
    <ProductsPage
      endpoint={'tablets'}
    />
  );
};
