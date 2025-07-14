import styles from './MainLayout.module.scss';
import { Header, Footer } from '../../../widgets';
import { Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '../../../features/ThemeSwitcher/ui/ThemSwitcher.tsx';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <ThemeSwitcher />
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
