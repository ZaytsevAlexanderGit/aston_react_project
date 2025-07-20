import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Routes } from '../../app/providers/router/routes.ts';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { Button } from '../../shared/ui/Button/Button.tsx';
import { useSelector } from 'react-redux';
import type { AppState } from '../../app/providers/store/store.ts';
import { postsSelectors } from '../../entities/post/model/slice/postSlice.ts';
import { useLoading } from '../../shared/lib/hooks/useLoading.ts';

export const PostInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === undefined) navigate(-1);

  const loading = useLoading();

  const post = useSelector((state: AppState) =>
    postsSelectors.selectById(state, +id!)
  );

  const handleBack = () => {
    navigate(-1);
  };

  return loading ? (
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
