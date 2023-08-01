import { FC } from 'react';
import { CartLayout } from './components/CartLayout';
import { CartContent } from './components/CartContent';

export const Cart: FC = () => {
  return (
    <CartLayout>
      <CartContent />
    </CartLayout>
  );
};
