import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Layout: FC = () => (
  <>
    <Header/>
    <main>
      <Outlet />
    </main>
    <Footer/>
  </>
);
