import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const Layout: FC = () => {

  const location = useLocation();
  const isBreadCrumbsVisible = location.pathname !== '/' && location.pathname !== '/cart';

  return (
    <>
      <Header />
      {isBreadCrumbsVisible && (
        <BreadCrumbs />
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
