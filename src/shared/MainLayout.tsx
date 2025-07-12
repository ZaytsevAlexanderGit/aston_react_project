import styles from './MainLayout.module.scss';
import { Header, Footer } from '../widgets';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
