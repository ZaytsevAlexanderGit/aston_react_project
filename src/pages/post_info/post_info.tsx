import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Routes } from '../../app/providers/router/routes.ts';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { Button } from '../../shared/ui/Button/Button.tsx';
import { useSelector } from 'react-redux';
import type { AppState } from '../../app/providers/store/store.ts';
import { postsSelectors } from '../../entities/post/model/slice/postSlice.ts';
import { useGetPostByIdQuery } from '../../entities/post/api/postsApi.ts';

export const PostInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === undefined) navigate(-1);

  let post = useSelector((state: AppState) =>
    postsSelectors.selectById(state, +id!)
  );

  const { data: postData, isLoading } = useGetPostByIdQuery(id!, {
    skip: post !== undefined,
  });

  if (!post && postData) post = postData;

  const handleBack = () => {
    navigate(-1);
  };

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : post !== undefined ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button buttonType={'secondary'} onClick={handleBack} children={'←'} />
      <PostCard post={post} showComments={true} />
    </div>
  ) : (
    <Navigate to={Routes.ALL_POSTS} />
  );
};
