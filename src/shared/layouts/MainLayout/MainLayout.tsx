import styles from './MainLayout.module.scss';
import { Header, Footer } from '../../../widgets';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ThemeSwitcher } from '../../../features/ThemeSwitcher/ui/ThemSwitcher.tsx';
import { usePosts } from '../../../features/PostList/model/hooks/usePosts.ts';
import { useGetAllUsersQuery } from '../../../entities/user/api/usersApi.ts';

export const MainLayout = () => {
  usePosts();
  useGetAllUsersQuery();

  return (
    <div className={styles.layout}>
      <ScrollRestoration />
      <Header />
      <ThemeSwitcher />
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
