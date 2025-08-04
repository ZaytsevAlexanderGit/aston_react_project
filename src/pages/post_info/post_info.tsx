import { Navigate, useNavigate } from 'react-router-dom';
import { Routes } from '../../app/providers/router/routes.ts';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { Button } from '../../shared/ui/Button/Button.tsx';
import { useSelector } from 'react-redux';
import { getPostById } from '../../entities/post/model/slice/postSlice.ts';
import { useGetPostByIdQuery } from '../../entities/post/api/postsApi.ts';
import { useSafeParams } from '../../shared/lib/hooks/useSafeParams.ts';

export const PostInfoPage = () => {
  const { id } = useSafeParams(['id']);
  const navigate = useNavigate();

  let post = useSelector(getPostById(+id));

  const { data: postData, isLoading } = useGetPostByIdQuery(id, {
    skip: !!post,
  });

  if (!post && postData) post = postData;

  const handleBack = () => {
    navigate(-1);
  };

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : post ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button buttonType={'secondary'} onClick={handleBack} children={'←'} />
      <PostCard post={post} showComments={true} />
    </div>
  ) : (
    <Navigate to={Routes.ALL_POSTS} />
  );
};
