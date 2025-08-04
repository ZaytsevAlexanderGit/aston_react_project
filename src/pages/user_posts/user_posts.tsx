import { useSelector } from 'react-redux';
import { postsSelectors } from '../../entities/post/model/slice/postSlice.ts';
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi.ts';
import PostList from '../../widgets/PostList/PostList.tsx';
import { useSafeParams } from '../../shared/lib/hooks/useSafeParams.ts';

export const UserPagePosts = () => {
  const { id: userId } = useSafeParams(['id']);

  let posts = useSelector(postsSelectors.selectAllPosts);
  posts = posts.filter((post) => post.userId === +userId);

  const { isLoading } = useGetPostsByUserIdQuery(+userId, {
    skip: !!posts.length,
  });

  return isLoading ? <h3>Загрузка...</h3> : <PostList userId={+userId} />;
};
