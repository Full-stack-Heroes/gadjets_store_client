import { FC, ReactNode } from 'react';
import styles from './PhonesLayout.module.scss';
import { Header } from '../../../../components/Header';

interface PhonesLayoutProps {
  children: ReactNode;
}

export const PhonesLayout: FC<PhonesLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.phonesContent}>{children}</main>
    </div>
  );
};
