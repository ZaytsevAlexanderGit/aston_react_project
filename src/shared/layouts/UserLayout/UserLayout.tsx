import styles from './UserLayout.module.scss';
import { UserTabs } from '../../../widgets/UserTab/UserTabs.tsx';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserById } from '../../../entities/user/model/slice/userSlice.ts';
import { useGetUserByIdQuery } from '../../../entities/user/api/usersApi.ts';
import { useSafeParams } from '../../lib/hooks/useSafeParams.ts';

export const UserLayout = () => {
  const { id: userId } = useSafeParams(['id']);

  const user = getUserById(+userId);
  let userName = user ? user.name : undefined;

  const { data: userData, isLoading } = useGetUserByIdQuery(+userId, {
    skip: !!userName,
  });

  if (!userName && userData) userName = userData.name;

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : userName ? (
    <div className={styles.userLayout}>
      <h2>{userName}</h2>
      <UserTabs />
      <Outlet />
    </div>
  ) : (
    <Navigate to={'/posts'} />
  );
};
