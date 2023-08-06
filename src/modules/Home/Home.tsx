import { FC } from 'react';
import { HomeLayout } from './components/HomeLayout';
import { WelcomeTitle } from './components/WelcomeTitle';
import { PromoSlider } from './components/PromoSlider';
import { HomeContent } from './components/HomeContent';

export const Home: FC = () => {
  return (
    <HomeLayout>
      <WelcomeTitle />
      <PromoSlider />
      <HomeContent />
    </HomeLayout>
  );
};
