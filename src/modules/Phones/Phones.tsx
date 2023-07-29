import { FC } from 'react';
import { PhonesLayout } from './components/PhonesLayout';
import { PhonesContent } from './components/PhonesContent';

export const Phones: FC = () => {
  return (
    <PhonesLayout>
      <PhonesContent />
    </PhonesLayout>
  );
};
