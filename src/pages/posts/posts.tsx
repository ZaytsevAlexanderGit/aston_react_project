import { PostList } from '../../widgets/PostList/PostList.tsx';
import { withLoading } from '../../shared/lib/hoc/withLoading.tsx';

export const PostsPage = () => {
  const PostListWithLoading = withLoading(PostList);
  return <PostListWithLoading />;
};
