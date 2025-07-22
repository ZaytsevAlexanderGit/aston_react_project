import type { ReactNode } from 'react';

import styles from './MainLayout.module.scss';
import { Header, Footer } from '../widgets';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainLayout}>{children}</main>
      <Footer />
    </div>
  );
};
