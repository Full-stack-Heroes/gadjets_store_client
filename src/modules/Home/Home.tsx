import { FC } from 'react';
import { HomeLayout } from './components/HomeLayout';
import { HomeContent } from './components/HomeContent';

export const Home: FC = () => {
  return (
    <HomeLayout>
      <HomeContent />
      <p>hi</p>
    </HomeLayout>
  );
};
