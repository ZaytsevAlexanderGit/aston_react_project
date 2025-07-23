import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postsSelectors } from '../../entities/post/model/slice/postSlice.ts';
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi.ts';
import React, { Suspense } from 'react';

const PostList = React.lazy(
  () => import('../../widgets/PostList/PostList.tsx')
);

export const UserPagePosts = () => {
  const { id: userId } = useParams();

  let posts = useSelector(postsSelectors.selectAll);
  if (userId) {
    posts = posts.filter((post) => post.userId === +userId);
  }

  const { isLoading } = useGetPostsByUserIdQuery(+userId!, {
    skip: !!posts.length,
  });

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : (
    <PostList userId={userId ? +userId : undefined} />
  );

  return (
    <Suspense fallback={<h3>Загрузка...</h3>}>
      <PostList userId={userId} />
    </Suspense>
  );
};
