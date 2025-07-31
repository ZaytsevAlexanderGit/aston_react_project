import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.scss';
import clsx from 'clsx';
import { useSafeParams } from '../../shared/lib/hooks/useSafeParams.ts';

export const UserTabs = () => {
  const { id } = useSafeParams(['id']);

  const isActiveLinkClassName = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.userTabsLink, isActive && styles.userTabsLinkActive);

  return (
    <nav className={styles.userTabsAll}>
      <div className={styles.userTabsAllNav}>
        <NavLink to={`/users/${id}/posts`} className={isActiveLinkClassName}>
          Посты
        </NavLink>
        <NavLink to={`/users/${id}/albums`} className={isActiveLinkClassName}>
          Альбомы
        </NavLink>
        <NavLink to={`/users/${id}/todos`} className={isActiveLinkClassName}>
          Задачи
        </NavLink>
      </div>
      <NavLink
        to={`/posts`}
        className={({ isActive }: { isActive: boolean }) =>
          clsx(
            styles.userTabsLink,
            styles.userTabsLinkBack,
            isActive && styles.userTabsLinkActive
          )
        }
      >
        Вернуться к постам
      </NavLink>
    </nav>
  );
};
