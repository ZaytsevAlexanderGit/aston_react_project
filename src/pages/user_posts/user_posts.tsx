import { useParams } from 'react-router-dom';
import React, { Suspense } from 'react';

const PostList = React.lazy(
  () => import('../../widgets/PostList/PostList.tsx')
);

export const UserPagePosts = () => {
  const { id: userId } = useParams();

  return (
    <Suspense fallback={<h3>Загрузка...</h3>}>
      <PostList userId={userId} />
    </Suspense>
  );
};
