import { FC } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { TotalCost } from '../../components/TotalCost/TotalCost';

export const TabletsPage: FC = () => {
  return (
    <div>
      <p>Tablets</p>
      <CartItem />
      <TotalCost />
    </div>
  );
};
