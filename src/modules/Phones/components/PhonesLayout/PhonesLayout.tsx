import { FC, ReactNode } from 'react';
import styles from './PhonesLayout.module.scss';

interface PhonesLayoutProps {
  children: ReactNode;
}

export const PhonesLayout: FC<PhonesLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
