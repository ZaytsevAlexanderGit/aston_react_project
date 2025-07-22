import styles from './UserLayout.module.scss';
import { UserTabs } from '../../../widgets/UserTab/UserTabs.tsx';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { AppState } from '../../../app/providers/store/store.ts';
import { usersSelectors } from '../../../entities/user/model/slice/userSlice.ts';
import { useGetUserByIdQuery } from '../../../entities/user/api/usersApi.ts';

export const UserLayout = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (userId === undefined) navigate('/posts');

  let userName = useSelector((state: AppState) => {
    const user = usersSelectors.selectById(state, +userId!);
    return user ? user.name : undefined;
  });

  const { data: userData, isLoading } = useGetUserByIdQuery(+userId!, {
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
