import styles from './UserLayout.module.scss';
import { UserTabs } from '../../../widgets/UserTab/UserTabs.tsx';
import { Outlet, useParams } from 'react-router-dom';
import { getCommentAuthorName } from '../../lib/utils.ts';

export const UserLayout = () => {
  const { id: userId } = useParams();

  const postAuthor =
    userId && getCommentAuthorName({ id: userId })
      ? getCommentAuthorName({ id: userId })
      : 'Неизвестный автор';

  return (
    <div className={styles.userLayout}>
      <h2>{postAuthor}</h2>
      <UserTabs />
      <Outlet />
    </div>
  );
};
