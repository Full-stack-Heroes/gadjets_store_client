import { FC } from 'react';
import { HomeLayout } from './components/HomeLayout';
import { WelcomeTitle } from './components/WelcomeTitle';
// import { PromoSlider } from './components/PromoSlider';

export const Home: FC = () => {
  return (
    <HomeLayout>
      <WelcomeTitle />
    //   <PromoSlider />
    </HomeLayout>
  );
};
