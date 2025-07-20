import { useSelector } from 'react-redux';
import type { AppState } from '../../../app/providers/store/store.ts';

export const useLoading = () => {
  const postLoading = useSelector(
    (state: AppState) => state.posts.postsLoading
  );
  const usersLoading = useSelector(
    (state: AppState) => state.users.usersLoading
  );

  if (postLoading === 'loading' || usersLoading === 'loading') return true;
  else return false;
};
