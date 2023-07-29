import { FC } from 'react';
import { Phones } from '../modules/Phones';
import { Footer } from '../components/Footer';

export const PhonesPage: FC = () => {
  return (
    <div>
      <h1>Phones page</h1>
      <Phones />
      <Footer />
    </div>
  );
};
