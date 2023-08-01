import { FC, ReactNode } from 'react';
import styles from './HomeLayout.module.scss';

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
