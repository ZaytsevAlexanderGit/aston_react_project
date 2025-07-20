import styles from './UserLayout.module.scss';
import { UserTabs } from '../../../widgets/UserTab/UserTabs.tsx';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { AppState } from '../../../app/providers/store/store.ts';
import { usersSelectors } from '../../../entities/user/model/slice/userSlice.ts';
import { useLoading } from '../../lib/hooks/useLoading.ts';

export const UserLayout = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  const loading = useLoading();

  if (userId === undefined) navigate('/posts');

  const userName = useSelector((state: AppState) => {
    const user = usersSelectors.selectById(state, +userId!);
    if (user) {
      return user.name;
    } else return undefined;
  });

  return loading ? (
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
