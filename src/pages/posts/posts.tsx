import PostList from '../../widgets/PostList/PostList.tsx';
import { withLoading } from '../../shared/lib/hoc/withLoading.tsx';
import { useGetAllUsersQuery } from '../../entities/user/api/usersApi.ts';
import { usePosts } from '../../features/PostList/model/hooks/usePosts.ts';

export const PostsPage = () => {
  usePosts();
  useGetAllUsersQuery();

  const PostListWithLoading = withLoading({
    WrappedComponent: PostList,
  });
  return <PostListWithLoading />;
};
