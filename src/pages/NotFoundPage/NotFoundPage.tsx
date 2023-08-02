import { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { NotFound } from '../../components/NotFound';

export const NotFoundPage: FC = () => (
  <div>
    <Header/>
    <NotFound/>
    <Footer/>
  </div>
);
