import { FC, ReactNode } from 'react';
import styles from './CartLayout.module.scss';

interface CartLayoutProps {
  children: ReactNode;
}

export const CartLayout: FC<CartLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
