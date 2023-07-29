import { FC, ReactNode } from 'react';
import styles from './HomeLayout.module.scss';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};
